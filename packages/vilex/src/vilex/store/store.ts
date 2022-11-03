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

// const ArrayActions = ['shift', 'push', 'splice', 'pop', 'unshift']
const blacklist = ['emit', 'on']

function newProxy(data: Record<string, unknown>, dataTypeName?: string) {
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
        console.log(`set `, key, value)
        if (4 === Number(key)) {
          debugger
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
          if (!isProxy(value)) {
            const nv = isObject(value) ? store(value) : ref(value)
            ;(data as IDataEmit).emit(EmitType.ON_PROXY_CHANGE, key, nv)
            return Reflect.set(target, key, nv)
          } else {
            return Reflect.set(target, key, value)
          }
        }

        if (key === 'length') {
          console.log(`len`)
        } else {
          ;(data as IDataEmit).emit(EmitType.ON_PROXY_CHANGE, key, value)
        }

        return Reflect.set(target, key, value)
      },
      deleteProperty(target, p) {
        console.log(`deleteProperty`, target, p)
        // const item = target[p] as IDataEmit
        target.emit(EmitType.ON_PROXY_CHANGE, p, `Del-$_$-Self`)
        return Reflect.deleteProperty(target, p)
      },
      apply(target, ...args) {
        debugger
        if (target.name === 'map') {
          debugger
        }
        Reflect.apply(target, ...args)
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

export function ref<T>(data: T): { value: T } {
  if (canProxy(data)) {
    console.warn(
      `ref warn: You used value() => ${data}, you should use store() => ${data}`
    )
  }
  return newProxy(DataEmit({ value: data }), 'RefProxy') as unknown as {
    value: T
  }
}

export function isRef(ref: unknown) {
  return Object.prototype.toString.call(ref) === '[object RefProxy]'
}
