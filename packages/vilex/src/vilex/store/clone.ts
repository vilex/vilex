import { isSymbol } from '@vilex/utils'
import { isRef, store } from './store'

const blacklist = ['emit', 'on']

function _clone(target, cache = new Map()) {
  const isObject = obj => typeof obj === 'object' && obj !== null
  const forEach = (array, cb) => {
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

    const cloneTarget = Array.isArray(target) ? [] : {}
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

export const cloneProxy = target => {
  return store(_clone(target))
}
