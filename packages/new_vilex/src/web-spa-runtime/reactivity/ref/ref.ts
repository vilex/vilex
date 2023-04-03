
import { RefImpl } from './RefImpl'

export function ref<T>(value: T) {
    return new RefImpl(value)
}

export function unRef<T>(value: T): T {
    return value instanceof RefImpl ? value.value : value
}
