import { WebNativeElement } from './../../base/WebNativeElement';
import { WebNative } from "../..";
import { CustomElement } from "../../base/CustomElement";



type RowArgsType = {
    children: WebNativeElement[]
}

export class VilexRow extends CustomElement {
    data: RowArgsType
    
    constructor(data: RowArgsType) {
        super()
        this.data = data
    }

    render() {
        return new WebNativeElement({
            tagName: 'div',
            classList: [ 'web_component_button_padding'],
            children: this.data.children
        })
    }
}




