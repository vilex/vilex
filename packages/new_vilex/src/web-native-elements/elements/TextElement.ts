import { WebClientNode } from "../base/WebClientNode"

export class TextElement extends WebClientNode {

    element: Text
    constructor(textContent: string) {
        super({ textContent })
        this.element = null as unknown as Text
    }

    render() {
        return document.createTextNode(this.textContent)
    }

    forceUpdate() { /* space */ }
}