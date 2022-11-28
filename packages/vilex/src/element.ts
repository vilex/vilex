import { isObject } from '@vilex/utils'

import { isString } from 'markdown-it/lib/common/utils'
import {
  createNodeCreator,
  NodeCreator
} from './createNodeCreator/createNodeCreator'

type AnyObject = { [k: string]: any }
type StringList = string[]
type CreateElementArguments = string | AnyObject

/**
 * const Button = createElement('button')
 * export default Button('my button')
 * @param tag 标签名
 * @param args
 */
export function createElement<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  ...args: CreateElementArguments[]
): NodeCreator
/**
 * const Button = createElement('button')
 * const ExtButton = createElement(Button)
 * export defaut ExtButton('my button')
 */
export function createElement(
  creator: NodeCreator,
  ...args: CreateElementArguments[]
): NodeCreator
export function createElement(target: any, ...args: any[]): any {
  const props: AnyObject = {}
  const classes: StringList = []
  args.forEach(arg => {
    if (isString(arg)) classes.push(arg)
    else if (isObject(arg)) Object.assign(props, arg)
    else if (Array.isArray(arg))
      arg.forEach(cs => isString(cs) && classes.push(cs))
  })
  return createNodeCreator(target, props, ...classes)
}
