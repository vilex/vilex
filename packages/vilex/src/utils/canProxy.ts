const effective = ['object', 'function']
export function canProxy(target: any) {
  const _type = typeof target
  return target != null && effective.includes(_type)
}
