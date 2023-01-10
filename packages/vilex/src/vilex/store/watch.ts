import { isFun } from '../../utils/isFun'
import { isProxy } from '../../utils/isProxy'
import { EmitType } from '../constant/EmitType'
import { Ref } from './ref'

export function watch<T = any>(ref: Ref<T>, listener: (value: any) => void): void
export function watch(ref: any, listener: (value: any) => void): void
export function watch(ref: any, listener: any): void {
  isFun(listener) && isProxy(ref) && addEventListeners(ref, listener)
}

const addEventListeners = (ref: any, listener: (value: any) => void) => {
  ref.on(EmitType.ON_PROXY_CHANGE, (_key: string, value: any) => listener(value))
  ref.on(EmitType.on_list_view_change, (_key: string, value: any) => {
    listener(value)
  })
}
