import { isPromise } from '../../utils/isPromise'
import { VnItem } from '../vn'
import { isCssKey } from './isCssKey'
import { isStyled } from './isStyled'

export function invisibleTypeToDisplayType(options: VnItem[]) {
  const list: VnItem[] = []
  options.forEach(option => {
    // string, array, object
    if (typeof option === 'function') {
      option = option()
    }

    if (typeof option === 'string' || typeof option === 'number') {
      list.push(option)
    } else if (isStyled(option)) {
      list.push(option)
    }
    // @ts-ignore
    else if (isPromise(option) || (option.$ && option.$.type)) {
      list.push(option)
    } else if (Array.isArray(option)) {
      const isChildren = option.some(item => {
        return isPromise(item) || (item.$ && item.$.type)
      })
      if (isChildren) {
        list.push(...option)
      } else {
        const obj = { $dataType: 'class' }
        option.forEach(item => {
          if (typeof item === 'string') {
            // @ts-ignore
            obj[item] = true
          } else {
            Object.assign(obj, item)
          }
        })
        list.push(obj)
      }
    } else {
      // attr， style
      // object

      if (option._$_type == `list-view`) {
        list.push(option)
      } else {
        let isCss = true
        for (const key in option) {
          if (!isCssKey(key)) {
            isCss = false
            break
          }
        }

        if (isCss) {
          list.push({
            $dataType: 'style',
            ...option
          } as VnItem)
        } else {
          // event, props
          let isEvents = true
          for (const key in option) {
            if (!key.startsWith('on')) {
              isEvents = false
              break
            }
          }

          if (isEvents) {
            list.push({
              $dataType: 'event',
              ...option
            } as VnItem)
          } else {
            list.push({
              $dataType: 'props',
              ...option
            } as VnItem)
          }
        }
      }
    }
  })
  return list
}
