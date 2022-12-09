import { AnyObject } from './../../_types/common'
// import { readonly } from '../../utils/readonly'

type EmitKey = string | number | symbol
export type IDataEmit = {
  emit: (key: EmitKey, ...args: any[]) => void
  on: (key: EmitKey, handler: (...args: any[]) => any) => void
}

interface EmitDataType {
  __handlers__: AnyObject
  emit: (key: string, ...args: any[]) => void
  on: (key: string, handler: (...args: any[]) => void) => void
}

function createEmitData(): EmitDataType {
  return {
    __handlers__: {},
    emit(key: string, ...args: any[]) {
      const hs = this.__handlers__[key]
      Array.isArray(hs) && hs.forEach(h => h(...args))
    },
    on(key: string, handler: (...args: any[]) => void) {
      const handlers = this.__handlers__[key]
      if (handlers) return handlers.push(handler)
      this.__handlers__[key] = [handler]
    }
  }
}

export function DataEmit<T extends object>(o: T): T & IDataEmit {
  const newObject = {
    ...o,
    ...createEmitData()
  } as T & IDataEmit
  // readonly(newObject, ['emit', 'on'])
  return newObject
}
