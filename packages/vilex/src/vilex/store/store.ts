import { IDataEmit } from './../dataType/DataEmit'
import { DataEmit } from '../dataType/DataEmit'
import { EnProxy } from '../dataType/EnProxy'
import { EmitType } from '../constant/EmitType'
import { validAttribute } from '../../utils/validAttribute'
import { canProxy } from '../../utils/canProxy'
import { isProxy } from '../../utils/isProxy'

// const ArrayActions = ['shift', 'push', 'splice', 'pop', 'unshift']

let vp
function newProxy(data: Record<string, unknown>, dataTypeName?: string) {
  return EnProxy(
    data,
    {
      get(target, p, receiver) {
        if (typeof p === 'string') {
          console.log(`get`, p)
        }
        return Reflect.get(target, p, receiver)
      },
      set(target, key, value) {
        vp = Reflect.get(target, key)
        if (isRef(vp)) {
          vp.value = value
          return true
        }
        ;(data as IDataEmit).emit(EmitType.ON_PROXY_CHANGE, key, value)
        return Reflect.set(target, key, value)
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
      DataEmit({ ...data, __type__: 'StoreProxy' })
    ) as unknown as T
  } else {
    console.warn(
      `Filed to store() => ${data}, you should use value() => ${data}`
    )
  }
  return data
}

export function ref<T extends string | number | boolean>(
  data: T
): { value: T } {
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
