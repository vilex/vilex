import { isProxy } from '../../utils/isProxy'
import { validAttribute } from '../../utils/validAttribute'
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
  if (tags[dataModel.type as TagType]) {
    vn.el.addEventListener(tags[dataModel.type as TagType], () => {
      const val = (vn.el as any).value
      if (isProxy(dataModel.props.value)) {
        dataModel.props.value.value = val
      } else {
        dataModel.props.value = val
      }
    })
  }

  if (dataModel.hover) {
    vn.el.addEventListener('mouseenter', () => {
      for (const key in dataModel.hover) {
        if (validAttribute(key)) {
          // @ts-ignore
          ;(vn.el as HTMLElement).style[key] = dataModel.hover[key] as string
        }
      }
    })
    vn.el.addEventListener('mouseleave', () => {
      for (const key in dataModel.hover) {
        if (validAttribute(key)) {
          // @ts-ignore
          ;(vn.el as HTMLElement).style.removeProperty(key)
        }
      }
      for (const key in vn.$.style) {
        if (validAttribute(key)) {
          // @ts-ignore
          ;(vn.el as HTMLElement).style[key] = dataModel.style[key]
        }
      }
    })
  }
}
