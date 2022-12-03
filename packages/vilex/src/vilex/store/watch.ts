import { isFun } from '../../utils/isFun'
import { nextTick } from '../../utils/nextTick'
import { EmitType } from '../constant/EmitType'
import { isRef } from './isRef'
import { Ref } from './ref'

export function watch<T = any>(ref: Ref<T>, listener: (value: any) => void): void
export function watch(ref: any, listener: (value: any) => void): void
export function watch(ref: any, listener: any): void {
  isFun(listener) && isRef(ref) && ref.on(EmitType.ON_PROXY_CHANGE, (_key: string, value: any) => nextTick(() => listener(value)))
}
