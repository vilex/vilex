import { disableConsole } from '@vilex/utils'
import { div, li, listView, store } from 'vilex'
import { button, createApp } from 'vilex'

const list = store([1, 2, 3])
const btn = div(
  // list.map(item => button(item))
  // ,
  listView(list, item => button(item))
)

window.list = list
window.app = btn

Function.name

createApp(btn).mount('#app')
