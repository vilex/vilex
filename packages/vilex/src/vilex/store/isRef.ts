type IsRefType = { _$_isRef: boolean }
export function isRef(val: unknown) {
  return val && (<IsRefType>val)._$_isRef
}
