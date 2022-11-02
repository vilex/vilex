import { div, store } from 'vilex'
import { button, createApp } from 'vilex'

const list = store([1, 2, 3])
const btn = div(list.map(item => button(item)))

window.list = list
window.app = btn

createApp(btn).mount('#app')
