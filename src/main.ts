import { DivElement } from './../packages/new_vilex/html_elements/DivElement';
import { ButtonElement, InputElement, RenderElement, TextElement } from '../packages/new_vilex'
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



const count = myRef(123123)

const test = new DivElement({
  children: [
    new DivElement({
      textContent: count
    }),
    new InputElement({
      placeholder: '请输入...',
      value: count,
      classList: ['input-padding']
    }),
    new ButtonElement({
      textContent: '点击',
      onClick() {
        count.value ++
      }
    })
  ]
})

const app = document.querySelector('#app')
if (app) {
  app.append(RenderElement(test))
}

