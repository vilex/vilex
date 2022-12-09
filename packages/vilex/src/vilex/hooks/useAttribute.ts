interface UseAttributeType {
  id: any
  src: any
  alt: any
  size: any
  type: any
  name: any
  href: any
  cols: any
  rows: any
  title: any
  align: any
  value: any
  width: any
  height: any
  action: any
  method: any
  checked: any
  readonly: any
  disabled: any
  controls: any
  autoplay: any
  maxlength: any
  placeholder: any
  [key: string]: any
  _$_type: string
}

export const useAttribute = <T extends UseAttributeType>(attr: T): T => {
  attr._$_type = 'attributes'
  return attr
}
