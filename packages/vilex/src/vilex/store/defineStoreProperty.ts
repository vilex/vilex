import mitt from 'mitt'

function value(value: unknown): PropertyDescriptor {
  return {
    value,
    writable: false,
    enumerable: false,
    configurable: false
  }
}
export function defineStoreProperty<T extends object>(target: T) {
  const _ = (target as { __proto__: T }).__proto__
  const e = mitt() as unknown as Record<string, unknown>
  Reflect.defineProperty(_, '_$proxy', value(true))
  for (const key in e) Reflect.defineProperty(_, key, value(e[key]))
  return target
}
