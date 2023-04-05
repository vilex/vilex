// import { ButtonElement, DivElement, InputElement, MyButton, ref, store } from '../packages/new_vilex/src'
// import { RenderElement } from '../packages/new_vilex/src/web-spa-runtime/renderer-element'
import './style/web_component.css'

import { App, WebNative } from "../packages/new_vilex/src"
import { VarBind } from "../packages/new_vilex/src/VarBind"
import { CustomButton } from "../packages/new_vilex/src/web-native-elements/base/CustomButton"


const firstButton = new VarBind()
console.log(firstButton)

const button = new WebNative.NativeButton({
  textContent: '原生的按钮',
  classList: ['web_component_button_padding'],
  onClick() {
    console.log('click button')
  },
  children: [
    new CustomButton(),
  ]
})

new App('#app').render(button)
