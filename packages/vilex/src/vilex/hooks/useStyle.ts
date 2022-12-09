import { Properties } from 'csstype'

export interface UseStyleType extends Properties {
  _$_type: 'style'
}

export const useStyle = <T extends UseStyleType>(style: T): T => {
  style._$_type = 'style'
  return style
}
