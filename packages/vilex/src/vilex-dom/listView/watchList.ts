import { EmitType } from '../../vilex/constant/EmitType'
import { IDataEmit } from '../../vilex/dataType/DataEmit'
import { _$_lIST } from '../../vilex/display/DisplayObject'
import { VNode } from '../vn'

export function watchList(node: VNode) {
  const list = node._$_list as _$_lIST
  if (list) {
    if (list.sources && list.iterator) {
      const sources = list.sources as unknown as IDataEmit
      sources.on(EmitType.ON_PROXY_CHANGE, (key, value) => {
        const numKey = Number(key)
        if (node.children && node.children.length === numKey) {
          if (list.iterator) {
            const child = list?.iterator(value, numKey)
            child && node.add(child)
          }
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
