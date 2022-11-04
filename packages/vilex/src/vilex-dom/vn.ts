import { Text, TextValue } from './elements'
import { messageProcessing } from './processer'
import { DataNode, IDataNode, _$_lIST } from '../vilex/display/DisplayObject'
import { IAttr, IClass, IStyle } from '../vilex/dataType/DataFactor'
import { DataModel } from '../vilex/dataType/DataModel'
import { EmitType } from '../vilex/constant/EmitType'
import { isRef } from '../vilex/store/store'
import { eventBehavior } from './events'
import { g } from './g'
import { isPromise } from '../utils/isPromise'
import { invisibleTypeToDisplayType } from './utils/invisibleTypeToDisplayType'
import { ViElement } from '../vii'
import { Ref, ViEvent } from './elements/velements'
import { Styled } from '../css'
import { watchList } from './listView/watchList'
// import { watchNode } from './watcher/watchNode'

export type Transit = Record<string, unknown>

export type DisplayFactor = () => IDataNode

export type VnItem =
  | Styled
  | IStyle
  | IDataNode
  // | Properties
  | string
  | number
  // | Transit
  | DisplayFactor
  | IAttr
  | IClass
  | ViEvent
  | ViElement
  | Ref

export type VNode = IDataNode & {
  el: HTMLElement | Text | SVGSVGElement | SVGUseElement
}

type TextContent = string | number | Ref
type TextComponentOption = { data: TextContent; $dataType: string }

export function vn(tag: 'text', options: TextComponentOption[]): ViElement
export function vn(tag: string, options: VnItem[]): ViElement

export function vn<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  options: VnItem[]
) {
  const items = invisibleTypeToDisplayType(options)

  const dataModel = DataModel(tag)
  const vnode = DataNode(dataModel) as VNode
  vnode.$ex = g.ex
  g.ex = ''
  vnode.el = element(tag)
  vnode.on(
    EmitType.ON_NODE_CHANGE,
    (eventType: string | number, ...args: unknown[]) =>
      messageProcessing(eventType, vnode, ...args)
  )
  // watchNode(vnode)
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
        const text = Text(itemNode as TextValue)
        vnode.add(text as unknown as IDataNode)
        children.push(text as unknown as VNode)
        // @ts-ignore
      } else if (itemNode._$_type == `list-view`) {
        console.log('2022-11-03 17:49:45')

        vnode._$_list = itemNode as _$_lIST
        const sources = vnode._$_list.sources
        const iterator = vnode._$_list.iterator
        if (sources && iterator) {
          // children.push(...itemNode.sources.map(itemNode.iterator))
          vnode.add(...sources.map(iterator))
          watchList(vnode)
        }
      } else if ((itemNode as IDataNode)?.$?.type) {
        vnode.add(itemNode as IDataNode)
        children
      } else if (isPromise(itemNode)) {
        children.push(itemNode as VNode)
        recordAsyncIndex++
        itemNode
          // @ts-ignore
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
          .catch((err: unknown) => {
            console.log(err)
          })
      }
    }
  })

  eventBehavior(vnode)
  return vnode as unknown as ViElement
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
