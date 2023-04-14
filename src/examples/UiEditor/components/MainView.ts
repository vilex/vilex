import { css } from "../../../../packages/new_vilex/src/styled"
import { WebNativeElement } from "../../../../packages/new_vilex/src/web-native-elements/base/WebNativeElement"
import { withStyledComponent } from "../../../../packages/new_vilex/src/withStyledComponent"
import { CheckerBoard } from "./CheckerBoard"
import { UiEditorElement } from "./UiEditorElement"

const Container = withStyledComponent('div', css`
    width: 500px;
    height: 500px;
    position: relative;
`)

const Contents = withStyledComponent('div', css`
    width: 100%;
    height: 100%;
    position: absolute;
`)


type MainViewParams = {
    children: UiEditorElement[]
}

export const MainView = (data: MainViewParams) => {
    return Container({ 
        onMouseDown(e) {
            console.log(e)
        },
        children: [
            CheckerBoard(),
            Contents({
                children: data.children
            })
        ]
    })
}