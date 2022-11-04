// import { disableConsole } from '@vilex/utils'
import { div, listView, store } from 'vilex'
import { button, createApp } from 'vilex'

const list = store([
  {
    name: 'add item',
    exec: () =>
      list.push({
        name: 'newItem',
        exec: () => {
          1
        }
      })
  },
  {
    name: 'del first item',
    exec: () => list.shift()
  },
  {
    name: 'del last item',
    exec: () => list.pop()
  },
  {
    name: '删除第1个并插入1个',
    exec: () =>
      list.splice(1, 1, {
        name: `newInsert`,
        exec: () => {
          2
        }
      })
  }
])
const btn = div(
  listView(list, item =>
    button(item.name, {
      onclick() {
        item.exec()
      }
    })
  )
)

window.list = list
window.app = btn

Function.name

createApp(btn).mount('#app')
