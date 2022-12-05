export function readonly<T extends object>(target: T, keys: string[]) {
  keys.forEach(privateKey =>
    Reflect.defineProperty(target, privateKey, {
      enumerable: false,
      configurable: false,
      writable: false
    })
  )
}

export function getReadonlyObject(key: string, value: unknown) {
  const newObject = { [key]: value }
  readonly(newObject, [key])
  return newObject
}

export function getDataType(type: string) {
  return getReadonlyObject('$dataType', type)
}
