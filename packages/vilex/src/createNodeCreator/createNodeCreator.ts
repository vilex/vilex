import { ViElement } from '../vii'
import { vn } from '../vilex-dom/vn'
import { ViItemPart } from '../vilex-dom/elements/velements'

interface Attrs {
  [k: string]: unknown
}

export type NodeCreator = (...args: ViItemPart[]) => ViElement

export function createNodeCreator(tag: string): NodeCreator
export function createNodeCreator(
  tag: string,
  ...classnames: string[]
): NodeCreator
export function createNodeCreator(
  tag: string,
  attrs: Attrs,
  ...classnames: string[]
): NodeCreator
export function createNodeCreator(creator: NodeCreator): NodeCreator
export function createNodeCreator(
  creator: NodeCreator,
  ...classnames: string[]
): NodeCreator
export function createNodeCreator(
  creator: NodeCreator,
  attrs: Attrs,
  ...classnames: string[]
): NodeCreator
export function createNodeCreator(
  target: any,
  attrs?: any,
  ...classnames: any
): any {
  return function (...args: any[]) {
    // debugger
    return typeof target === 'function'
      ? target(attrs, classnames, ...args)
      : vn(target, [attrs, classnames, ...args])
  }
}
