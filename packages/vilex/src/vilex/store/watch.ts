import { isFun } from '../../utils/isFun'
import { EmitType } from '../constant/EmitType'
import { isRef } from './isRef'
import { Ref } from './store'

export function watch(ref: Ref, listener: (value: any) => void): void
export function watch(ref: any, listener: (value: any) => void): void
export function watch(ref: any, listener: any): void {
  isFun(listener) &&
    isRef(ref) &&
    ref.on(EmitType.ON_PROXY_CHANGE, (_key: string, value: any) =>
      listener(value)
    )
}
