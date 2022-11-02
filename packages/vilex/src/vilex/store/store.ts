import { IDataEmit } from './../dataType/DataEmit'
import { DataEmit } from '../dataType/DataEmit'
import { EnProxy } from '../dataType/EnProxy'
import { EmitType } from '../constant/EmitType'
import { validAttribute } from '../../utils/validAttribute'
import { canProxy } from '../../utils/canProxy'
import { isProxy } from '../../utils/isProxy'
import { defineStoreProperty } from './defineStoreProperty'

// const ArrayActions = ['shift', 'push', 'splice', 'pop', 'unshift']

let vp
function newProxy(data: Record<string, unknown>, dataTypeName?: string) {
  return EnProxy(
    data,
    {
      get(target, p, receiver) {
        return Reflect.get(target, p, receiver)
      },
      set(target, key, value) {
        vp = Reflect.get(target, key)
        if (isRef(vp) && !isRef(value)) {
          vp.value = value
          return true
        }
        console.log(`emit `, target, key, value)

        if (key === 'length') {
          console.log(`len`)
          // const len = Reflect.get(target, key)
          // if (len > value) {
          //   for (let i = len; i > value; i--) {
          //     const itemData = target[i - 1] as IDataEmit
          //     itemData.emit(EmitType.ON_PROXY_CHANGE, i - 1, `Del-$_$-Self`)
          //   }
          // }
        } else {
          ;(data as IDataEmit).emit(EmitType.ON_PROXY_CHANGE, key, value)
        }

        return Reflect.set(target, key, value)
      },
      deleteProperty(target, p) {
        console.log(`deleteProperty`, target, p)
        const item = target[p] as IDataEmit
        item.emit(EmitType.ON_PROXY_CHANGE, p, `Del-$_$-Self`)
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
