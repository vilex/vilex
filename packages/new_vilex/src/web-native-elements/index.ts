import { WebNativeElement, WebNativeElementParams } from './base/WebNativeElement';
export * from './element-list'
export * as WebNative from './element-list'

export * from './elements/Layout'




export const ButtonElement = (data: WebNativeElementParams) => new WebNativeElement({tagName: 'button', ...data})
export const DivElement = (data: WebNativeElementParams) => new WebNativeElement({tagName: 'div', ...data})
export const ImgElement = (data: WebNativeElementParams) => new WebNativeElement({tagName: 'img', ...data})
export const PElement = (data: WebNativeElementParams) => new WebNativeElement({tagName: 'p', ...data})
export const SpanElement = (data: WebNativeElementParams) => new WebNativeElement({tagName: 'span', ...data})