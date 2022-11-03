import { IDataNode } from './DisplayObject'

export function findMap(node: IDataNode): null | IDataNode {
  if (node._$_key) return node
  if (node.$parent) return findMap(node.$parent)
  return null
}
