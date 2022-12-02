import Emitter from 'tiny-emitter'
import { AnyObject } from '../../_types/common'

function value(value: unknown): PropertyDescriptor {
  return {
    value,
    writable: false,
    enumerable: false,
    configurable: false
  }
}
export function defineStoreProperty<T extends AnyObject>(target: T): T {
  const _ = (target as AnyObject).__proto__ as object
  // @ts-ignore
  const e = new Emitter() as unknown as Record<string, unknown>
  Reflect.defineProperty(_, '_$proxy', value(true))
  for (const key in e) Reflect.defineProperty(_, key, value(e[key]))
  return target
}
