// import { disableConsole } from '@vilex/utils'
import { div, listView, store } from 'vilex'
import { button, createApp } from 'vilex'
import { Todo } from './examples/todo'

const app = Todo()

createApp(app).mount('#app')
