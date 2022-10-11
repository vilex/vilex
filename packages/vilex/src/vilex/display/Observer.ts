import { isProxy } from '../../utils/isProxy'
import { EmitType } from '../constant/EmitType'
import { IDataModel } from '../dataType/DataModel'
import { IDataNode } from './DisplayObject'


export function Observer(node: IDataNode) {
  const m = node.$
  for (let t in m) {
    if (isProxy((m as any)[t])) {
      (m as any)[t].on(EmitType.ON_PROXY_CHANGE, (k: any, v: any) => {
        if (isProxy(v)) {
          v.on(EmitType.ON_PROXY_CHANGE, (kk: any,vv: any) => {
            node.emit(EmitType.ON_NODE_CHANGE, t, k, vv)
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
            node.emit(EmitType.ON_NODE_CHANGE, t, k, v)
          })
        }
        observerValues(data[k], t, m)
      }
    }
  }

  return 'vilex'
}
