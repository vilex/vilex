import { IDataEmit } from './../dataType/DataEmit'
import { DataEmit } from '../dataType/DataEmit'
import { EnProxy } from '../dataType/EnProxy'
import { EmitType } from '../constant/EmitType'
import { validAttribute } from '../../utils/validAttribute'
import { canProxy } from '../../utils/canProxy'
import { isProxy } from '../../utils/isProxy'
import { defineStoreProperty } from './defineStoreProperty'
import { isObject, isSymbol } from '@vilex/utils'
import { merge } from './merge'
import { cloneProxy } from './clone'
import { isRef } from './isRef'

const blacklist = ['emit', 'on']

function newProxy(_data: Record<string, unknown>, dataTypeName?: string) {
  const data = _data as IDataEmit
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
        if (value === undefined) {
          debugger
        }
        // console.log(`set `, key, value)

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
          let nv
          if (!isProxy(value)) {
            nv = isObject(value) ? store(value) : ref(value)
            data.emit(EmitType.ON_PROXY_CHANGE, key, nv)
            return Reflect.set(target, key, nv)
          } else {
            nv = cloneProxy(value)
            data.emit(EmitType.ON_PROXY_CHANGE, key, nv)
            return Reflect.set(target, key, nv)
          }
        }

        if (key === 'length') {
          // console.log(`len`)
        } else {
          data.emit(EmitType.ON_PROXY_CHANGE, key, value)
        }

        return Reflect.set(target, key, value)
      },
      deleteProperty(target, p) {
        // console.log(`deleteProperty`, target, p)
        // const item = target[p] as IDataEmit
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

function deepStore<T extends Record<string, unknown>>(
  data: T,
  root?: T,
  key?: string
): T {
  if (canProxy(data)) {
    if (isProxy(data)) {
      return data
    }
    for (const key in data) {
      if (validAttribute(key)) {
        deepStore(data[key] as Record<string, unknown>, data, key)
      }
    }
    return newProxy(data) as unknown as T
  }
  if (root && key) {
    // @ts-ignore
    root[key] = ref(data as unknown as string)
  }
  return data
}

export function store<T>(data: T): T {
  if (canProxy(data)) {
    return deepStore(
      // DataEmit({ ...data, __type__: 'StoreProxy' })
      defineStoreProperty(data as object) as Record<string, unknown>
    ) as unknown as T
  } else {
    console.warn(
      `Filed to store() => ${data}, you should use value() => ${data}`
    )
  }
  return data
}

export interface Ref<T = any> {
  value: T
}

export function ref<T>(data: T): Ref<T> {
  return newProxy(DataEmit({ value: data }), 'RefProxy') as unknown as Ref<T>
}
