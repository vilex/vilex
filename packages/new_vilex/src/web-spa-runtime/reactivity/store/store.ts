import { ref, unRef } from "../ref/ref"
import { RefImpl } from "../ref/RefImpl"
import { beProxed, beRef, defineProperty, isProxy } from "../utils"

type WatchCallback<T> = (newValue: T, oldValue: T) => void;
type ProxyObjextExtends<T> = {
    _deps: []
    _reactivity: true,
    watch: WatchCallback<T>
    unWatch: WatchCallback<T>
}


export function store<T extends Record<string | symbol, any>>(obj: T) {
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

            return Reflect.set(target, propertyKey, newValue, receiver)
        },
        deleteProperty(target, p) {
            return Reflect.deleteProperty(target, p)
        }
    })
}

function defineProxyProperties<T extends Record<string, any>>(obj:T)  {
    defineProperty(obj, '_reactivity', true)
    defineProperty(obj, '_deps', [])
    defineProperty(obj, 'watch', function(callback: WatchCallback<typeof obj>) {
        obj._deps.push(callback)
    })
    defineProperty(obj, 'unWatch', function(callback: WatchCallback<typeof obj>) {
        const index = obj._deps.indexOf(callback)
        if (index >= 0) {
            obj._deps.splice(index, 1)
        }
    })
    return obj as T & ProxyObjextExtends<T>
}

