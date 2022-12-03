import { AnyObject } from './../_types/common'
import { ViElement } from '../vii'
import { IDataNode } from '../vilex/display/DisplayObject'

export function replaceNode(newElement: ViElement, targetElement: ViElement): void
export function replaceNode(newNode: IDataNode, targetNode: IDataNode): void
export function replaceNode<T extends IDataNode | AnyObject>(newNode: T, targetNode: T) {
  if (newNode && targetNode && newNode.isVilexNode && targetNode.isVilexNode) {
    const parent = targetNode.$parent
    if (parent) {
      parent.insert(newNode, targetNode)
      parent.remove(targetNode)
    }
  }
}
