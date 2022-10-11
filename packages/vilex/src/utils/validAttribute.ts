const reg = /^[:\w]+$/
export function validAttribute(name:string) {
  return typeof name === 'string' &&  reg.test(name) && name != 'emit' && name != 'on' && name != '$news' && name != '$dataType'
}