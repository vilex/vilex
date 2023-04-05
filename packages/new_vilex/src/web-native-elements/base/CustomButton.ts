import { Styled } from "../../Styled"
import { NativeButton } from "../element-list"
import { CustomElement } from "./CustomElement"


export class CustomButton extends CustomElement {

  render() {
    return new NativeButton({
      textContent: '自定义的按钮',
      classList: ['web_component_button_padding'],
      style: {
        color: 'red'
      },
      onClick() {
        console.log(document)
      }
    })
  }
}

export const css = new Styled(CustomButton.name)