import { EmitType } from '../../vilex/constant/EmitType'
import { VNode } from '../vn'

export function watchList(node: VNode) {
  if (node._$_list) {
    if (node._$_list.sources && node._$_list.iterator) {
      node._$_list.sources.on(EmitType.ON_PROXY_CHANGE, (key, value) => {
        const numKey = Number(key)
        if (node.children && node.children.length === numKey) {
          const child = node._$_list?.iterator(value, numKey)
          child && node.add(child)
          return
        }

        if (value === `Del-$_$-Self`) {
          const child = node.children[numKey]
          child && node.remove(child)
          return
        }
      })
    }
  }
}
