type EmitKey = string | number | Symbol
export type IDataEmit = {
  emit: (key: EmitKey, ...args: any[]) => void
  on: (key: EmitKey, handler: (...args: any[]) => any) => void
}

export function DataEmit<T extends object>(o: T): T & IDataEmit {
  return {
    ...o,
    ...b(),
  } as T & IDataEmit
}

function b() {
  const handlers = Symbol()
  return {
    [handlers]: {},
    emit(key: string, ...args: any[]) {
      // @ts-ignore
      const hs = this[handlers][key]
      if (Array.isArray(hs)) {
        hs.forEach((h) => h(...args))
      }
    },
    on(key: string, handler: Function) {
      // @ts-ignore
      !this[handlers][key] && (this[handlers][key] = [])
      ;(this as any)[handlers][key].push(handler)
    },
  }
}
