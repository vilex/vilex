/**
 * 把有连字符号的字符串转化为驼峰命名法的字符串
 * @param value
 * @returns
 */
export function toCamelCase(value: string) {
  return value.replace(/-(\w)/g, (matched, letter) => {
    return letter.toUpperCase()
  })
}

/** 将驼峰命令转为连字符命名 */
export function toHyphenCase(value: string) {
  const newValue = value.replace(/([A-Z])/g, '-$1').toLowerCase()
  return newValue.charAt(0) === '-' ? newValue.slice(1) : newValue
}
