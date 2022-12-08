import { AnyObject } from './../../_types/common'
import { Primitive } from '../../_types/common'
import { isObject } from '@vilex/utils'
import { createRef } from './createRef'
import { createStore } from './createStore'

// export interface Ref<T> {
//   value: T
// }

export type StoreArray<T> = T extends never[] ? any[] : T

export type Store<T = AnyObject> = { [K in keyof T]: T[K] extends Primitive ? T[K] : T[K] extends never[] ? any[] : Store<T[K]> }
export type Ref<T> = T extends Primitive ? { value: T } : T extends never[] ? any[] : Store<T>

export function ref<T>(value: T): Ref<T>
export function ref(value: any) {
  return isObject(value) ? createStore(value) : createRef(value)
}

export const val = ref
