import { WebNativeElement, WebNativeElementParams } from './base/WebNativeElement';
export * from './element-list'
export * as WebNative from './element-list'

export * from './elements/Layout'




export const Button = (data: WebNativeElementParams) => new WebNativeElement({tagName: 'button', ...data})
export const Div = (data: WebNativeElementParams) => new WebNativeElement({tagName: 'div', ...data})
export const Img = (data: WebNativeElementParams) => new WebNativeElement({tagName: 'img', ...data})
export const P = (data: WebNativeElementParams) => new WebNativeElement({tagName: 'p', ...data})
export const Span = (data: WebNativeElementParams) => new WebNativeElement({tagName: 'span', ...data})