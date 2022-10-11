export function isProxy(o: any) {
  return Object.prototype.toString.call(o).includes('Proxy')
}