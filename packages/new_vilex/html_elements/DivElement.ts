import { BaseElement } from "./_base/BseElement"

export class DivElement extends BaseElement {
    constructor(data: Partial<DivElement>) {
        super()
        super.initial(data)
    }

    render() {
        return document.createElement('div')
    }
}