import { DataEmit, IDataEmit } from '../dataType/DataEmit'
import { IDataModel } from '../dataType/DataModel'
import { Observer } from './Observer'
import { EmitType } from '../constant/EmitType'
import { uuid } from '../../utils/uuid'
import { VnItem } from '../../vilex-dom/vn'
import { invisibleTypeToDisplayType } from '../../vilex-dom/utils/invisibleTypeToDisplayType'

export interface IDataNode extends IDataEmit {
  $: IDataModel
  $ex?: string
  $parent: IDataNode
  id: string
  children: IDataNode[]
  add: (...childs: IDataNode[]) => this
  insert: (child: IDataNode, beforeChild: IDataNode) => this
  clear: () => this
  remove: (child: IDataNode) => this
  removeSelf: () => void
  set: (...datas: VnItem[]) => this
}

export function DataNode(data: IDataModel) {
  const node: IDataNode = DataEmit({}) as IDataNode
  node.id = uuid()
  node.$ = data
  node.children = []
  node.clear = function () {
    this.children.length = 0
    this.emit(EmitType.ON_NODE_CHANGE, EmitType.Clear)
    return this
  }
  node.removeSelf = function () {
    console.log(`remove-self`)
    debugger
    if (this.$parent) {
      this.$parent.remove(this)
    }
  }
  node.remove = function (child: IDataNode) {
    const index = this.children.findIndex(item => item === child)
    if (index > -1) {
      this.children.splice(index, 1)
      this.emit(EmitType.ON_NODE_CHANGE, EmitType.RemoveChild, child)
    }
    return this
  }
  node.add = function (...childs: IDataNode[]) {
    childs.forEach(item => !item.$parent && (item.$parent = this))
    this.children.push(...childs)
    this.emit(EmitType.ON_NODE_CHANGE, EmitType.AppendChild, childs)
    return this
  }
  node.insert = function (child: IDataNode, beforeChild: IDataNode) {
    const index = node.children.findIndex(item => item === beforeChild)
    if (index > -1) {
      !child.$parent && (child.$parent = this)
      node.children.splice(index, 0, child)
      this.emit(
        EmitType.ON_NODE_CHANGE,
        EmitType.InsertChild,
        child,
        beforeChild
      )
    }
    return this
  }
  node.set = function (...datas: VnItem[]) {
    const items = invisibleTypeToDisplayType(datas)
    node.$.set(...items)
    return node
  }
  Observer(node)
  return node
}
