import { isObject } from '@vilex/utils'
import { isString } from 'markdown-it/lib/common/utils'
import { createNodeCreator, NodeCreator } from './createNodeCreator/createNodeCreator'
import { isStyled } from './vilex-dom/utils/isStyled'
import { AnyObject } from './_types/common'

type StringList = string[]
type CreateElementArguments = string | AnyObject

export function createElement<K extends keyof HTMLElementTagNameMap>(tag: K, ...args: CreateElementArguments[]): NodeCreator
export function createElement(tagName: string, ...args: CreateElementArguments[]): NodeCreator
export function createElement(creator: NodeCreator, ...args: CreateElementArguments[]): NodeCreator

export function createElement(target: any, ...args: any[]): any {
  const props: AnyObject = {},
    classes: StringList = []

  args.forEach(arg => {
    if (isString(arg)) classes.push(arg)
    if (isStyled(arg)) classes.push(arg.classname)
    else if (isObject(arg)) Object.assign(props, arg)
    else if (Array.isArray(arg)) arg.forEach(cs => isString(cs) && classes.push(cs))
  })

  return createNodeCreator(target, props, ...classes)
}
