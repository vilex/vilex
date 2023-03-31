import { StringOrNumber } from "../../common-types";
import { RefImpl } from "../../web-spa-runtime/reactivity/ref/RefImpl";
import { BaseElement } from "../base/BseElement";

export class InputElement extends BaseElement {
    
    placeholder = ''

    value: StringOrNumber = ''

    el: HTMLInputElement | undefined

    constructor(data: Partial<InputElement>) {
        super()

        this.onchange = this._onChange.bind(this)
        this.oninput = this._onInput.bind(this)

        super.addRenderKey('value', 'value')
        super.addRenderKey('placeholder', 'placeholder')
        super.initial(data)


    }

    render() {
        return document.createElement('input')
    }

    private _onChange() {
        this._receiveElementValueChange()
    }

    private _onInput() {
       this._receiveElementValueChange()
    }

    private _receiveElementValueChange() {
        if (this.el) {
            if (this.value instanceof RefImpl) {
                this.value.value = this.el.value
            } else {
                this.value = this.el.value
            }
        }
    }

}