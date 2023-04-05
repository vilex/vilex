import { WebClientNode } from "./WebClientNode"

type OnMouseEventType = (evt: MouseEvent) => void

export type ElementEventParams = Partial<ElementEvent>

export class ElementEvent<T extends ElementEventParams = ElementEventParams> extends WebClientNode<T>{
    constructor(data: T) { super(data) }
    set onClick(callback: OnMouseEventType) { /* space */ }
    set onMouseDown(callback: OnMouseEventType) { /* space */ }
    set onMouseUp(callback: OnMouseEventType) { /* space */ }
    set onMouseMove(callback: OnMouseEventType) { /* space */ }
}

export const ElementEventNameList = [
    'Click',
    'MouseUp',
    'MouseDown',
    'MouseMove',
]