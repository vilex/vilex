import { createApp, div } from '../packages/vilex/src/vii'
import { MyButton } from '../packages/vilex/src/v1/MyButton'

createApp(() => {
  return div(
    {
      width: 100,
      height: 100,
      background: 'lightgreen'
    },
    div('你好'),
    new MyButton({
      textContent: '你好',
      onclick() {
        console.log('sdf')
      },
      children: [
        new MyButton({
          textContent: '点击修改父级按钮的文本内容',
          onclick() {
            this.parent.textContent = '不好'
          }
        })
      ]
    })
  )
}).mount('#app')

document.body.appendChild(document.createElement('my-button'))
