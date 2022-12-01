/* eslint-disable @typescript-eslint/no-explicit-any */
import { isProxy } from '../../utils/isProxy'
import { AnyObject } from '../../_types/common'
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
        isProxy(v) && watchData(v, node, t, k)
        node.emit(EmitType.ON_NODE_CHANGE, t, k, v)
      })
    }
    observerValues((m as any)[t] as any, t, m)
  }

  function observerValues(data: any, t: string, m: IDataModel) {
    if (typeof data === 'object') {
      for (const k in data) {
        isProxy(data[k]) && watchData(data[k], node, t)
        observerValues(data[k], t, m)
      }
    }
  }

  return 'vilex'
}

const watchData = (data: AnyObject, node: IDataNode, type: string, outerKey?: string) => {
  data.on(EmitType.ON_PROXY_CHANGE, (key: string, val: any) => {
    val === 'Del-$_$-Self' ? delNode(node) : node.emit(EmitType.ON_NODE_CHANGE, type, outerKey || key, val)
  })
}

const delNode = (node: IDataNode) => findMap(node)?.removeSelf()
