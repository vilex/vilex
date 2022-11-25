export function isRef(ref: unknown) {
  return Object.prototype.toString.call(ref) === '[object RefProxy]'
}
