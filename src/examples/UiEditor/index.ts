import { Div } from "../../../packages/new_vilex/src";
import { css } from "../../../packages/new_vilex/src/styled";
import { CustomElement } from "../../../packages/new_vilex/src/web-native-elements/base/CustomElement";
import { WebNativeElement } from "../../../packages/new_vilex/src/web-native-elements/base/WebNativeElement";
import { withStyledComponent } from "../../../packages/new_vilex/src/withStyledComponent";
import { CheckerBoard } from "./components/CheckerBoard";
import { MainView } from "./components/MainView";


type UiEditorParamsType = {
    dataList: any[]
}
export class UiEditor extends CustomElement {
    data: Partial<UiEditorParamsType>
    constructor(data: Partial<UiEditorParamsType>) {
        super()
        this.data = data
    }
    render () {
        return MainView({
            children: [
                ...this.data.dataList.map(() => {
                    return new WebNativeElement({
                        tagName: 'img',
                        src: 'https://fanyi-cdn.cdn.bcebos.com/webStatic/translation/asset/product-helper@2x.42313ebc.png'
                    })
                })
            ]
        })
    }
}

export * from './ItemData/ItemData'


