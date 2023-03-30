import { BaseElement } from "./_base/BseElement";

export class TextElement {

    textContent = ''
    el: Text | null = null

    constructor(textContent: string) {
        this.textContent = textContent
    }

    render() {
        return document.createTextNode(this.textContent)
    }

    forceUpdate() { }
}