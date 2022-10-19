import { Properties } from 'csstype'
import { Text } from './elements'
import { messageProcessing } from './processer'
import { DataNode, IDataNode } from '../vilex/display/DisplayObject'
import { IAttr, IClass, IEvents, IStyle } from '../vilex/dataType/DataFactor'
import { DataModel } from '../vilex/dataType/DataModel'
import { EmitType } from '../vilex/constant/EmitType'
import { isRef } from '../vilex/store/store'
import { eventBehavior } from './events'
import { g } from './g'
import { isPromise } from '../utils/isPromise'
import { invisibleTypeToDisplayType } from './utils/invisibleTypeToDisplayType'

export type Transit = Record<string, unknown>

export type DisplayFactor = () => IDataNode
export type VnItem =
  | IDataNode
  | Properties
  | string
  | Transit
  | DisplayFactor
  | IAttr
  | IClass
  | IEvents
  | IStyle

export type VNode = IDataNode & {
  el: HTMLElement | Text | SVGSVGElement | SVGUseElement
}
export function vn(tag: string, options: VnItem[]) {
  const items = invisibleTypeToDisplayType(options)

  const dataModel = DataModel(tag)
  const vnode = DataNode(dataModel) as VNode
  vnode.$ex = g.ex
  g.ex = ''
  vnode.el = element(tag)
  vnode.on(
    EmitType.ON_NODE_CHANGE,
    (eventType: string | number, ...args: any[]) =>
      messageProcessing(eventType, vnode, ...args)
  )
  dataModel.set(...items)

  let children: VNode[] = []
  let recordAsyncIndex = 0
  items.forEach((item: VnItem) => {
    let itemNode = typeof item === 'function' ? item() : item
    if (itemNode !== undefined && itemNode !== null) {
      if (typeof itemNode === 'number') {
        itemNode = itemNode.toString()
      }
      if (typeof itemNode === 'string' || isRef(itemNode)) {
        const text = Text(itemNode)
        vnode.add(text)
        children.push(text)
      } else if (itemNode?.$?.type) {
        vnode.add(itemNode)
        children
      } else if (isPromise(itemNode)) {
        children.push(itemNode)
        recordAsyncIndex++
        itemNode
          .then((r: IDataNode) => {
            if (r.$ && r.$.type) {
              const index = children.findIndex(item => item === itemNode)
              if (index > -1) {
                vnode.insert(r, vnode.children[index])
              } else {
                vnode.add(r)
              }
              recordAsyncIndex--
              if (recordAsyncIndex == 0) {
                // @ts-ignore
                children = undefined
              }
              // debugger
              // vnode.add(r)
              // vnode.insert(r, vnode.children[index])
            }
          })
          .catch((err: any) => {
            console.log(err)
          })
      }
    }
  })

  eventBehavior(vnode)
  return vnode
}

export function element(tag: string) {
  if (tag === 'text') {
    return document.createTextNode('')
  }
  if (tag === 'svg' || tag === 'use') {
    return document.createElementNS('http://www.w3.org/2000/svg', tag)
  }
  return document.createElement(tag)
}
