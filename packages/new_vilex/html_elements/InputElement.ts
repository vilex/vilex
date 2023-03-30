import { BaseElement } from "./_base/BseElement";

export class InputElement extends BaseElement {
    
    placeholder = ''

    value = ''

    constructor(data: Partial<InputElement>) {
        super()
        super.initial(data)
    }

    render() {
        return document.createElement('input')
    }

    forceUpdate(): void {
        const inputElement = this.el as HTMLInputElement
        if (inputElement) {
            super.forceUpdate()
            if (typeof this.placeholder === 'string') {
                inputElement.placeholder = this.placeholder
            }

            if (typeof this.value === 'string') {
                inputElement.value = this.value
            }
        }
    }

}