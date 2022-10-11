import { ViItemPart, ViEvent } from "./velements"
import { vn, VnItem } from "../vn" 
import { ViElement } from "../../vii" 
type PartialElement<T> = { [P in keyof T]?: T[P] | { value: T[P] } } 

type ViHTMLAnchorElementPart = ViItemPart | Omit<PartialElement<HTMLAnchorElement>, keyof ViEvent> ;
type ViHTMLAnchorElement = ViElement & { el: HTMLAnchorElement };

type ViHTMLElementPart = ViItemPart | Omit<PartialElement<HTMLElement>, keyof ViEvent> ;
type ViHTMLElement = ViElement & { el: HTMLElement };

type ViHTMLAreaElementPart = ViItemPart | Omit<PartialElement<HTMLAreaElement>, keyof ViEvent> ;
type ViHTMLAreaElement = ViElement & { el: HTMLAreaElement };

type ViHTMLAudioElementPart = ViItemPart | Omit<PartialElement<HTMLAudioElement>, keyof ViEvent> ;
type ViHTMLAudioElement = ViElement & { el: HTMLAudioElement };

type ViHTMLBaseElementPart = ViItemPart | Omit<PartialElement<HTMLBaseElement>, keyof ViEvent> ;
type ViHTMLBaseElement = ViElement & { el: HTMLBaseElement };

type ViHTMLQuoteElementPart = ViItemPart | Omit<PartialElement<HTMLQuoteElement>, keyof ViEvent> ;
type ViHTMLQuoteElement = ViElement & { el: HTMLQuoteElement };

type ViHTMLBodyElementPart = ViItemPart | Omit<PartialElement<HTMLBodyElement>, keyof ViEvent> ;
type ViHTMLBodyElement = ViElement & { el: HTMLBodyElement };

type ViHTMLBRElementPart = ViItemPart | Omit<PartialElement<HTMLBRElement>, keyof ViEvent> ;
type ViHTMLBRElement = ViElement & { el: HTMLBRElement };

type ViHTMLButtonElementPart = ViItemPart | Omit<PartialElement<HTMLButtonElement>, keyof ViEvent> ;
type ViHTMLButtonElement = ViElement & { el: HTMLButtonElement };

type ViHTMLCanvasElementPart = ViItemPart | Omit<PartialElement<HTMLCanvasElement>, keyof ViEvent> ;
type ViHTMLCanvasElement = ViElement & { el: HTMLCanvasElement };

type ViHTMLTableCaptionElementPart = ViItemPart | Omit<PartialElement<HTMLTableCaptionElement>, keyof ViEvent> ;
type ViHTMLTableCaptionElement = ViElement & { el: HTMLTableCaptionElement };

type ViHTMLTableColElementPart = ViItemPart | Omit<PartialElement<HTMLTableColElement>, keyof ViEvent> ;
type ViHTMLTableColElement = ViElement & { el: HTMLTableColElement };

type ViHTMLDataElementPart = ViItemPart | Omit<PartialElement<HTMLDataElement>, keyof ViEvent> ;
type ViHTMLDataElement = ViElement & { el: HTMLDataElement };

type ViHTMLDataListElementPart = ViItemPart | Omit<PartialElement<HTMLDataListElement>, keyof ViEvent> ;
type ViHTMLDataListElement = ViElement & { el: HTMLDataListElement };

type ViHTMLModElementPart = ViItemPart | Omit<PartialElement<HTMLModElement>, keyof ViEvent> ;
type ViHTMLModElement = ViElement & { el: HTMLModElement };

type ViHTMLDetailsElementPart = ViItemPart | Omit<PartialElement<HTMLDetailsElement>, keyof ViEvent> ;
type ViHTMLDetailsElement = ViElement & { el: HTMLDetailsElement };

type ViHTMLDialogElementPart = ViItemPart | Omit<PartialElement<HTMLDialogElement>, keyof ViEvent> ;
type ViHTMLDialogElement = ViElement & { el: HTMLDialogElement };

type ViHTMLDivElementPart = ViItemPart | Omit<PartialElement<HTMLDivElement>, keyof ViEvent> ;
type ViHTMLDivElement = ViElement & { el: HTMLDivElement };

type ViHTMLDListElementPart = ViItemPart | Omit<PartialElement<HTMLDListElement>, keyof ViEvent> ;
type ViHTMLDListElement = ViElement & { el: HTMLDListElement };

type ViHTMLEmbedElementPart = ViItemPart | Omit<PartialElement<HTMLEmbedElement>, keyof ViEvent> ;
type ViHTMLEmbedElement = ViElement & { el: HTMLEmbedElement };

type ViHTMLFieldSetElementPart = ViItemPart | Omit<PartialElement<HTMLFieldSetElement>, keyof ViEvent> ;
type ViHTMLFieldSetElement = ViElement & { el: HTMLFieldSetElement };

type ViHTMLFormElementPart = ViItemPart | Omit<PartialElement<HTMLFormElement>, keyof ViEvent> ;
type ViHTMLFormElement = ViElement & { el: HTMLFormElement };

type ViHTMLHeadingElementPart = ViItemPart | Omit<PartialElement<HTMLHeadingElement>, keyof ViEvent> ;
type ViHTMLHeadingElement = ViElement & { el: HTMLHeadingElement };

type ViHTMLHeadElementPart = ViItemPart | Omit<PartialElement<HTMLHeadElement>, keyof ViEvent> ;
type ViHTMLHeadElement = ViElement & { el: HTMLHeadElement };

type ViHTMLHRElementPart = ViItemPart | Omit<PartialElement<HTMLHRElement>, keyof ViEvent> ;
type ViHTMLHRElement = ViElement & { el: HTMLHRElement };

type ViHTMLHtmlElementPart = ViItemPart | Omit<PartialElement<HTMLHtmlElement>, keyof ViEvent> ;
type ViHTMLHtmlElement = ViElement & { el: HTMLHtmlElement };

type ViHTMLIFrameElementPart = ViItemPart | Omit<PartialElement<HTMLIFrameElement>, keyof ViEvent> ;
type ViHTMLIFrameElement = ViElement & { el: HTMLIFrameElement };

type ViHTMLImageElementPart = ViItemPart | Omit<PartialElement<HTMLImageElement>, keyof ViEvent> ;
type ViHTMLImageElement = ViElement & { el: HTMLImageElement };

type ViHTMLInputElementPart = ViItemPart | Omit<PartialElement<HTMLInputElement>, keyof ViEvent> ;
type ViHTMLInputElement = ViElement & { el: HTMLInputElement };

type ViHTMLLabelElementPart = ViItemPart | Omit<PartialElement<HTMLLabelElement>, keyof ViEvent> ;
type ViHTMLLabelElement = ViElement & { el: HTMLLabelElement };

type ViHTMLLegendElementPart = ViItemPart | Omit<PartialElement<HTMLLegendElement>, keyof ViEvent> ;
type ViHTMLLegendElement = ViElement & { el: HTMLLegendElement };

type ViHTMLLIElementPart = ViItemPart | Omit<PartialElement<HTMLLIElement>, keyof ViEvent> ;
type ViHTMLLIElement = ViElement & { el: HTMLLIElement };

type ViHTMLLinkElementPart = ViItemPart | Omit<PartialElement<HTMLLinkElement>, keyof ViEvent> ;
type ViHTMLLinkElement = ViElement & { el: HTMLLinkElement };

type ViHTMLMapElementPart = ViItemPart | Omit<PartialElement<HTMLMapElement>, keyof ViEvent> ;
type ViHTMLMapElement = ViElement & { el: HTMLMapElement };

type ViHTMLMenuElementPart = ViItemPart | Omit<PartialElement<HTMLMenuElement>, keyof ViEvent> ;
type ViHTMLMenuElement = ViElement & { el: HTMLMenuElement };

type ViHTMLMetaElementPart = ViItemPart | Omit<PartialElement<HTMLMetaElement>, keyof ViEvent> ;
type ViHTMLMetaElement = ViElement & { el: HTMLMetaElement };

type ViHTMLMeterElementPart = ViItemPart | Omit<PartialElement<HTMLMeterElement>, keyof ViEvent> ;
type ViHTMLMeterElement = ViElement & { el: HTMLMeterElement };

type ViHTMLObjectElementPart = ViItemPart | Omit<PartialElement<HTMLObjectElement>, keyof ViEvent> ;
type ViHTMLObjectElement = ViElement & { el: HTMLObjectElement };

type ViHTMLOListElementPart = ViItemPart | Omit<PartialElement<HTMLOListElement>, keyof ViEvent> ;
type ViHTMLOListElement = ViElement & { el: HTMLOListElement };

type ViHTMLOptGroupElementPart = ViItemPart | Omit<PartialElement<HTMLOptGroupElement>, keyof ViEvent> ;
type ViHTMLOptGroupElement = ViElement & { el: HTMLOptGroupElement };

type ViHTMLOptionElementPart = ViItemPart | Omit<PartialElement<HTMLOptionElement>, keyof ViEvent> ;
type ViHTMLOptionElement = ViElement & { el: HTMLOptionElement };

type ViHTMLOutputElementPart = ViItemPart | Omit<PartialElement<HTMLOutputElement>, keyof ViEvent> ;
type ViHTMLOutputElement = ViElement & { el: HTMLOutputElement };

type ViHTMLParagraphElementPart = ViItemPart | Omit<PartialElement<HTMLParagraphElement>, keyof ViEvent> ;
type ViHTMLParagraphElement = ViElement & { el: HTMLParagraphElement };

type ViHTMLParamElementPart = ViItemPart | Omit<PartialElement<HTMLParamElement>, keyof ViEvent> ;
type ViHTMLParamElement = ViElement & { el: HTMLParamElement };

type ViHTMLPictureElementPart = ViItemPart | Omit<PartialElement<HTMLPictureElement>, keyof ViEvent> ;
type ViHTMLPictureElement = ViElement & { el: HTMLPictureElement };

type ViHTMLPreElementPart = ViItemPart | Omit<PartialElement<HTMLPreElement>, keyof ViEvent> ;
type ViHTMLPreElement = ViElement & { el: HTMLPreElement };

type ViHTMLProgressElementPart = ViItemPart | Omit<PartialElement<HTMLProgressElement>, keyof ViEvent> ;
type ViHTMLProgressElement = ViElement & { el: HTMLProgressElement };

type ViHTMLScriptElementPart = ViItemPart | Omit<PartialElement<HTMLScriptElement>, keyof ViEvent> ;
type ViHTMLScriptElement = ViElement & { el: HTMLScriptElement };

type ViHTMLSelectElementPart = ViItemPart | Omit<PartialElement<HTMLSelectElement>, keyof ViEvent> ;
type ViHTMLSelectElement = ViElement & { el: HTMLSelectElement };

type ViHTMLSlotElementPart = ViItemPart | Omit<PartialElement<HTMLSlotElement>, keyof ViEvent> ;
type ViHTMLSlotElement = ViElement & { el: HTMLSlotElement };

type ViHTMLSourceElementPart = ViItemPart | Omit<PartialElement<HTMLSourceElement>, keyof ViEvent> ;
type ViHTMLSourceElement = ViElement & { el: HTMLSourceElement };

type ViHTMLSpanElementPart = ViItemPart | Omit<PartialElement<HTMLSpanElement>, keyof ViEvent> ;
type ViHTMLSpanElement = ViElement & { el: HTMLSpanElement };

type ViHTMLStyleElementPart = ViItemPart | Omit<PartialElement<HTMLStyleElement>, keyof ViEvent> ;
type ViHTMLStyleElement = ViElement & { el: HTMLStyleElement };

type ViHTMLTableElementPart = ViItemPart | Omit<PartialElement<HTMLTableElement>, keyof ViEvent> ;
type ViHTMLTableElement = ViElement & { el: HTMLTableElement };

type ViHTMLTableSectionElementPart = ViItemPart | Omit<PartialElement<HTMLTableSectionElement>, keyof ViEvent> ;
type ViHTMLTableSectionElement = ViElement & { el: HTMLTableSectionElement };

type ViHTMLTableCellElementPart = ViItemPart | Omit<PartialElement<HTMLTableCellElement>, keyof ViEvent> ;
type ViHTMLTableCellElement = ViElement & { el: HTMLTableCellElement };

type ViHTMLTemplateElementPart = ViItemPart | Omit<PartialElement<HTMLTemplateElement>, keyof ViEvent> ;
type ViHTMLTemplateElement = ViElement & { el: HTMLTemplateElement };

type ViHTMLTextAreaElementPart = ViItemPart | Omit<PartialElement<HTMLTextAreaElement>, keyof ViEvent> ;
type ViHTMLTextAreaElement = ViElement & { el: HTMLTextAreaElement };

type ViHTMLTimeElementPart = ViItemPart | Omit<PartialElement<HTMLTimeElement>, keyof ViEvent> ;
type ViHTMLTimeElement = ViElement & { el: HTMLTimeElement };

type ViHTMLTitleElementPart = ViItemPart | Omit<PartialElement<HTMLTitleElement>, keyof ViEvent> ;
type ViHTMLTitleElement = ViElement & { el: HTMLTitleElement };

type ViHTMLTableRowElementPart = ViItemPart | Omit<PartialElement<HTMLTableRowElement>, keyof ViEvent> ;
type ViHTMLTableRowElement = ViElement & { el: HTMLTableRowElement };

type ViHTMLTrackElementPart = ViItemPart | Omit<PartialElement<HTMLTrackElement>, keyof ViEvent> ;
type ViHTMLTrackElement = ViElement & { el: HTMLTrackElement };

type ViHTMLUListElementPart = ViItemPart | Omit<PartialElement<HTMLUListElement>, keyof ViEvent> ;
type ViHTMLUListElement = ViElement & { el: HTMLUListElement };

type ViHTMLVideoElementPart = ViItemPart | Omit<PartialElement<HTMLVideoElement>, keyof ViEvent> ;
type ViHTMLVideoElement = ViElement & { el: HTMLVideoElement };

export function a(...items:ViHTMLAnchorElementPart[]): ViHTMLAnchorElement {
  return vn('a', items) as unknown as ViHTMLAnchorElement 
}


export function abbr(...items:ViHTMLElementPart[]): ViHTMLElement {
  return vn('abbr', items) as unknown as ViHTMLElement 
}


export function address(...items:ViHTMLElementPart[]): ViHTMLElement {
  return vn('address', items) as unknown as ViHTMLElement 
}


export function area(...items:ViHTMLAreaElementPart[]): ViHTMLAreaElement {
  return vn('area', items) as unknown as ViHTMLAreaElement 
}


export function article(...items:ViHTMLElementPart[]): ViHTMLElement {
  return vn('article', items) as unknown as ViHTMLElement 
}


export function aside(...items:ViHTMLElementPart[]): ViHTMLElement {
  return vn('aside', items) as unknown as ViHTMLElement 
}


export function audio(...items:ViHTMLAudioElementPart[]): ViHTMLAudioElement {
  return vn('audio', items) as unknown as ViHTMLAudioElement 
}


export function b(...items:ViHTMLElementPart[]): ViHTMLElement {
  return vn('b', items) as unknown as ViHTMLElement 
}


export function base(...items:ViHTMLBaseElementPart[]): ViHTMLBaseElement {
  return vn('base', items) as unknown as ViHTMLBaseElement 
}


export function bdi(...items:ViHTMLElementPart[]): ViHTMLElement {
  return vn('bdi', items) as unknown as ViHTMLElement 
}


export function bdo(...items:ViHTMLElementPart[]): ViHTMLElement {
  return vn('bdo', items) as unknown as ViHTMLElement 
}


export function blockquote(...items:ViHTMLQuoteElementPart[]): ViHTMLQuoteElement {
  return vn('blockquote', items) as unknown as ViHTMLQuoteElement 
}


export function body(...items:ViHTMLBodyElementPart[]): ViHTMLBodyElement {
  return vn('body', items) as unknown as ViHTMLBodyElement 
}


export function br(...items:ViHTMLBRElementPart[]): ViHTMLBRElement {
  return vn('br', items) as unknown as ViHTMLBRElement 
}


export function button(...items:ViHTMLButtonElementPart[]): ViHTMLButtonElement {
  return vn('button', items) as unknown as ViHTMLButtonElement 
}


export function canvas(...items:ViHTMLCanvasElementPart[]): ViHTMLCanvasElement {
  return vn('canvas', items) as unknown as ViHTMLCanvasElement 
}


export function caption(...items:ViHTMLTableCaptionElementPart[]): ViHTMLTableCaptionElement {
  return vn('caption', items) as unknown as ViHTMLTableCaptionElement 
}


export function cite(...items:ViHTMLElementPart[]): ViHTMLElement {
  return vn('cite', items) as unknown as ViHTMLElement 
}


export function code(...items:ViHTMLElementPart[]): ViHTMLElement {
  return vn('code', items) as unknown as ViHTMLElement 
}


export function col(...items:ViHTMLTableColElementPart[]): ViHTMLTableColElement {
  return vn('col', items) as unknown as ViHTMLTableColElement 
}


export function colgroup(...items:ViHTMLTableColElementPart[]): ViHTMLTableColElement {
  return vn('colgroup', items) as unknown as ViHTMLTableColElement 
}


export function data(...items:ViHTMLDataElementPart[]): ViHTMLDataElement {
  return vn('data', items) as unknown as ViHTMLDataElement 
}


export function datalist(...items:ViHTMLDataListElementPart[]): ViHTMLDataListElement {
  return vn('datalist', items) as unknown as ViHTMLDataListElement 
}


export function dd(...items:ViHTMLElementPart[]): ViHTMLElement {
  return vn('dd', items) as unknown as ViHTMLElement 
}


export function del(...items:ViHTMLModElementPart[]): ViHTMLModElement {
  return vn('del', items) as unknown as ViHTMLModElement 
}


export function details(...items:ViHTMLDetailsElementPart[]): ViHTMLDetailsElement {
  return vn('details', items) as unknown as ViHTMLDetailsElement 
}


export function dfn(...items:ViHTMLElementPart[]): ViHTMLElement {
  return vn('dfn', items) as unknown as ViHTMLElement 
}


export function dialog(...items:ViHTMLDialogElementPart[]): ViHTMLDialogElement {
  return vn('dialog', items) as unknown as ViHTMLDialogElement 
}


export function div(...items:ViHTMLDivElementPart[]): ViHTMLDivElement {
  return vn('div', items) as unknown as ViHTMLDivElement 
}


export function dl(...items:ViHTMLDListElementPart[]): ViHTMLDListElement {
  return vn('dl', items) as unknown as ViHTMLDListElement 
}


export function dt(...items:ViHTMLElementPart[]): ViHTMLElement {
  return vn('dt', items) as unknown as ViHTMLElement 
}


export function em(...items:ViHTMLElementPart[]): ViHTMLElement {
  return vn('em', items) as unknown as ViHTMLElement 
}


export function embed(...items:ViHTMLEmbedElementPart[]): ViHTMLEmbedElement {
  return vn('embed', items) as unknown as ViHTMLEmbedElement 
}


export function fieldset(...items:ViHTMLFieldSetElementPart[]): ViHTMLFieldSetElement {
  return vn('fieldset', items) as unknown as ViHTMLFieldSetElement 
}


export function figcaption(...items:ViHTMLElementPart[]): ViHTMLElement {
  return vn('figcaption', items) as unknown as ViHTMLElement 
}


export function figure(...items:ViHTMLElementPart[]): ViHTMLElement {
  return vn('figure', items) as unknown as ViHTMLElement 
}


export function footer(...items:ViHTMLElementPart[]): ViHTMLElement {
  return vn('footer', items) as unknown as ViHTMLElement 
}


export function form(...items:ViHTMLFormElementPart[]): ViHTMLFormElement {
  return vn('form', items) as unknown as ViHTMLFormElement 
}


export function h1(...items:ViHTMLHeadingElementPart[]): ViHTMLHeadingElement {
  return vn('h1', items) as unknown as ViHTMLHeadingElement 
}


export function h2(...items:ViHTMLHeadingElementPart[]): ViHTMLHeadingElement {
  return vn('h2', items) as unknown as ViHTMLHeadingElement 
}


export function h3(...items:ViHTMLHeadingElementPart[]): ViHTMLHeadingElement {
  return vn('h3', items) as unknown as ViHTMLHeadingElement 
}


export function h4(...items:ViHTMLHeadingElementPart[]): ViHTMLHeadingElement {
  return vn('h4', items) as unknown as ViHTMLHeadingElement 
}


export function h5(...items:ViHTMLHeadingElementPart[]): ViHTMLHeadingElement {
  return vn('h5', items) as unknown as ViHTMLHeadingElement 
}


export function h6(...items:ViHTMLHeadingElementPart[]): ViHTMLHeadingElement {
  return vn('h6', items) as unknown as ViHTMLHeadingElement 
}


export function head(...items:ViHTMLHeadElementPart[]): ViHTMLHeadElement {
  return vn('head', items) as unknown as ViHTMLHeadElement 
}


export function header(...items:ViHTMLElementPart[]): ViHTMLElement {
  return vn('header', items) as unknown as ViHTMLElement 
}


export function hgroup(...items:ViHTMLElementPart[]): ViHTMLElement {
  return vn('hgroup', items) as unknown as ViHTMLElement 
}


export function hr(...items:ViHTMLHRElementPart[]): ViHTMLHRElement {
  return vn('hr', items) as unknown as ViHTMLHRElement 
}


export function html(...items:ViHTMLHtmlElementPart[]): ViHTMLHtmlElement {
  return vn('html', items) as unknown as ViHTMLHtmlElement 
}


export function i(...items:ViHTMLElementPart[]): ViHTMLElement {
  return vn('i', items) as unknown as ViHTMLElement 
}


export function iframe(...items:ViHTMLIFrameElementPart[]): ViHTMLIFrameElement {
  return vn('iframe', items) as unknown as ViHTMLIFrameElement 
}


export function img(...items:ViHTMLImageElementPart[]): ViHTMLImageElement {
  return vn('img', items) as unknown as ViHTMLImageElement 
}


export function input(...items:ViHTMLInputElementPart[]): ViHTMLInputElement {
  return vn('input', items) as unknown as ViHTMLInputElement 
}


export function ins(...items:ViHTMLModElementPart[]): ViHTMLModElement {
  return vn('ins', items) as unknown as ViHTMLModElement 
}


export function kbd(...items:ViHTMLElementPart[]): ViHTMLElement {
  return vn('kbd', items) as unknown as ViHTMLElement 
}


export function label(...items:ViHTMLLabelElementPart[]): ViHTMLLabelElement {
  return vn('label', items) as unknown as ViHTMLLabelElement 
}


export function legend(...items:ViHTMLLegendElementPart[]): ViHTMLLegendElement {
  return vn('legend', items) as unknown as ViHTMLLegendElement 
}


export function li(...items:ViHTMLLIElementPart[]): ViHTMLLIElement {
  return vn('li', items) as unknown as ViHTMLLIElement 
}


export function link(...items:ViHTMLLinkElementPart[]): ViHTMLLinkElement {
  return vn('link', items) as unknown as ViHTMLLinkElement 
}


export function main(...items:ViHTMLElementPart[]): ViHTMLElement {
  return vn('main', items) as unknown as ViHTMLElement 
}


export function map(...items:ViHTMLMapElementPart[]): ViHTMLMapElement {
  return vn('map', items) as unknown as ViHTMLMapElement 
}


export function mark(...items:ViHTMLElementPart[]): ViHTMLElement {
  return vn('mark', items) as unknown as ViHTMLElement 
}


export function menu(...items:ViHTMLMenuElementPart[]): ViHTMLMenuElement {
  return vn('menu', items) as unknown as ViHTMLMenuElement 
}


export function meta(...items:ViHTMLMetaElementPart[]): ViHTMLMetaElement {
  return vn('meta', items) as unknown as ViHTMLMetaElement 
}


export function meter(...items:ViHTMLMeterElementPart[]): ViHTMLMeterElement {
  return vn('meter', items) as unknown as ViHTMLMeterElement 
}


export function nav(...items:ViHTMLElementPart[]): ViHTMLElement {
  return vn('nav', items) as unknown as ViHTMLElement 
}


export function noscript(...items:ViHTMLElementPart[]): ViHTMLElement {
  return vn('noscript', items) as unknown as ViHTMLElement 
}


export function object(...items:ViHTMLObjectElementPart[]): ViHTMLObjectElement {
  return vn('object', items) as unknown as ViHTMLObjectElement 
}


export function ol(...items:ViHTMLOListElementPart[]): ViHTMLOListElement {
  return vn('ol', items) as unknown as ViHTMLOListElement 
}


export function optgroup(...items:ViHTMLOptGroupElementPart[]): ViHTMLOptGroupElement {
  return vn('optgroup', items) as unknown as ViHTMLOptGroupElement 
}


export function option(...items:ViHTMLOptionElementPart[]): ViHTMLOptionElement {
  return vn('option', items) as unknown as ViHTMLOptionElement 
}


export function output(...items:ViHTMLOutputElementPart[]): ViHTMLOutputElement {
  return vn('output', items) as unknown as ViHTMLOutputElement 
}


export function p(...items:ViHTMLParagraphElementPart[]): ViHTMLParagraphElement {
  return vn('p', items) as unknown as ViHTMLParagraphElement 
}


export function param(...items:ViHTMLParamElementPart[]): ViHTMLParamElement {
  return vn('param', items) as unknown as ViHTMLParamElement 
}


export function picture(...items:ViHTMLPictureElementPart[]): ViHTMLPictureElement {
  return vn('picture', items) as unknown as ViHTMLPictureElement 
}


export function pre(...items:ViHTMLPreElementPart[]): ViHTMLPreElement {
  return vn('pre', items) as unknown as ViHTMLPreElement 
}


export function progress(...items:ViHTMLProgressElementPart[]): ViHTMLProgressElement {
  return vn('progress', items) as unknown as ViHTMLProgressElement 
}


export function q(...items:ViHTMLQuoteElementPart[]): ViHTMLQuoteElement {
  return vn('q', items) as unknown as ViHTMLQuoteElement 
}


export function rp(...items:ViHTMLElementPart[]): ViHTMLElement {
  return vn('rp', items) as unknown as ViHTMLElement 
}


export function rt(...items:ViHTMLElementPart[]): ViHTMLElement {
  return vn('rt', items) as unknown as ViHTMLElement 
}


export function ruby(...items:ViHTMLElementPart[]): ViHTMLElement {
  return vn('ruby', items) as unknown as ViHTMLElement 
}


export function s(...items:ViHTMLElementPart[]): ViHTMLElement {
  return vn('s', items) as unknown as ViHTMLElement 
}


export function samp(...items:ViHTMLElementPart[]): ViHTMLElement {
  return vn('samp', items) as unknown as ViHTMLElement 
}


export function script(...items:ViHTMLScriptElementPart[]): ViHTMLScriptElement {
  return vn('script', items) as unknown as ViHTMLScriptElement 
}


export function section(...items:ViHTMLElementPart[]): ViHTMLElement {
  return vn('section', items) as unknown as ViHTMLElement 
}


export function select(...items:ViHTMLSelectElementPart[]): ViHTMLSelectElement {
  return vn('select', items) as unknown as ViHTMLSelectElement 
}


export function slot(...items:ViHTMLSlotElementPart[]): ViHTMLSlotElement {
  return vn('slot', items) as unknown as ViHTMLSlotElement 
}


export function small(...items:ViHTMLElementPart[]): ViHTMLElement {
  return vn('small', items) as unknown as ViHTMLElement 
}


export function source(...items:ViHTMLSourceElementPart[]): ViHTMLSourceElement {
  return vn('source', items) as unknown as ViHTMLSourceElement 
}


export function span(...items:ViHTMLSpanElementPart[]): ViHTMLSpanElement {
  return vn('span', items) as unknown as ViHTMLSpanElement 
}


export function strong(...items:ViHTMLElementPart[]): ViHTMLElement {
  return vn('strong', items) as unknown as ViHTMLElement 
}


export function style(...items:ViHTMLStyleElementPart[]): ViHTMLStyleElement {
  return vn('style', items) as unknown as ViHTMLStyleElement 
}


export function sub(...items:ViHTMLElementPart[]): ViHTMLElement {
  return vn('sub', items) as unknown as ViHTMLElement 
}


export function summary(...items:ViHTMLElementPart[]): ViHTMLElement {
  return vn('summary', items) as unknown as ViHTMLElement 
}


export function sup(...items:ViHTMLElementPart[]): ViHTMLElement {
  return vn('sup', items) as unknown as ViHTMLElement 
}


export function table(...items:ViHTMLTableElementPart[]): ViHTMLTableElement {
  return vn('table', items) as unknown as ViHTMLTableElement 
}


export function tbody(...items:ViHTMLTableSectionElementPart[]): ViHTMLTableSectionElement {
  return vn('tbody', items) as unknown as ViHTMLTableSectionElement 
}


export function td(...items:ViHTMLTableCellElementPart[]): ViHTMLTableCellElement {
  return vn('td', items) as unknown as ViHTMLTableCellElement 
}


export function template(...items:ViHTMLTemplateElementPart[]): ViHTMLTemplateElement {
  return vn('template', items) as unknown as ViHTMLTemplateElement 
}


export function textarea(...items:ViHTMLTextAreaElementPart[]): ViHTMLTextAreaElement {
  return vn('textarea', items) as unknown as ViHTMLTextAreaElement 
}


export function tfoot(...items:ViHTMLTableSectionElementPart[]): ViHTMLTableSectionElement {
  return vn('tfoot', items) as unknown as ViHTMLTableSectionElement 
}


export function th(...items:ViHTMLTableCellElementPart[]): ViHTMLTableCellElement {
  return vn('th', items) as unknown as ViHTMLTableCellElement 
}


export function thead(...items:ViHTMLTableSectionElementPart[]): ViHTMLTableSectionElement {
  return vn('thead', items) as unknown as ViHTMLTableSectionElement 
}


export function time(...items:ViHTMLTimeElementPart[]): ViHTMLTimeElement {
  return vn('time', items) as unknown as ViHTMLTimeElement 
}


export function title(...items:ViHTMLTitleElementPart[]): ViHTMLTitleElement {
  return vn('title', items) as unknown as ViHTMLTitleElement 
}


export function tr(...items:ViHTMLTableRowElementPart[]): ViHTMLTableRowElement {
  return vn('tr', items) as unknown as ViHTMLTableRowElement 
}


export function track(...items:ViHTMLTrackElementPart[]): ViHTMLTrackElement {
  return vn('track', items) as unknown as ViHTMLTrackElement 
}


export function u(...items:ViHTMLElementPart[]): ViHTMLElement {
  return vn('u', items) as unknown as ViHTMLElement 
}


export function ul(...items:ViHTMLUListElementPart[]): ViHTMLUListElement {
  return vn('ul', items) as unknown as ViHTMLUListElement 
}


export function video(...items:ViHTMLVideoElementPart[]): ViHTMLVideoElement {
  return vn('video', items) as unknown as ViHTMLVideoElement 
}


export function wbr(...items:ViHTMLElementPart[]): ViHTMLElement {
  return vn('wbr', items) as unknown as ViHTMLElement 
}

