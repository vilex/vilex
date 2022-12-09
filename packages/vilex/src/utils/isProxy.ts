type IsProxyType = { _$_isProxy: boolean }
export function isProxy(val: unknown) {
  return val && (<IsProxyType>val)._$_isProxy
}
