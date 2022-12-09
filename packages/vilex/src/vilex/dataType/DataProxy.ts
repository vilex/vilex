import { AnyObject } from '../../_types/common'
import { EmitType } from '../constant/EmitType'
import { DataEmit } from './DataEmit'
import { EnProxy } from './EnProxy'

export function DataProxy(data: AnyObject) {
  const newData = DataEmit(data)
  return EnProxy(newData, {
    set(target, key, value) {
      const bool = Reflect.set(target, key, value)
      target.emit && target.emit(EmitType.ON_PROXY_CHANGE, key, value)
      return bool
    }
  })
}
