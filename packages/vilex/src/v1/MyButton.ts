import { ButtonElement } from './htmlElements/ButtonElement'
import { VilexElement } from './VilexElement'
export class MyButton extends VilexElement {
  textContent = ''
  constructor(data: Partial<MyButton>) {
    super(data)
  }

  render() {
    return new ButtonElement({
      textContent: this.textContent
    })
  }

  
}
