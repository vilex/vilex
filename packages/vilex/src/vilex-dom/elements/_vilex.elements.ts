import { ViItemPart, ViEvent } from './velements'
import { vn, VnItem } from '../vn'
import { ViElement } from '../../vii'
type PartialElement<T> = { [P in keyof T]?: T[P] }

export type ViHTMLAnchorElementPart =
  | ViItemPart
  | Omit<PartialElement<HTMLAnchorElement>, keyof ViEvent>
export type ViHTMLAnchorElement = ViElement & { el: HTMLAnchorElement }

export type ViHTMLElementPart =
  | ViItemPart
  | Omit<PartialElement<HTMLElement>, keyof ViEvent>
export type ViHTMLElement = ViElement & { el: HTMLElement }

export type ViHTMLAreaElementPart =
  | ViItemPart
  | Omit<PartialElement<HTMLAreaElement>, keyof ViEvent>
export type ViHTMLAreaElement = ViElement & { el: HTMLAreaElement }

export type ViHTMLAudioElementPart =
  | ViItemPart
  | Omit<PartialElement<HTMLAudioElement>, keyof ViEvent>
export type ViHTMLAudioElement = ViElement & { el: HTMLAudioElement }

export type ViHTMLBaseElementPart =
  | ViItemPart
  | Omit<PartialElement<HTMLBaseElement>, keyof ViEvent>
export type ViHTMLBaseElement = ViElement & { el: HTMLBaseElement }

export type ViHTMLQuoteElementPart =
  | ViItemPart
  | Omit<PartialElement<HTMLQuoteElement>, keyof ViEvent>
export type ViHTMLQuoteElement = ViElement & { el: HTMLQuoteElement }

export type ViHTMLBodyElementPart =
  | ViItemPart
  | Omit<PartialElement<HTMLBodyElement>, keyof ViEvent>
export type ViHTMLBodyElement = ViElement & { el: HTMLBodyElement }

export type ViHTMLBRElementPart =
  | ViItemPart
  | Omit<PartialElement<HTMLBRElement>, keyof ViEvent>
export type ViHTMLBRElement = ViElement & { el: HTMLBRElement }

export type ViHTMLButtonElementPart =
  | ViItemPart
  | Omit<PartialElement<HTMLButtonElement>, keyof ViEvent>
export type ViHTMLButtonElement = ViElement & { el: HTMLButtonElement }

export type ViHTMLCanvasElementPart =
  | ViItemPart
  | Omit<PartialElement<HTMLCanvasElement>, keyof ViEvent>
export type ViHTMLCanvasElement = ViElement & { el: HTMLCanvasElement }

export type ViHTMLTableCaptionElementPart =
  | ViItemPart
  | Omit<PartialElement<HTMLTableCaptionElement>, keyof ViEvent>
export type ViHTMLTableCaptionElement = ViElement & {
  el: HTMLTableCaptionElement
}

export type ViHTMLTableColElementPart =
  | ViItemPart
  | Omit<PartialElement<HTMLTableColElement>, keyof ViEvent>
export type ViHTMLTableColElement = ViElement & { el: HTMLTableColElement }

export type ViHTMLDataElementPart =
  | ViItemPart
  | Omit<PartialElement<HTMLDataElement>, keyof ViEvent>
export type ViHTMLDataElement = ViElement & { el: HTMLDataElement }

export type ViHTMLDataListElementPart =
  | ViItemPart
  | Omit<PartialElement<HTMLDataListElement>, keyof ViEvent>
export type ViHTMLDataListElement = ViElement & { el: HTMLDataListElement }

export type ViHTMLModElementPart =
  | ViItemPart
  | Omit<PartialElement<HTMLModElement>, keyof ViEvent>
export type ViHTMLModElement = ViElement & { el: HTMLModElement }

export type ViHTMLDetailsElementPart =
  | ViItemPart
  | Omit<PartialElement<HTMLDetailsElement>, keyof ViEvent>
export type ViHTMLDetailsElement = ViElement & { el: HTMLDetailsElement }

export type ViHTMLDialogElementPart =
  | ViItemPart
  | Omit<PartialElement<HTMLDialogElement>, keyof ViEvent>
export type ViHTMLDialogElement = ViElement & { el: HTMLDialogElement }

export type ViHTMLDivElementPart =
  | ViItemPart
  | Omit<PartialElement<HTMLDivElement>, keyof ViEvent>
export type ViHTMLDivElement = ViElement & { el: HTMLDivElement }

export type ViHTMLDListElementPart =
  | ViItemPart
  | Omit<PartialElement<HTMLDListElement>, keyof ViEvent>
export type ViHTMLDListElement = ViElement & { el: HTMLDListElement }

export type ViHTMLEmbedElementPart =
  | ViItemPart
  | Omit<PartialElement<HTMLEmbedElement>, keyof ViEvent>
export type ViHTMLEmbedElement = ViElement & { el: HTMLEmbedElement }

export type ViHTMLFieldSetElementPart =
  | ViItemPart
  | Omit<PartialElement<HTMLFieldSetElement>, keyof ViEvent>
export type ViHTMLFieldSetElement = ViElement & { el: HTMLFieldSetElement }

export type ViHTMLFormElementPart =
  | ViItemPart
  | Omit<PartialElement<HTMLFormElement>, keyof ViEvent>
export type ViHTMLFormElement = ViElement & { el: HTMLFormElement }

export type ViHTMLHeadingElementPart =
  | ViItemPart
  | Omit<PartialElement<HTMLHeadingElement>, keyof ViEvent>
export type ViHTMLHeadingElement = ViElement & { el: HTMLHeadingElement }

export type ViHTMLHeadElementPart =
  | ViItemPart
  | Omit<PartialElement<HTMLHeadElement>, keyof ViEvent>
export type ViHTMLHeadElement = ViElement & { el: HTMLHeadElement }

export type ViHTMLHRElementPart =
  | ViItemPart
  | Omit<PartialElement<HTMLHRElement>, keyof ViEvent>
export type ViHTMLHRElement = ViElement & { el: HTMLHRElement }

export type ViHTMLHtmlElementPart =
  | ViItemPart
  | Omit<PartialElement<HTMLHtmlElement>, keyof ViEvent>
export type ViHTMLHtmlElement = ViElement & { el: HTMLHtmlElement }

export type ViHTMLIFrameElementPart =
  | ViItemPart
  | Omit<PartialElement<HTMLIFrameElement>, keyof ViEvent>
export type ViHTMLIFrameElement = ViElement & { el: HTMLIFrameElement }

export type ViHTMLImageElementPart =
  | ViItemPart
  | Omit<PartialElement<HTMLImageElement>, keyof ViEvent>
export type ViHTMLImageElement = ViElement & { el: HTMLImageElement }

export type ViHTMLInputElementPart =
  | ViItemPart
  | Omit<PartialElement<HTMLInputElement>, keyof ViEvent>
export type ViHTMLInputElement = ViElement & { el: HTMLInputElement }

export type ViHTMLLabelElementPart =
  | ViItemPart
  | Omit<PartialElement<HTMLLabelElement>, keyof ViEvent>
export type ViHTMLLabelElement = ViElement & { el: HTMLLabelElement }

export type ViHTMLLegendElementPart =
  | ViItemPart
  | Omit<PartialElement<HTMLLegendElement>, keyof ViEvent>
export type ViHTMLLegendElement = ViElement & { el: HTMLLegendElement }

export type ViHTMLLIElementPart =
  | ViItemPart
  | Omit<PartialElement<HTMLLIElement>, keyof ViEvent>
export type ViHTMLLIElement = ViElement & { el: HTMLLIElement }

export type ViHTMLLinkElementPart =
  | ViItemPart
  | Omit<PartialElement<HTMLLinkElement>, keyof ViEvent>
export type ViHTMLLinkElement = ViElement & { el: HTMLLinkElement }

export type ViHTMLMapElementPart =
  | ViItemPart
  | Omit<PartialElement<HTMLMapElement>, keyof ViEvent>
export type ViHTMLMapElement = ViElement & { el: HTMLMapElement }

export type ViHTMLMenuElementPart =
  | ViItemPart
  | Omit<PartialElement<HTMLMenuElement>, keyof ViEvent>
export type ViHTMLMenuElement = ViElement & { el: HTMLMenuElement }

export type ViHTMLMetaElementPart =
  | ViItemPart
  | Omit<PartialElement<HTMLMetaElement>, keyof ViEvent>
export type ViHTMLMetaElement = ViElement & { el: HTMLMetaElement }

export type ViHTMLMeterElementPart =
  | ViItemPart
  | Omit<PartialElement<HTMLMeterElement>, keyof ViEvent>
export type ViHTMLMeterElement = ViElement & { el: HTMLMeterElement }

export type ViHTMLObjectElementPart =
  | ViItemPart
  | Omit<PartialElement<HTMLObjectElement>, keyof ViEvent>
export type ViHTMLObjectElement = ViElement & { el: HTMLObjectElement }

export type ViHTMLOListElementPart =
  | ViItemPart
  | Omit<PartialElement<HTMLOListElement>, keyof ViEvent>
export type ViHTMLOListElement = ViElement & { el: HTMLOListElement }

export type ViHTMLOptGroupElementPart =
  | ViItemPart
  | Omit<PartialElement<HTMLOptGroupElement>, keyof ViEvent>
export type ViHTMLOptGroupElement = ViElement & { el: HTMLOptGroupElement }

export type ViHTMLOptionElementPart =
  | ViItemPart
  | Omit<PartialElement<HTMLOptionElement>, keyof ViEvent>
export type ViHTMLOptionElement = ViElement & { el: HTMLOptionElement }

export type ViHTMLOutputElementPart =
  | ViItemPart
  | Omit<PartialElement<HTMLOutputElement>, keyof ViEvent>
export type ViHTMLOutputElement = ViElement & { el: HTMLOutputElement }

export type ViHTMLParagraphElementPart =
  | ViItemPart
  | Omit<PartialElement<HTMLParagraphElement>, keyof ViEvent>
export type ViHTMLParagraphElement = ViElement & { el: HTMLParagraphElement }

export type ViHTMLPictureElementPart =
  | ViItemPart
  | Omit<PartialElement<HTMLPictureElement>, keyof ViEvent>
export type ViHTMLPictureElement = ViElement & { el: HTMLPictureElement }

export type ViHTMLPreElementPart =
  | ViItemPart
  | Omit<PartialElement<HTMLPreElement>, keyof ViEvent>
export type ViHTMLPreElement = ViElement & { el: HTMLPreElement }

export type ViHTMLProgressElementPart =
  | ViItemPart
  | Omit<PartialElement<HTMLProgressElement>, keyof ViEvent>
export type ViHTMLProgressElement = ViElement & { el: HTMLProgressElement }

export type ViHTMLScriptElementPart =
  | ViItemPart
  | Omit<PartialElement<HTMLScriptElement>, keyof ViEvent>
export type ViHTMLScriptElement = ViElement & { el: HTMLScriptElement }

export type ViHTMLSelectElementPart =
  | ViItemPart
  | Omit<PartialElement<HTMLSelectElement>, keyof ViEvent>
export type ViHTMLSelectElement = ViElement & { el: HTMLSelectElement }

export type ViHTMLSlotElementPart =
  | ViItemPart
  | Omit<PartialElement<HTMLSlotElement>, keyof ViEvent>
export type ViHTMLSlotElement = ViElement & { el: HTMLSlotElement }

export type ViHTMLSourceElementPart =
  | ViItemPart
  | Omit<PartialElement<HTMLSourceElement>, keyof ViEvent>
export type ViHTMLSourceElement = ViElement & { el: HTMLSourceElement }

export type ViHTMLSpanElementPart =
  | ViItemPart
  | Omit<PartialElement<HTMLSpanElement>, keyof ViEvent>
export type ViHTMLSpanElement = ViElement & { el: HTMLSpanElement }

export type ViHTMLStyleElementPart =
  | ViItemPart
  | Omit<PartialElement<HTMLStyleElement>, keyof ViEvent>
export type ViHTMLStyleElement = ViElement & { el: HTMLStyleElement }

export type ViHTMLTableElementPart =
  | ViItemPart
  | Omit<PartialElement<HTMLTableElement>, keyof ViEvent>
export type ViHTMLTableElement = ViElement & { el: HTMLTableElement }

export type ViHTMLTableSectionElementPart =
  | ViItemPart
  | Omit<PartialElement<HTMLTableSectionElement>, keyof ViEvent>
export type ViHTMLTableSectionElement = ViElement & {
  el: HTMLTableSectionElement
}

export type ViHTMLTableCellElementPart =
  | ViItemPart
  | Omit<PartialElement<HTMLTableCellElement>, keyof ViEvent>
export type ViHTMLTableCellElement = ViElement & { el: HTMLTableCellElement }

export type ViHTMLTemplateElementPart =
  | ViItemPart
  | Omit<PartialElement<HTMLTemplateElement>, keyof ViEvent>
export type ViHTMLTemplateElement = ViElement & { el: HTMLTemplateElement }

export type ViHTMLTextAreaElementPart =
  | ViItemPart
  | Omit<PartialElement<HTMLTextAreaElement>, keyof ViEvent>
export type ViHTMLTextAreaElement = ViElement & { el: HTMLTextAreaElement }

export type ViHTMLTimeElementPart =
  | ViItemPart
  | Omit<PartialElement<HTMLTimeElement>, keyof ViEvent>
export type ViHTMLTimeElement = ViElement & { el: HTMLTimeElement }

export type ViHTMLTitleElementPart =
  | ViItemPart
  | Omit<PartialElement<HTMLTitleElement>, keyof ViEvent>
export type ViHTMLTitleElement = ViElement & { el: HTMLTitleElement }

export type ViHTMLTableRowElementPart =
  | ViItemPart
  | Omit<PartialElement<HTMLTableRowElement>, keyof ViEvent>
export type ViHTMLTableRowElement = ViElement & { el: HTMLTableRowElement }

export type ViHTMLTrackElementPart =
  | ViItemPart
  | Omit<PartialElement<HTMLTrackElement>, keyof ViEvent>
export type ViHTMLTrackElement = ViElement & { el: HTMLTrackElement }

export type ViHTMLUListElementPart =
  | ViItemPart
  | Omit<PartialElement<HTMLUListElement>, keyof ViEvent>
export type ViHTMLUListElement = ViElement & { el: HTMLUListElement }

export type ViHTMLVideoElementPart =
  | ViItemPart
  | Omit<PartialElement<HTMLVideoElement>, keyof ViEvent>
export type ViHTMLVideoElement = ViElement & { el: HTMLVideoElement }

export function a(...items: ViHTMLAnchorElementPart[]): ViHTMLAnchorElement {
  return vn('a', items as VnItem[]) as unknown as ViHTMLAnchorElement
}

export function abbr(...items: ViHTMLElementPart[]): ViHTMLElement {
  return vn('abbr', items as VnItem[]) as unknown as ViHTMLElement
}

export function address(...items: ViHTMLElementPart[]): ViHTMLElement {
  return vn('address', items as VnItem[]) as unknown as ViHTMLElement
}

export function area(...items: ViHTMLAreaElementPart[]): ViHTMLAreaElement {
  return vn('area', items as VnItem[]) as unknown as ViHTMLAreaElement
}

export function article(...items: ViHTMLElementPart[]): ViHTMLElement {
  return vn('article', items as VnItem[]) as unknown as ViHTMLElement
}

export function aside(...items: ViHTMLElementPart[]): ViHTMLElement {
  return vn('aside', items as VnItem[]) as unknown as ViHTMLElement
}

export function audio(...items: ViHTMLAudioElementPart[]): ViHTMLAudioElement {
  return vn('audio', items as VnItem[]) as unknown as ViHTMLAudioElement
}

export function b(...items: ViHTMLElementPart[]): ViHTMLElement {
  return vn('b', items as VnItem[]) as unknown as ViHTMLElement
}

export function base(...items: ViHTMLBaseElementPart[]): ViHTMLBaseElement {
  return vn('base', items as VnItem[]) as unknown as ViHTMLBaseElement
}

export function bdi(...items: ViHTMLElementPart[]): ViHTMLElement {
  return vn('bdi', items as VnItem[]) as unknown as ViHTMLElement
}

export function bdo(...items: ViHTMLElementPart[]): ViHTMLElement {
  return vn('bdo', items as VnItem[]) as unknown as ViHTMLElement
}

export function blockquote(
  ...items: ViHTMLQuoteElementPart[]
): ViHTMLQuoteElement {
  return vn('blockquote', items as VnItem[]) as unknown as ViHTMLQuoteElement
}

export function body(...items: ViHTMLBodyElementPart[]): ViHTMLBodyElement {
  return vn('body', items as VnItem[]) as unknown as ViHTMLBodyElement
}

export function br(...items: ViHTMLBRElementPart[]): ViHTMLBRElement {
  return vn('br', items as VnItem[]) as unknown as ViHTMLBRElement
}

export function button(
  ...items: ViHTMLButtonElementPart[]
): ViHTMLButtonElement {
  return vn('button', items as VnItem[]) as unknown as ViHTMLButtonElement
}

export function canvas(
  ...items: ViHTMLCanvasElementPart[]
): ViHTMLCanvasElement {
  return vn('canvas', items as VnItem[]) as unknown as ViHTMLCanvasElement
}

export function caption(
  ...items: ViHTMLTableCaptionElementPart[]
): ViHTMLTableCaptionElement {
  return vn(
    'caption',
    items as VnItem[]
  ) as unknown as ViHTMLTableCaptionElement
}

export function cite(...items: ViHTMLElementPart[]): ViHTMLElement {
  return vn('cite', items as VnItem[]) as unknown as ViHTMLElement
}

export function code(...items: ViHTMLElementPart[]): ViHTMLElement {
  return vn('code', items as VnItem[]) as unknown as ViHTMLElement
}

export function col(
  ...items: ViHTMLTableColElementPart[]
): ViHTMLTableColElement {
  return vn('col', items as VnItem[]) as unknown as ViHTMLTableColElement
}

export function colgroup(
  ...items: ViHTMLTableColElementPart[]
): ViHTMLTableColElement {
  return vn('colgroup', items as VnItem[]) as unknown as ViHTMLTableColElement
}

export function data(...items: ViHTMLDataElementPart[]): ViHTMLDataElement {
  return vn('data', items as VnItem[]) as unknown as ViHTMLDataElement
}

export function datalist(
  ...items: ViHTMLDataListElementPart[]
): ViHTMLDataListElement {
  return vn('datalist', items as VnItem[]) as unknown as ViHTMLDataListElement
}

export function dd(...items: ViHTMLElementPart[]): ViHTMLElement {
  return vn('dd', items as VnItem[]) as unknown as ViHTMLElement
}

export function del(...items: ViHTMLModElementPart[]): ViHTMLModElement {
  return vn('del', items as VnItem[]) as unknown as ViHTMLModElement
}

export function details(
  ...items: ViHTMLDetailsElementPart[]
): ViHTMLDetailsElement {
  return vn('details', items as VnItem[]) as unknown as ViHTMLDetailsElement
}

export function dfn(...items: ViHTMLElementPart[]): ViHTMLElement {
  return vn('dfn', items as VnItem[]) as unknown as ViHTMLElement
}

export function dialog(
  ...items: ViHTMLDialogElementPart[]
): ViHTMLDialogElement {
  return vn('dialog', items as VnItem[]) as unknown as ViHTMLDialogElement
}

export function div(...items: ViHTMLDivElementPart[]): ViHTMLDivElement {
  return vn('div', items as VnItem[]) as unknown as ViHTMLDivElement
}

export function dl(...items: ViHTMLDListElementPart[]): ViHTMLDListElement {
  return vn('dl', items as VnItem[]) as unknown as ViHTMLDListElement
}

export function dt(...items: ViHTMLElementPart[]): ViHTMLElement {
  return vn('dt', items as VnItem[]) as unknown as ViHTMLElement
}

export function em(...items: ViHTMLElementPart[]): ViHTMLElement {
  return vn('em', items as VnItem[]) as unknown as ViHTMLElement
}

export function embed(...items: ViHTMLEmbedElementPart[]): ViHTMLEmbedElement {
  return vn('embed', items as VnItem[]) as unknown as ViHTMLEmbedElement
}

export function fieldset(
  ...items: ViHTMLFieldSetElementPart[]
): ViHTMLFieldSetElement {
  return vn('fieldset', items as VnItem[]) as unknown as ViHTMLFieldSetElement
}

export function figcaption(...items: ViHTMLElementPart[]): ViHTMLElement {
  return vn('figcaption', items as VnItem[]) as unknown as ViHTMLElement
}

export function figure(...items: ViHTMLElementPart[]): ViHTMLElement {
  return vn('figure', items as VnItem[]) as unknown as ViHTMLElement
}

export function footer(...items: ViHTMLElementPart[]): ViHTMLElement {
  return vn('footer', items as VnItem[]) as unknown as ViHTMLElement
}

export function form(...items: ViHTMLFormElementPart[]): ViHTMLFormElement {
  return vn('form', items as VnItem[]) as unknown as ViHTMLFormElement
}

export function h1(...items: ViHTMLHeadingElementPart[]): ViHTMLHeadingElement {
  return vn('h1', items as VnItem[]) as unknown as ViHTMLHeadingElement
}

export function h2(...items: ViHTMLHeadingElementPart[]): ViHTMLHeadingElement {
  return vn('h2', items as VnItem[]) as unknown as ViHTMLHeadingElement
}

export function h3(...items: ViHTMLHeadingElementPart[]): ViHTMLHeadingElement {
  return vn('h3', items as VnItem[]) as unknown as ViHTMLHeadingElement
}

export function h4(...items: ViHTMLHeadingElementPart[]): ViHTMLHeadingElement {
  return vn('h4', items as VnItem[]) as unknown as ViHTMLHeadingElement
}

export function h5(...items: ViHTMLHeadingElementPart[]): ViHTMLHeadingElement {
  return vn('h5', items as VnItem[]) as unknown as ViHTMLHeadingElement
}

export function h6(...items: ViHTMLHeadingElementPart[]): ViHTMLHeadingElement {
  return vn('h6', items as VnItem[]) as unknown as ViHTMLHeadingElement
}

export function head(...items: ViHTMLHeadElementPart[]): ViHTMLHeadElement {
  return vn('head', items as VnItem[]) as unknown as ViHTMLHeadElement
}

export function header(...items: ViHTMLElementPart[]): ViHTMLElement {
  return vn('header', items as VnItem[]) as unknown as ViHTMLElement
}

export function hgroup(...items: ViHTMLElementPart[]): ViHTMLElement {
  return vn('hgroup', items as VnItem[]) as unknown as ViHTMLElement
}

export function hr(...items: ViHTMLHRElementPart[]): ViHTMLHRElement {
  return vn('hr', items as VnItem[]) as unknown as ViHTMLHRElement
}

export function html(...items: ViHTMLHtmlElementPart[]): ViHTMLHtmlElement {
  return vn('html', items as VnItem[]) as unknown as ViHTMLHtmlElement
}

export function i(...items: ViHTMLElementPart[]): ViHTMLElement {
  return vn('i', items as VnItem[]) as unknown as ViHTMLElement
}

export function iframe(
  ...items: ViHTMLIFrameElementPart[]
): ViHTMLIFrameElement {
  return vn('iframe', items as VnItem[]) as unknown as ViHTMLIFrameElement
}

export function img(...items: ViHTMLImageElementPart[]): ViHTMLImageElement {
  return vn('img', items as VnItem[]) as unknown as ViHTMLImageElement
}

export function input(...items: ViHTMLInputElementPart[]): ViHTMLInputElement {
  return vn('input', items as VnItem[]) as unknown as ViHTMLInputElement
}

export function ins(...items: ViHTMLModElementPart[]): ViHTMLModElement {
  return vn('ins', items as VnItem[]) as unknown as ViHTMLModElement
}

export function kbd(...items: ViHTMLElementPart[]): ViHTMLElement {
  return vn('kbd', items as VnItem[]) as unknown as ViHTMLElement
}

export function label(...items: ViHTMLLabelElementPart[]): ViHTMLLabelElement {
  return vn('label', items as VnItem[]) as unknown as ViHTMLLabelElement
}

export function legend(
  ...items: ViHTMLLegendElementPart[]
): ViHTMLLegendElement {
  return vn('legend', items as VnItem[]) as unknown as ViHTMLLegendElement
}

export function li(...items: ViHTMLLIElementPart[]): ViHTMLLIElement {
  return vn('li', items as VnItem[]) as unknown as ViHTMLLIElement
}

export function link(...items: ViHTMLLinkElementPart[]): ViHTMLLinkElement {
  return vn('link', items as VnItem[]) as unknown as ViHTMLLinkElement
}

export function main(...items: ViHTMLElementPart[]): ViHTMLElement {
  return vn('main', items as VnItem[]) as unknown as ViHTMLElement
}

export function map(...items: ViHTMLMapElementPart[]): ViHTMLMapElement {
  return vn('map', items as VnItem[]) as unknown as ViHTMLMapElement
}

export function mark(...items: ViHTMLElementPart[]): ViHTMLElement {
  return vn('mark', items as VnItem[]) as unknown as ViHTMLElement
}

export function menu(...items: ViHTMLMenuElementPart[]): ViHTMLMenuElement {
  return vn('menu', items as VnItem[]) as unknown as ViHTMLMenuElement
}

export function meta(...items: ViHTMLMetaElementPart[]): ViHTMLMetaElement {
  return vn('meta', items as VnItem[]) as unknown as ViHTMLMetaElement
}

export function meter(...items: ViHTMLMeterElementPart[]): ViHTMLMeterElement {
  return vn('meter', items as VnItem[]) as unknown as ViHTMLMeterElement
}

export function nav(...items: ViHTMLElementPart[]): ViHTMLElement {
  return vn('nav', items as VnItem[]) as unknown as ViHTMLElement
}

export function noscript(...items: ViHTMLElementPart[]): ViHTMLElement {
  return vn('noscript', items as VnItem[]) as unknown as ViHTMLElement
}

export function object(
  ...items: ViHTMLObjectElementPart[]
): ViHTMLObjectElement {
  return vn('object', items as VnItem[]) as unknown as ViHTMLObjectElement
}

export function ol(...items: ViHTMLOListElementPart[]): ViHTMLOListElement {
  return vn('ol', items as VnItem[]) as unknown as ViHTMLOListElement
}

export function optgroup(
  ...items: ViHTMLOptGroupElementPart[]
): ViHTMLOptGroupElement {
  return vn('optgroup', items as VnItem[]) as unknown as ViHTMLOptGroupElement
}

export function option(
  ...items: ViHTMLOptionElementPart[]
): ViHTMLOptionElement {
  return vn('option', items as VnItem[]) as unknown as ViHTMLOptionElement
}

export function output(
  ...items: ViHTMLOutputElementPart[]
): ViHTMLOutputElement {
  return vn('output', items as VnItem[]) as unknown as ViHTMLOutputElement
}

export function p(
  ...items: ViHTMLParagraphElementPart[]
): ViHTMLParagraphElement {
  return vn('p', items as VnItem[]) as unknown as ViHTMLParagraphElement
}

export function picture(
  ...items: ViHTMLPictureElementPart[]
): ViHTMLPictureElement {
  return vn('picture', items as VnItem[]) as unknown as ViHTMLPictureElement
}

export function pre(...items: ViHTMLPreElementPart[]): ViHTMLPreElement {
  return vn('pre', items as VnItem[]) as unknown as ViHTMLPreElement
}

export function progress(
  ...items: ViHTMLProgressElementPart[]
): ViHTMLProgressElement {
  return vn('progress', items as VnItem[]) as unknown as ViHTMLProgressElement
}

export function q(...items: ViHTMLQuoteElementPart[]): ViHTMLQuoteElement {
  return vn('q', items as VnItem[]) as unknown as ViHTMLQuoteElement
}

export function rp(...items: ViHTMLElementPart[]): ViHTMLElement {
  return vn('rp', items as VnItem[]) as unknown as ViHTMLElement
}

export function rt(...items: ViHTMLElementPart[]): ViHTMLElement {
  return vn('rt', items as VnItem[]) as unknown as ViHTMLElement
}

export function ruby(...items: ViHTMLElementPart[]): ViHTMLElement {
  return vn('ruby', items as VnItem[]) as unknown as ViHTMLElement
}

export function s(...items: ViHTMLElementPart[]): ViHTMLElement {
  return vn('s', items as VnItem[]) as unknown as ViHTMLElement
}

export function samp(...items: ViHTMLElementPart[]): ViHTMLElement {
  return vn('samp', items as VnItem[]) as unknown as ViHTMLElement
}

export function script(
  ...items: ViHTMLScriptElementPart[]
): ViHTMLScriptElement {
  return vn('script', items as VnItem[]) as unknown as ViHTMLScriptElement
}

export function section(...items: ViHTMLElementPart[]): ViHTMLElement {
  return vn('section', items as VnItem[]) as unknown as ViHTMLElement
}

export function select(
  ...items: ViHTMLSelectElementPart[]
): ViHTMLSelectElement {
  return vn('select', items as VnItem[]) as unknown as ViHTMLSelectElement
}

export function slot(...items: ViHTMLSlotElementPart[]): ViHTMLSlotElement {
  return vn('slot', items as VnItem[]) as unknown as ViHTMLSlotElement
}

export function small(...items: ViHTMLElementPart[]): ViHTMLElement {
  return vn('small', items as VnItem[]) as unknown as ViHTMLElement
}

export function source(
  ...items: ViHTMLSourceElementPart[]
): ViHTMLSourceElement {
  return vn('source', items as VnItem[]) as unknown as ViHTMLSourceElement
}

export function span(...items: ViHTMLSpanElementPart[]): ViHTMLSpanElement {
  return vn('span', items as VnItem[]) as unknown as ViHTMLSpanElement
}

export function strong(...items: ViHTMLElementPart[]): ViHTMLElement {
  return vn('strong', items as VnItem[]) as unknown as ViHTMLElement
}

export function style(...items: ViHTMLStyleElementPart[]): ViHTMLStyleElement {
  return vn('style', items as VnItem[]) as unknown as ViHTMLStyleElement
}

export function sub(...items: ViHTMLElementPart[]): ViHTMLElement {
  return vn('sub', items as VnItem[]) as unknown as ViHTMLElement
}

export function summary(...items: ViHTMLElementPart[]): ViHTMLElement {
  return vn('summary', items as VnItem[]) as unknown as ViHTMLElement
}

export function sup(...items: ViHTMLElementPart[]): ViHTMLElement {
  return vn('sup', items as VnItem[]) as unknown as ViHTMLElement
}

export function table(...items: ViHTMLTableElementPart[]): ViHTMLTableElement {
  return vn('table', items as VnItem[]) as unknown as ViHTMLTableElement
}

export function tbody(
  ...items: ViHTMLTableSectionElementPart[]
): ViHTMLTableSectionElement {
  return vn('tbody', items as VnItem[]) as unknown as ViHTMLTableSectionElement
}

export function td(
  ...items: ViHTMLTableCellElementPart[]
): ViHTMLTableCellElement {
  return vn('td', items as VnItem[]) as unknown as ViHTMLTableCellElement
}

export function template(
  ...items: ViHTMLTemplateElementPart[]
): ViHTMLTemplateElement {
  return vn('template', items as VnItem[]) as unknown as ViHTMLTemplateElement
}

export function textarea(
  ...items: ViHTMLTextAreaElementPart[]
): ViHTMLTextAreaElement {
  return vn('textarea', items as VnItem[]) as unknown as ViHTMLTextAreaElement
}

export function tfoot(
  ...items: ViHTMLTableSectionElementPart[]
): ViHTMLTableSectionElement {
  return vn('tfoot', items as VnItem[]) as unknown as ViHTMLTableSectionElement
}

export function th(
  ...items: ViHTMLTableCellElementPart[]
): ViHTMLTableCellElement {
  return vn('th', items as VnItem[]) as unknown as ViHTMLTableCellElement
}

export function thead(
  ...items: ViHTMLTableSectionElementPart[]
): ViHTMLTableSectionElement {
  return vn('thead', items as VnItem[]) as unknown as ViHTMLTableSectionElement
}

export function time(...items: ViHTMLTimeElementPart[]): ViHTMLTimeElement {
  return vn('time', items as VnItem[]) as unknown as ViHTMLTimeElement
}

export function title(...items: ViHTMLTitleElementPart[]): ViHTMLTitleElement {
  return vn('title', items as VnItem[]) as unknown as ViHTMLTitleElement
}

export function tr(
  ...items: ViHTMLTableRowElementPart[]
): ViHTMLTableRowElement {
  return vn('tr', items as VnItem[]) as unknown as ViHTMLTableRowElement
}

export function track(...items: ViHTMLTrackElementPart[]): ViHTMLTrackElement {
  return vn('track', items as VnItem[]) as unknown as ViHTMLTrackElement
}

export function u(...items: ViHTMLElementPart[]): ViHTMLElement {
  return vn('u', items as VnItem[]) as unknown as ViHTMLElement
}

export function ul(...items: ViHTMLUListElementPart[]): ViHTMLUListElement {
  return vn('ul', items as VnItem[]) as unknown as ViHTMLUListElement
}

export function video(...items: ViHTMLVideoElementPart[]): ViHTMLVideoElement {
  return vn('video', items as VnItem[]) as unknown as ViHTMLVideoElement
}

export function wbr(...items: ViHTMLElementPart[]): ViHTMLElement {
  return vn('wbr', items as VnItem[]) as unknown as ViHTMLElement
}
