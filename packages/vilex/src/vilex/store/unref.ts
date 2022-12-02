import { isProxy } from '../../utils/isProxy'
import { isRef } from './isRef'

export function unref<T>(ref: T): T
export function unref(ref: any) {
  if (isRef(ref)) return ref.value
  if (isProxy(ref)) {
    const unrefObject: any = {}
    for (const key in ref) {
      if (Object.prototype.hasOwnProperty.call(ref, key)) {
        unrefObject[key] = unref(ref[key])
      }
    }
    return unrefObject
  }
  return ref
}
