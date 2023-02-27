import { Properties } from 'csstype'
import { ref, Styled, ViElement } from '../../vii'
import { IDataEmit } from '../../vilex/dataType/DataEmit'
import { IDataModel } from '../../vilex/dataType/DataModel'
import { _$_lIST } from '../../vilex/display/DisplayObject'

export interface IDataNode extends IDataEmit {
  $: IDataModel
  children: IDataNode[]
  add: (...childs: IDataNode[]) => this
  insert: (child: IDataNode, beforeChild: IDataNode) => this
  clear: () => this
  remove: (child: IDataNode) => this
  set: (...datas: ViItemPart[]) => this
  extends: { [key: string]: any }
}

export interface IDataNode<T = any> {
  [k: string]: T | any
}

type InlineStyle = { [K: string]: string | number | boolean | Ref }

type ViStyle = Properties | InlineStyle

type ViLabel = string | number
// class name
type ViClass = (string | { [k: string]: unknown })[]
// children
type ViChildren = ViElement[]

// events
type Prefix<K extends string, T extends string> = `${K}${T}`
type Prefixer<K, T extends string> = {
  [P in keyof K as Prefix<T, string & P>]: K[P]
}
type ViEventMap = {
  [P in keyof GlobalEventHandlersEventMap]?: (e: { vn: ViElement; ev: GlobalEventHandlersEventMap[P] }) => void
}

export type ViEvent = Prefixer<ViEventMap, 'on'>

export type Ref = ReturnType<typeof ref>
export type Invalid = null | undefined
export type ItemPart = Styled | ViLabel | ViStyle | ViClass | ViEvent | ViChildren | Ref | ViElement | _$_lIST | Invalid

export type ViItemPart = ItemPart | ((...args: any[]) => ItemPart)
