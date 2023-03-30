import { ButtonElement, RenderElement, TextElement } from '../packages/new_vilex'

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

const btn = new ButtonElement({
  onClick() {
    console.log('click')
  },
  children: [
    new TextElement('你好'),
  ]
})

const app = document.querySelector('#app')
if (app) {
  app.append(RenderElement(btn))
}

