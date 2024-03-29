const blacklist = ['emit', 'on', '$news', '$dataType', '_$_type', '_$_call', '_$_isProxy', '_$_isRef']

export function validAttribute(name: string) {
  return typeof name === 'string' && !name.startsWith('_$_') && !blacklist.includes(name)
}
