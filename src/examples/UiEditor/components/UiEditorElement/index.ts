import { css } from "../../../../../packages/new_vilex/src/styled";
import { CustomElement } from "../../../../../packages/new_vilex/src/web-native-elements/base/CustomElement";
import { WebNativeElement } from "../../../../../packages/new_vilex/src/web-native-elements/base/WebNativeElement";
import { withStyledComponent } from "../../../../../packages/new_vilex/src/withStyledComponent";
import { ItemData } from "../../UiEditorCreator";


type UiEditorElementParamsType<T extends ItemData = ItemData> = {
    data: T
    children: WebNativeElement[],
    upperChildren: WebNativeElement[]
}
export class UiEditorElement extends CustomElement {
    data: Partial<UiEditorElementParamsType>
    constructor(data: Partial<UiEditorElementParamsType>) {
        super()
        this.data = data
    }
    render() {
        const { data: props } = this.data
        return new WebNativeElement({
            tagName: 'div',
            classList: [ styledElement ],
            style: {
                left: props.x,
                top: props.y,
                width: props.width,
                height: props.height
            },
            children: [
                new WebNativeElement({
                    classList: [ 'full-layer', 'disabled'],
                    children: this.data.children
                }),
                new WebNativeElement({
                    classList: [ 'full-layer', 'disabled' ],
                    children: this.data.upperChildren
                }),
                new WebNativeElement({
                    classList: [ 'outer', 'full-layer', 'disabled' ],
                    children: []
                })
            ]
        })
    }
}


const styledElement = css`
    user-select: none;
    position: absolute;
    .full-layer {
        position: absolute;
        inset: 0;
    }
    .disabled {
        pointer-events: none;
        & > * {
            pointer-events: none;
        }
    }
    .outer {
        border: 1px solid red;
    }

    
`