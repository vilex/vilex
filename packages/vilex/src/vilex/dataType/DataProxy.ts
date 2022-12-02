// import { ON_PROXY_CHANGE } from '../constant/EmitType'
import { AnyObject } from '../../_types/common'
import { EmitType } from '../constant/EmitType'
import { DataEmit } from './DataEmit'
import { EnProxy } from './EnProxy'

export function DataProxy(data: AnyObject) {
  return EnProxy(DataEmit(data), {
    set(target, key, value) {
      const bool = Reflect.set(target, key, value)
      target.emit && target.emit(EmitType.ON_PROXY_CHANGE, key, value)
      return bool
    }
  })
}
