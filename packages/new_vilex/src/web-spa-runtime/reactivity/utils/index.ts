import { RefImpl } from "../ref/RefImpl";

const _beRefTypeList = ['bigint', 'boolean', 'string', 'number', 'null', 'undefined', 'symbol']

/**
 * 是否可以变为 ref
 * @param value 
 * @returns 
 */
export function beRef<T>(value: T): boolean {
    return _beRefTypeList.includes(typeof value)
}

/**
 * 是否是一个可以代理的对象
 * @param value 
 * @returns 
 */
export function beProxed<T>(value: T): boolean {
    return typeof value === 'object' && value !== null && !(value instanceof RefImpl) && !isProxy(value)
}

/**
 * 是不是一个代理对象
 * @param value 
 * @returns 
 */
export function isProxy<T>(value: T): boolean {
    return value && typeof value === 'object' && (value as any)['_reactivity']
}

/**
 * 定义一个属性
 * @param target 
 * @param key 
 * @param value 
 * @returns 
 */
export function defineProperty<T extends Record<string, any>>(target: T, key: string, value: any) {
    return Reflect.defineProperty(target, key, {
        configurable: false,
        enumerable: false,
        writable: false,
        value
    })
}