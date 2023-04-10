import { Button1 } from './Button1';
// import { ButtonElement, DivElement, InputElement, MyButton, ref, store } from '../packages/new_vilex/src'
// import { RenderElement } from '../packages/new_vilex/src/web-spa-runtime/renderer-element'
import './style/web_component.css'

import { App, Layout, NativeButton, WebNative } from "../packages/new_vilex/src"
import { VarBind } from "../packages/new_vilex/src/VarBind"
import { CustomButton } from "../packages/new_vilex/src/web-native-elements/base/CustomButton"
import { Styled } from '../packages/new_vilex/src/Styled'
import { WebNativeElement } from '../packages/new_vilex/src/web-native-elements/base/WebNativeElement';




/**
 * 卡片
 */
function Card() {
  return new Layout.Row({
    children: [
      new NativeButton({
        textContent: 'card button',
        children: [
          new Layout.Row({
            children: [
              new NativeButton({
                textContent: 'inner button'
              })
            ]
          }),
          new WebNativeElement({
            tagName: 'img',
            src: 'https://www.haorooms.com/logo/logo36X36.jpg',
            onLoad(e) {
              console.log(e)
            }
          }),
          new WebNativeElement({
            tagName: 'input',
            value: 'sdfsdfsdf',
            onInput(ss) {
              console.log(ss)
            }
          })
        ]
      })
    ]
  })
}

const firstButton = new VarBind()
console.log(firstButton)

const button = Button1({
  children: [
    new CustomButton(),
    new NativeButton({
      textContent: '你好吧',
      onClick() {
        console.log('sdfsdfsdf')
      }
    })
  ]
})

new App('#app').render(Card())
