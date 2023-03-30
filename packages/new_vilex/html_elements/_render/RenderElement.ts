import { TextElement } from './../TextElement'
import { BaseElement } from "../_base/BseElement";

export function RenderElement(baseElement: BaseElement | TextElement) {
    if (baseElement) {
        if (baseElement instanceof BaseElement) {
            const htmlElement = baseElement.render() as HTMLElement
            baseElement.el = htmlElement
            baseElement.forceUpdate()
            baseElement.forceUpdate()
            baseElement.children.forEach(item => {
                const childNode = RenderElement(item)
                childNode && baseElement.el?.appendChild(childNode)
            })
            return htmlElement
        }
        else
            if (baseElement instanceof TextElement) {
                const textNode = baseElement.render()
                baseElement.el = textNode
                return textNode
            }
    }
}