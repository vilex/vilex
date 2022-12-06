import { EmitType } from '../../vilex/constant/EmitType'
import { IDataEmit } from '../../vilex/dataType/DataEmit'
import { _$_lIST } from '../../vilex/display/DisplayObject'
import { VNode } from '../vn'

export function watchList(node: VNode) {
  const list = node._$_list as _$_lIST
  if (list) {
    if (list.sources && list.iterator) {
      const sources = list.sources as unknown as IDataEmit
      if (!sources.on) return
      sources.on(EmitType.ON_PROXY_CHANGE, (key, value) => {
        const numKey = Number(key)
        const length = node.children.length
        if (length === numKey) {
          if (list.iterator) {
            const child = list?.iterator(value, numKey)
            child && node.add(child)
            sources.emit(EmitType.on_list_view_change, 'length', length + 1)
          }
          return
        }

        if (value === `Del-$_$-Self`) {
          const child = node.children[numKey]
          child && node.remove(child)
          sources.emit(EmitType.on_list_view_change, 'length', length - 1)
          return
        }
      })
    }
  }
}
