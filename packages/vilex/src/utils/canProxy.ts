const effective = ['object', 'function']
export function canProxy(target: any) {
  return effective.includes(typeof target)
}