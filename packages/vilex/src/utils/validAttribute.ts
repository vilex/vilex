export function validAttribute(name: string) {
  return typeof name === 'string' && name != 'emit' && name != 'on' && name != '$news' && name != '$dataType'
}
