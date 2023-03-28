import { createApp, div } from 'vilex'
import { MyButton } from 'vilex/src/v1/MyButton'

createApp(() => {
  return div({
    width: 100,
    height: 100,
    background: 'red'
  })
}).mount('#app')

new MyButton('你好')
new MyButton('不好')
