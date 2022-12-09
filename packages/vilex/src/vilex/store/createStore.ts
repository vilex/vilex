import { canProxy } from '../../utils/canProxy'
import { isProxy } from '../../utils/isProxy'
import { validAttribute } from '../../utils/validAttribute'
import { AnyObject } from '../../_types/common'
import { createProxy } from './createProxy'
import { createRef } from './createRef'
import { defineStoreProperty } from './defineStoreProperty'

function deepStore<T extends AnyObject, R extends AnyObject, K extends keyof R>(data: T, root?: R, key?: K) {
  if (canProxy(data)) {
    if (isProxy(data)) {
      return data
    }
    for (const key in data) {
      validAttribute(key) && deepStore(data[key], data, key)
    }
    return isProxy(data) ? data : (createProxy(data) as unknown as T)
  }
  root && key && (root[key] = createRef(data) as R[K])
  return data
}

export function createStore(data: AnyObject) {
  return deepStore(defineStoreProperty(data))
}
