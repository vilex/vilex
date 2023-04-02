import { ButtonElement } from "../../src"
import { VilexElement } from "../../src/custom-web-components"


export class MyButton extends VilexElement {
  textContent = ''


  constructor(data: Partial<MyButton>) {
    super()
    super.initial(data)
  }

 

  render() {
    return new ButtonElement({
      textContent: '123',
      children: this.children,
      onClick() {
        console.log('sdffsdf')
      }
    })
  }

}

// export const  MyButton1 = (data) => new MyButton(data)



