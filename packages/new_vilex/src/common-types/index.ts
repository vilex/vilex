import { RefImpl } from "../web-spa-runtime/reactivity/ref/RefImpl";


/**
 * 常见有效的基本类型
 */
export type Simple = string | number | boolean

/**
 * 常见有效的基本类型 ref
 */
export type SimpleRef = Simple | RefImpl<string> | RefImpl<number> | RefImpl<boolean>

export type StringOrNumber = string | number | RefImpl<string> | RefImpl<number>

type IfEquals<X, Y, A=X, B=never> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? A : B;

 /**
  * 排除只读属性
  */
export type WritableKeys<T> = {
  [P in keyof T]-?: IfEquals<{ [Q in P]: T[P] }, { -readonly [Q in P]: T[P] }, P>
}[keyof T];