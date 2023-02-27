import { ViElement } from './../vii'

export const extendsElement = <E extends ViElement, T extends Record<string, any>>(element: E, extendsObj: T) => {
  if (!element.extends) element.extends = {}
  Object.assign(element.extends, extendsObj)
  type NewExtendsElementType = E & { extends: T }
  return element as NewExtendsElementType
}
