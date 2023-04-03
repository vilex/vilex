import { ButtonElement, DivElement, InputElement, MyButton, ref, store } from '../packages/new_vilex/src'
import { RenderElement } from '../packages/new_vilex/src/web-spa-runtime/renderer-element'
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

// count.value ++
// count.watch((newValue, oldValue) => {
//   console.log('change', newValue, oldValue)
// })

// count.value ++

// console.log(store(1))

const mainStore = store({
  style: {
    width: 100
  },
  list: [
    1,2,3,4
  ],
  objList: [
    {
      name: '123'
    }
  ]
})





console.log(mainStore)


// mainStore.list.push(5)
// mainStore.objList.push({
//   name: 'q2'
// })
debugger
mainStore.objList[0] = {
  name: 'new item'
}


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

