import { BaseElement } from "../base/BseElement";

export class ButtonElement extends BaseElement {
    constructor(data: Partial<ButtonElement>) {
        super()
        super.initial(data)
    }

    render() {
        return document.createElement('button')
    }
}