import { ViElement } from '../../vii'
import { _$_lIST } from '../../vilex/display/DisplayObject'

export function listView<T>(
  sources: T[],
  iterator: (item: T, index: number | string) => ViElement
): _$_lIST {
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

  return ret as unknown as _$_lIST
}
