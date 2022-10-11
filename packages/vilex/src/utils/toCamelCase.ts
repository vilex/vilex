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