import { Ref } from '../vilex/store/ref'
import { isProxy } from './isProxy'

export function tryGetValue<T>(value: T): T {
  return isProxy(value) ? ((value as Ref<string>).value as T) : value
}
