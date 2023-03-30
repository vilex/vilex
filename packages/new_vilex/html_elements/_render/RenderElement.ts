import { BaseElement } from "../_base/BseElement";

export function RenderElement(baseElement: BaseElement) {
    if (baseElement) {
        const htmlElement = baseElement.render() as HTMLElement
        baseElement.el = htmlElement
        
        baseElement.forceUpdate()
        return htmlElement
    }
}