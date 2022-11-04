/* eslint-disable @typescript-eslint/no-explicit-any */
import { isProxy } from '../../utils/isProxy'
import { EmitType } from '../constant/EmitType'
import { IDataModel } from '../dataType/DataModel'
import { IDataNode } from './DisplayObject'
import { findMap } from './findMap'

export function Observer(node: IDataNode) {
  const m = node.$
  for (const t in m) {
    const _m = m as unknown as any
    if (isProxy(_m[t])) {
      _m[t].on(EmitType.ON_PROXY_CHANGE, (k: any, v: any) => {
        if (isProxy(v)) {
          v.on(EmitType.ON_PROXY_CHANGE, (kk: any, vv: any) => {
            if (vv === 'Del-$_$-Self') {
              delNode(node)
            } else {
              node.emit(EmitType.ON_NODE_CHANGE, t, k, vv)
            }
          })
        }
        node.emit(EmitType.ON_NODE_CHANGE, t, k, v)
      })
    }
    observerValues((m as any)[t] as any, t, m)
  }

  function observerValues(data: any, t: string, m: IDataModel) {
    if (typeof data === 'object') {
      for (const k in data) {
        if (isProxy(data[k])) {
          data[k].on(EmitType.ON_PROXY_CHANGE, (k: any, v: any) => {
            if (v === 'Del-$_$-Self') {
              delNode(node)
            } else {
              node.emit(EmitType.ON_NODE_CHANGE, t, k, v)
            }
          })
        }
        observerValues(data[k], t, m)
      }
    }
  }

  return 'vilex'
}

function delNode(node: IDataNode) {
  const beingRemoved = findMap(node)
  console.log(`beingRemoved`, beingRemoved)
  if (beingRemoved) beingRemoved.removeSelf()
}
