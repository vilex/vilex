import { NativeButton } from "../element-list"
import { CustomElement } from "./CustomElement"

export class CustomButton extends CustomElement {
  render() {
    return new NativeButton({
      textContent: '自定义的按钮',
      classList: [],
      hidden: false,
      style: {
        color: 'red'
      },
      onClick() {
        console.log(document)
      }
    })
  }
}
