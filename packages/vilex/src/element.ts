import { isObject } from '@vilex/utils'

import { isString } from 'markdown-it/lib/common/utils'
import {
  createNodeCreator,
  NodeCreator
} from './createNodeCreator/createNodeCreator'
import { toHyphenCase } from './utils/toCamelCase'
import { vn } from './vilex-dom/vn'

type AnyObject = { [k: string]: any }
type StringList = string[]
type CreateElementArguments = string | AnyObject

/**
 *
 * @param tag 标签名
 * @param args
 */
export function createElement<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  ...args: CreateElementArguments[]
): NodeCreator

export function createElement(tag: any, ...args: any[]): any {
  const props: AnyObject = {}
  const classes: StringList = []
  args.forEach(arg => {
    if (isString(arg)) classes.push(arg)
    else if (isObject(arg)) Object.assign(props, arg)
    else if (Array.isArray(arg))
      arg.forEach(cs => isString(cs) && classes.push(cs))
  })
  return createNodeCreator(tag, props, ...classes)
}
