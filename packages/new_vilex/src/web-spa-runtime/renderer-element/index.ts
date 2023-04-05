import { VilexElement } from "../../custom-web-components"
import { TextElement } from "../../web-native-elements"
import { BaseElement } from "../../web-native-elements/base/BseElement"


/**
 * 将一个虚拟节点转化为真实的dom
 * @param baseElement 
 * @returns 
 */
export function RenderElement(baseElement: BaseElement | TextElement | VilexElement) {
    if (baseElement) {
        if (baseElement instanceof BaseElement) {
            const htmlElement = baseElement.render() as HTMLElement
            baseElement.el = htmlElement
            baseElement.forceUpdate()
            baseElement.children.forEach(item => {
                const childNode = RenderElement(item)
                if (childNode instanceof BaseElement || childNode instanceof VilexElement) {
                    baseElement.el?.appendChild(childNode.el as HTMLElement)
                } else {
                    baseElement.el?.appendChild(childNode)
                }
            })
            return htmlElement
        }
        else
            if (baseElement instanceof TextElement) {
                const textNode = baseElement.render()
                baseElement.el = textNode
                return textNode
            }
        else
            if (baseElement instanceof VilexElement) {
                const renderResult = baseElement.render()
                if (renderResult) {
                    
                    const myNode = RenderElement(renderResult)

                    baseElement.el = new baseElement.ComponentConstructor(myNode)

                    return baseElement
                }
            }
        else {
            return baseElement
        }
    }
}

