export function createStore<T extends object>(target: T) {
  if (typeof target === 'number') {
    return target
  }
  if (isObject(target)) {
    Reflect.defineProperty()
    return new Proxy(target, {
      get(target, p) {
        return Reflect.get(target, p)
      },
      set(target, p, value) {
        return Reflect.set(target, p, value)
      }
    })
  }
  return target
}

export function isObject(val: unknown) {
  return val !== null && typeof val === 'object'
}
