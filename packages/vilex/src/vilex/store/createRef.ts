import { DataEmit } from '../dataType/DataEmit'
import { createProxy } from './createProxy'
import { Ref } from './ref'

export function createRef<T>(data: T): Ref<T> {
  const newData = DataEmit({ value: data, _$_isRef: true })
  return createProxy(newData) as unknown as Ref<T>
}
