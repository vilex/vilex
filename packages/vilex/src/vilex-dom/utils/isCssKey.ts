import { toCamelCase } from "../../utils/toCamelCase";

/**
 * 是否是style的属性 
 * @param key 
 * @returns 
 */
export function isCssKey(key: string) {
    const jsKey = toCamelCase(key)
    return jsKey in document.documentElement.style
}