import { Div } from "../../../packages/new_vilex/src";
import { css } from "../../../packages/new_vilex/src/styled";
import { CustomElement } from "../../../packages/new_vilex/src/web-native-elements/base/CustomElement";
import { WebNativeElement } from "../../../packages/new_vilex/src/web-native-elements/base/WebNativeElement";
import { withStyledComponent } from "../../../packages/new_vilex/src/withStyledComponent";
import { CheckerBoard } from "./components/CheckerBoard";
import { MainView } from "./components/MainView";
import { UiEditorElement } from "./components/UiEditorElement";
import { ImageItemData, ItemData, TextItemData } from "./UiEditorCreator";


type UiEditorParamsType<T extends ItemData = ItemData> = {
    dataList: T[]
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
                ...this.data.dataList.map((dataItem) => {
                    if (dataItem.elementType === 'text') {
                        const _data = dataItem as TextItemData
                        return new UiEditorElement({
                            data: _data,
                            children: [
                                new WebNativeElement({
                                    tagName: 'span',
                                    textContent: _data.textContent,
                                    style: {
                                        fontSize: _data.fontSize,
                                        color: _data.fontColor,
                                        fontFamily: _data.fontFamily,
                                        fontWeight: _data.fontBold,
                                        textDecoration: _data.fontItalc
                                    }
                                })
                            ]
                        })
                    }
                    else if (dataItem.elementType === 'img') {
                        const _data = dataItem as ImageItemData
                        return new UiEditorElement({
                            data: _data,
                            children: [
                                new WebNativeElement({
                                    tagName: 'img',
                                    src: _data.src
                                })
                            ]
                        })
                    }
                })
            ]
        })
    }
}

export * from './UiEditorCreator'


