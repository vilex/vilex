import { VilexElement } from './VilexElement'
export class MyButton extends VilexElement {
  constructor(a: any) {
    super()
  }

  render() {
    const btn = document.createElement('button')
    btn.textContent = '你好'
    return btn
  }
}
