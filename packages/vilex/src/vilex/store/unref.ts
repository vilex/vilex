import { AnyObject } from '../../_types/common'
import { isRef } from './isRef'

export const unref = (ref: AnyObject) => (isRef(ref) ? ref.value : ref)
