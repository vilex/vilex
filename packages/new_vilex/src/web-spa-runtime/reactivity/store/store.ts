import { Monitor } from './../utils/Monitor';
import { ref, unRef } from "../ref/ref"
import { RefImpl } from "../ref/RefImpl"
import { beProxed, beRef, defineProperty, isProxy } from "../utils"

type StoreExtends = {
    _reactivity: true,
    _monitor: Monitor
    watch: (callback: WatchCallback) => void
}

type WatchCallback = (key: string | symbol, newValue: any, oldValue: any) => void
type Store<T> = {
    [K in keyof T]: T[K] extends Record<string | symbol, any> ? Stored<T[K], StoreExtends> : RefImpl<T[K]>
}

type Stored<V1, V2> = V1 & V2



export function store<T extends Record<string | symbol, any>>(obj: T): Stored<Store<T>, StoreExtends> {
    if (!beProxed(obj)) return obj

    for(const key in obj) {
        const _value = obj[key]
        if (beProxed(_value)) {
            obj[key] = store(_value)
        }
        else 
        if (beRef(_value)) {
            obj[key] = ref(_value) as typeof _value
        }
    }

    const newObj = defineProxyProperties(obj)
    return new Proxy(newObj, {
        set(target, propertyKey, newValue, receiver) {
            console.log('set', propertyKey, newValue)
            const _oldValue = target[propertyKey]
            
            if (_oldValue === undefined) {
                if (beRef(newValue)) {
                    newValue = ref(newValue)
                } else if (beProxed(newValue)) {
                    newValue = store(newValue)
                }
            } else if (_oldValue instanceof RefImpl && !(newValue instanceof RefImpl)) {
                _oldValue.value = newValue
                return true
            } else if (isProxy(_oldValue) && !isProxy(newValue)) {
                Object.assign(_oldValue, newValue)
                return true
            }

            target._monitor.fireChanges(propertyKey,newValue, _oldValue)

            return Reflect.set(target, propertyKey, newValue, receiver)
        },
        deleteProperty(target, p) {
            Reflect.deleteProperty(target, p)
            target._monitor.fireDeletes(p as string)
            return true
        }
    })
}

function defineProxyProperties<T extends Record<string, any>>(obj:T)  {
    defineProperty(obj, '_reactivity', true)
    defineProperty(obj, '_monitor', new Monitor())
    defineProperty(obj, 'watch', function(callback: WatchCallback) {
        obj._monitor.onChange(callback)
    })
    return obj as Stored<Store<T>, StoreExtends>
}

