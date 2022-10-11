export function EnProxy<T extends object>(target: T, handler: ProxyHandler<T>, dataTypeName?:string): T {
  let x = new Proxy(target, handler)
  ;(x as any)[Symbol.toStringTag] = dataTypeName || 'Proxy'
  return x
}