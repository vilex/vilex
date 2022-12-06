// import { readonly } from '../../utils/readonly'

type EmitKey = string | number | symbol
export type IDataEmit = {
  emit: (key: EmitKey, ...args: any[]) => void
  on: (key: EmitKey, handler: (...args: any[]) => any) => void
}

export function DataEmit<T extends object>(o: T): T & IDataEmit {
  const newObject = {
    ...o,
    ...b()
  } as T & IDataEmit
  // readonly(newObject, ['emit', 'on'])
  return newObject
}

function b() {
  const handlers = Symbol()
  return {
    [handlers]: {},
    emit(key: string, ...args: any[]) {
      // @ts-ignore
      const hs = this[handlers][key]
      if (Array.isArray(hs)) {
        hs.forEach(h => h(...args))
      }
    },
    on(key: string, handler: (...args: any[]) => void) {
      // @ts-ignore
      !this[handlers][key] && (this[handlers][key] = [])
      ;(this as any)[handlers][key].push(handler)
    }
  }
}
