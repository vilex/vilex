import { Text, TextValue } from './elements'
import { messageProcessing } from './processer'
import { DataNode, IDataNode, _$_lIST } from '../vilex/display/DisplayObject'
import { IAttr, IClass, IStyle } from '../vilex/dataType/DataFactor'
import { DataModel } from '../vilex/dataType/DataModel'
import { EmitType } from '../vilex/constant/EmitType'
import { eventBehavior } from './events'
import { isPromise } from '../utils/isPromise'
import { invisibleTypeToDisplayType } from './utils/invisibleTypeToDisplayType'
import { ViElement } from '../vii'
import { Ref, ViEvent } from './elements/velements'
import { Styled } from '../css'
import { watchList } from './listView/watchList'
import { isRef } from '../vilex/store/isRef'
import { createElement } from './dom/createElement'

export type DisplayFactor<T = any> = (...args: T[]) => IDataNode

export type VnItem = Styled | IStyle | IDataNode | string | number | DisplayFactor | IAttr | IClass | ViEvent | ViElement | Ref

export type VNode = IDataNode & {
  el: HTMLElement | Text | SVGSVGElement | SVGUseElement
}

type TextContent = string | number | Ref
type TextComponentOption = { data: TextContent; $dataType: string }

export function vn(tag: 'text', options: TextComponentOption[]): ViElement
export function vn(tag: string, options: VnItem[]): ViElement

export function vn<K extends keyof HTMLElementTagNameMap>(tag: K, options: VnItem[]) {
  const items = invisibleTypeToDisplayType(options)
  const dataModel = DataModel(tag)
  const vnode = DataNode(dataModel) as VNode
  vnode.el = createElement(tag)
  vnode.on(EmitType.ON_NODE_CHANGE, (eventType: string | number, ...args: unknown[]) => messageProcessing(eventType, vnode, ...args))
  dataModel.set(...items)

  let children: VNode[] = []
  let recordAsyncIndex = 0
  items.forEach((item: VnItem, index: number) => {
    let itemNode = typeof item === 'function' ? item(vnode) : item
    if (itemNode !== undefined && itemNode !== null) {
      if (typeof itemNode === 'number') {
        itemNode = itemNode.toString()
      }
      if (typeof itemNode === 'string' || isRef(itemNode)) {
        const text = Text(itemNode as TextValue)
        vnode.add(text as unknown as IDataNode)
        children.push(text as unknown as VNode)
        // @ts-ignore
      } else if (itemNode._$_type) {
        handlers.get(itemNode._$_type)?.(vnode, itemNode)
      } else if ((itemNode as IDataNode)?.$?.type) {
        vnode.add(itemNode as IDataNode)
      } else if (isPromise(itemNode)) {
        // children.push(itemNode as VNode)
        children[index] = itemNode as VNode
        recordAsyncIndex++
        itemNode
          // @ts-ignore
          .then((r: IDataNode) => {
            if (r.$ && r.$.type) {
              const index = children.findIndex(item => item === itemNode)
              index > -1 ? vnode.insert(r, vnode.children[index]) : vnode.add(r)
              // @ts-ignore
              --recordAsyncIndex == 0 && (children = undefined)
            }
          })
          .catch((err: unknown) => console.error(err))
      }
    }
  })

  eventBehavior(vnode)
  return vnode as unknown as ViElement
}

const handlers: Map<any, any> = new Map()
handlers.set('hook_mounted', handleHookMounted)
handlers.set('list-view', handleListView)

function handleListView(vn: VNode, item: _$_lIST) {
  vn._$_list = item as _$_lIST
  const sources = vn._$_list.sources
  const iterator = vn._$_list.iterator
  if (sources && iterator) {
    vn.add(...sources.map(iterator))
    watchList(vn)
  }
}

function handleHookMounted(vn: VNode, item: { _$_call: (vn: VNode) => void }) {
  item._$_call(vn)
}
