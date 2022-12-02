import { AnyObject } from './../../_types/common'
import { Primitive } from '../../_types/common'
import { isObject } from '@vilex/utils'
import { createRef } from './createRef'
import { createStore } from './createStore'

export interface Ref<T> {
  value: T
}
export type Store<T = AnyObject> = { [k in keyof T]: T[k] extends Primitive ? Ref<T[k]> : Store<T[k]> }

export function ref<T extends AnyObject>(value: T): Store<T>
export function ref<T>(value: T): Ref<T>
export function ref(value: any) {
  return isObject(value) ? createStore(value) : createRef(value)
}
