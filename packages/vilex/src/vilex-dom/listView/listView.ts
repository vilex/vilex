import { ViElement } from '../../vii'

export function listView<T>(
  sources: T[],
  iterator: (item: T, index: number | string) => ViElement
) {
  const ret = {
    sources,
    iterator
  }

  Reflect.defineProperty(ret, `_$_type`, {
    value: `list-view`,
    writable: false,
    enumerable: false,
    configurable: false
    // get() {
    //     return `list-view`
    // }
  })

  return ret
}
