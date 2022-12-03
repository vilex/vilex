import { Ref, replaceNode, ViElement, watch } from '../../vii'
import { unref } from '../../vilex/store/unref'

export function chooseOneElement(key: Ref<number>, components: ViElement[]): ViElement {
  let currentComponent = components[unref(key)]
  watch(key, (value: number) => {
    if (value !== unref(key)) {
      const newElement = components[value]
      replaceNode(newElement, currentComponent)
      currentComponent = newElement
    }
  })
  return currentComponent
}
