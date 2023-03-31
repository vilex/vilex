import { DivElement } from '../packages/new_vilex/web-native-elements/DivElement';
import { ButtonElement, InputElement, MyButton, ref, RenderElement, TextElement } from '../packages/new_vilex/src'
import './style/input.css'

// createApp(() => {
//   return div(
//     {
//       width: 100,
//       height: 100,
//       background: 'lightgreen'
//     },
//     new MyButton({
//       textContent: 'mybutton',
//       // onclick() {
//       //   console.log('sdf')
//       // },
//       // children: [
//       //   new MyButton({
//       //     textContent: 'childbutton',
//       //     onclick() {
//       //       console.log('sdfsdfsdf')
//       //     },
//       //   })
//       // ],
      
//     })
//   )
// }).mount('#app')

// document.body.appendChild(document.createElement('my-button'))



const count = ref(123123)

count.value ++
count.watch((newValue, oldValue) => {
  console.log('change', newValue, oldValue)
})

count.value ++


const buttonColor = ref('red')

const inputValue = ref('')

const test = new DivElement({
  children: [
    new MyButton({
      // textContent: 'mybutton',
      children: [
        new DivElement({
          textContent: count
        }),
        new InputElement({
          placeholder: '请输入...',
          value: inputValue,
          classList: ['input-padding'],
          style: {}
        }),
        new ButtonElement({
          textContent: '点击',
          style: {  
            color: buttonColor
          },
          onClick() {
            count.value ++
            buttonColor.value = 'green'
            console.log(inputValue.value)
          }
        })
      ]
    }),
  ]
})

const app = document.querySelector('#app')
if (app) {
  app.append(RenderElement(test))
}

