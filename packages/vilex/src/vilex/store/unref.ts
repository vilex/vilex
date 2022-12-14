import { isProxy } from '../../utils/isProxy'
import { Primitive } from '../../_types/common'
import { isRef } from './isRef'
import { Ref } from './ref'

export function unref<T extends Primitive>(ref: T): T
export function unref<T>(ref: Ref<T>): T
export function unref(ref: any) {
  if (isRef(ref)) return ref.value
  if (isProxy(ref)) {
    const unrefObject: any = {}
    for (const key in ref) {
      if (Object.prototype.hasOwnProperty.call(ref, key)) {
        if (!(typeof key === 'string' && key.startsWith('_$_'))) {
          unrefObject[key] = unref(ref[key])
        }
      }
    }
    return unrefObject
  }
  return ref
}

export const unval = unref
