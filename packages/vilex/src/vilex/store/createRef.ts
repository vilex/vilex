import { DataEmit } from '../dataType/DataEmit'
import { createProxy } from './createProxy'
import { Ref } from './ref'

export function createRef<T>(data: T): Ref<T> {
  return createProxy(DataEmit({ value: data }), 'RefProxy') as unknown as Ref<T>
}
