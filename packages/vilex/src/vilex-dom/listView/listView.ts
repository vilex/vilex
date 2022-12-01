import { ViElement } from '../../vii'

const handleList = <T>(list: T[], callFn: (item: T, index: number) => ViElement) => {
  const sourceData = { sources: list, iterator: callFn }
  Reflect.defineProperty(sourceData, '_$_type', { value: 'list-view', writable: false, enumerable: false, configurable: false })
  return sourceData
}

/** @deprecated listView -> list */
export const listView = handleList

export const list = handleList
