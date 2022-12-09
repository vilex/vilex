import { AnyObject } from '../../_types/common'

export function EnProxy(
  target: AnyObject,
  handler: ProxyHandler<AnyObject>
  // dataTypeName?: string
): AnyObject {
  target._$_isProxy = true
  const x = new Proxy(target, handler)
  // x[Symbol.toStringTag] = dataTypeName || 'Proxy'
  return x
}
