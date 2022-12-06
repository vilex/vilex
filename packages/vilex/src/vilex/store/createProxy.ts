import { isSymbol } from '@vilex/utils'
import { isProxy } from '../../utils/isProxy'
import { AnyObject } from '../../_types/common'
import { EmitType } from '../constant/EmitType'
import { EnProxy } from '../dataType/EnProxy'
import { isRef } from './isRef'
import { merge } from './merge'
import { ref } from './ref'
import { unref } from './unref'

const blacklist = ['emit', 'on', 'length']

export function createProxy<T extends AnyObject>(data: T, dataTypeName?: string) {
  if (typeof data === 'function') return data
  return EnProxy(
    data,
    {
      get(target, p, receiver) {
        return Reflect.get(target, p, receiver)
      },
      set(target, key, value) {
        if (isSymbol(key) || isSymbol(value)) {
          return Reflect.set(target, key, value)
        }

        if (blacklist.includes(key as string)) {
          return Reflect.set(target, key, value)
        }

        const vp = Reflect.get(target, key)
        if (isRef(vp)) {
          vp.value = isRef(value) ? value.value : value
          return true
        }

        if (isProxy(vp)) {
          merge(vp, value)
          return true
        }

        if (vp === undefined) {
          const nv = isProxy(value) ? ref(unref(value)) : ref(value)
          data.emit(EmitType.ON_PROXY_CHANGE, key, nv)
          return Reflect.set(target, key, nv)
        }

        key !== 'length' && data.emit(EmitType.ON_PROXY_CHANGE, key, value)

        return Reflect.set(target, key, value)
      },
      deleteProperty(target, p) {
        target.emit(EmitType.ON_PROXY_CHANGE, p, `Del-$_$-Self`)
        return Reflect.deleteProperty(target, p)
      },
      apply(target, ...args) {
        Reflect.apply(target as any, ...args)
      }
    },
    dataTypeName
  )
}
