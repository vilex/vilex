import { ref } from "./ref/ref"
import { RefImpl } from "./ref/RefImpl"

function reactive<T extends object>(value: T) {
    if (value instanceof RefImpl || typeof value === 'function') return value
    if (!value || typeof value !== 'object' || typeof value !== 'function') return ref(value)
    return new Proxy(value, {
        set(target, propertyKey, value, receiver) {
            // if ()
            return Reflect.set(target, propertyKey, value, receiver)
        }
    })
}