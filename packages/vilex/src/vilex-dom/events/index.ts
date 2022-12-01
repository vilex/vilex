import { isProxy } from '../../utils/isProxy'
import { validAttribute } from '../../utils/validAttribute'
import { IDataModel } from '../../vilex/dataType/DataModel'
import { VNode } from '../vn'

type Tags = {
  input: string
  textarea: string
  select: string
}

type TagType = keyof Tags

export function eventBehavior(vn: VNode) {
  const tags: Tags = { input: 'input', textarea: 'input', select: 'change' }
  const dataModel = vn.$
  const el = vn.el as HTMLElement
  if (tags[dataModel.type as TagType]) {
    el.addEventListener(tags[dataModel.type as TagType], () => {
      const val = (el as any).value
      isProxy(dataModel.props.value) ? (dataModel.props.value.value = val) : (dataModel.props.value = val)
    })
  }
  dataModel.hover && handleHover(el, dataModel)
}

/**
 * @deprecated
 */
const handleHover = (el: HTMLElement, data: IDataModel) => {
  el.addEventListener('mouseenter', () => {
    for (const key in data.hover) {
      if (validAttribute(key)) {
        el.style[key as any] = data.hover[key] as string
      }
    }
  })
  el.addEventListener('mouseleave', () => {
    for (const key in data.hover) {
      if (validAttribute(key)) {
        el.style.removeProperty(key)
      }
    }
    for (const key in data.style) {
      if (validAttribute(key)) {
        el.style[key as any] = data.style[key]
      }
    }
  })
}
