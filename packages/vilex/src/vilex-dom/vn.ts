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
import { VilexElement } from '../v1/VilexElement'

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
  console.log('vn')
  console.log(tag)
  console.log(options)
  console.log('vn end')

  



  // if (options instanceof VilexElement) {
  //   const renderView = options.render()

  //   if (renderView instanceof VilexElement) {

  //     return vn(renderView.componentName, renderView)
  //   } else {
  //     // debugger
  //     if (options.tagName) {
  //       options.el = renderView//document.createElement(options.tagName)
  //     } else {
  //       options.el = new options.ComponentConstructor(renderView)
  //     }

  //     // options.el = renderView

  //     options.eventListeners.forEach((val, key) => {
  //       if (val.length) {
  //         options.el?.addEventListener(key, (ev) => {
  //           val.forEach(call => call && call())
  //         })
  //       }
  //     })
  //   }
    
  //   // options.el = new options.ComponentConstructor(options.render())
  //   // options.el.append(options.render())
  //   // options.el.append(document.createTextNode(options.data.textContent))
  //   // if (options.children && options.children.length) {
  //   //   options.children.forEach(child => {
  //   //     const _vnode = vn(child.componentName, child)
  //   //     options.el.append()
  //   //   })
  //   // }
  //   return options
  // }

  // options.forEach(item => {
  //   const v1 = item instanceof VilexElement
  //   if (v1) {
  //   }
  // })

  const items = invisibleTypeToDisplayType(options)
  const dataModel = DataModel(tag)
  const vnode = DataNode(dataModel) as VNode
  vnode.el = createElement(tag)
  vnode.on(EmitType.ON_NODE_CHANGE, (eventType: string | number, ...args: unknown[]) => messageProcessing(eventType, vnode, ...args))
  dataModel.set(...items)

  let children: VNode[] = []
  let recordAsyncIndex = 0
  items.forEach((item: VnItem) => {
    /**
     * 如果是新版本，跳过不处理
     */
    if (item instanceof VilexElement) {
      // const _vnode = vn(item.componentName, item)
      // const el = new item.ComponentConstructor()
      // vnode.add(_vnode)
      // vnode.add(item)

      // children.push(item)

      
    }
    // end

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
        children[vnode.children.length] = itemNode
        recordAsyncIndex++
        itemNode
          // @ts-ignore
          .then((r: IDataNode) => {
            if (r.$ && r.$.type) {
              const index = children.findIndex(item => item === itemNode)
              index > -1 ? vnode.insert(r, vnode.children[index]) : vnode.add(r)
            }
            // @ts-ignore
            --recordAsyncIndex == 0 && (children = undefined)
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
handlers.set('hook_bind_to_var', handleHookBindToVar)

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

function handleHookBindToVar(vn: VNode, item: { _$_var: any }) {
  item._$_var = vn as unknown as ViElement
}
