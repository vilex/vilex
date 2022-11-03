import { EmitType } from '../../vilex/constant/EmitType'
import { VNode } from '../vn'

export function watchNode(node: VNode) {
  node.on(EmitType.ON_NODE_CHANGE, data => {
    if (data.eventType) {
    }
    // messageProcessing(data)
  })
}
