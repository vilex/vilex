import { DivElement } from '../../web-native-elements/elements/DivElement';
import { ButtonElement } from '../../web-native-elements/elements/ButtonElement';
import { VilexElement } from '../../custom-web-components/VilexElement'

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



