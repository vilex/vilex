import { WebNativeElement } from './../../base/WebNativeElement';
import { WebNative } from "../..";
import { Styled } from "../../../Styled";
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
            classList: [ css_row ],
            children: this.data.children
        })
    }
}

const rowStyled = new Styled(VilexRow.name)
const css = (s: TemplateStringsArray, ...a: any[]) => rowStyled.css(s, ...a)

const css_row = css`
    display: flex;
    flex-direction: row;
`


