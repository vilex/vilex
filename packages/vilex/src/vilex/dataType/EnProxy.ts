type EnProxyTargetType = object & { [Symbol.toStringTag]: string }

export function EnProxy<T extends EnProxyTargetType>(
  target: T,
  handler: ProxyHandler<T>,
  dataTypeName?: string
): T {
  const x = new Proxy(target, handler)
  x[Symbol.toStringTag] = dataTypeName || 'Proxy'
  return x
}
