import { Styled } from "../../Styled"
import { NativeButton } from "../element-list"
import { CustomElement } from "./CustomElement"

export class CustomButton extends CustomElement {
  render() {
    return new NativeButton({
      textContent: '自定义的按钮',
      classList: [b],
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

export const c = new Styled(CustomButton.name)

export const css = (s: TemplateStringsArray, ...args: any[]) => c.css(s, ...args)

const b = css`
  font-size: 24px;
`