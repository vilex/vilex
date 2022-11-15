import { Ref } from '../vilex-dom/elements/velements'
import { isProxy } from './isProxy'

export function tryGetValue<T>(value: T): T {
  return isProxy(value) ? ((value as Ref).value as T) : value
}
