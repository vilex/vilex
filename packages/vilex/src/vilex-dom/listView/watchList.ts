import { EmitType } from '../../vilex/constant/EmitType'
import { VNode } from '../vn'

export function watchList(node: VNode) {
  if (node._$_list) {
    if (node._$_list.sources && node._$_list.iterator) {
      node._$_list.sources.on(
        EmitType.ON_PROXY_CHANGE,
        (...args: unknown[]) => {
          debugger
          console.log(`watch-list`, ...args)
          console.log('2022-11-03 17:56:20')
        }
      )
    }
  }
}
