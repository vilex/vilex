import { nextTick } from '../../utils/nextTick'
import { ref, Ref } from './ref'
import { watch } from './watch'

type CallFn = () => any
type RefList = Ref<any>[]
export function computed<T extends Ref<any>, R extends CallFn>(ref: T, callFn: R): Ref<ReturnType<R>>
export function computed<T extends RefList, R extends CallFn>(refs: T, callFn: R): Ref<ReturnType<R>>

export function computed(refs: any, callFn: any): any {
  const value = ref(callFn())
  const list = Array.isArray(refs) ? refs : [refs]
  list.forEach(ref => watch(ref, newVal => newVal != ref.value && nextTick(() => (value.value = callFn()))))
  return value
}
