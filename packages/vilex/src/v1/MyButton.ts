import { VilexElement } from './VilexElement'
export class MyButton extends VilexElement {
  constructor(name: string) {
    super()
  }

  override get root() {
    const btn = document.createElement('button')
    return super.root
  }
}
