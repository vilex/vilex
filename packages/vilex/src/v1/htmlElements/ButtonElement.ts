import { BaseHtmlElement } from './BaseHtmlElement';

export class ButtonElement extends BaseHtmlElement {
    disabled = false
    constructor(data: Partial<ButtonElement>) {
        super(data)
    }

    render() {
        const button = document.createElement('button')
        button.textContent = this.textContent
        return button
    }
}