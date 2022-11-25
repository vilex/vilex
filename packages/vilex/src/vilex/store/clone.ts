import { isSymbol } from '@vilex/utils'
import { isRef } from './isRef'
import { store } from './store'

type Call = (...args: any[]) => void
const blacklist = ['emit', 'on']

function _clone(target: any, cache = new Map()) {
  const isObject = (obj: any) => typeof obj === 'object' && obj !== null
  const forEach = (array: any[], cb: Call) => {
    const leng = array.length
    let i = -1

    while (++i < leng) {
      cb(array[i])
    }
  }

  if (isObject(target)) {
    const cacheObj = cache.get(target)

    if (cacheObj) {
      return cacheObj
    }

    const cloneTarget: { [K: string | number]: any } = Array.isArray(target)
      ? []
      : {}
    const keys = Object.keys(target)

    cache.set(target, cloneTarget)

    forEach(keys, key => {
      const value = target[key]
      if (blacklist.includes(key) || isSymbol(key)) {
      } else if (isRef(value)) {
        cloneTarget[key] = value.value
      } else {
        cloneTarget[key] = isObject(value) ? _clone(value, cache) : value
      }
    })

    return cloneTarget
  } else {
    return target
  }
}

export const cloneProxy = (target: unknown) => {
  return store(_clone(target))
}
