import { TodoType } from './index.d'
import { button, css, div, input, listView, ref, store } from 'vilex'

const c__taskItem = css`
  background-color: gray;
  margin: 2px 0;
  color: whitesmoke;
  padding: 4px 14px;
  &:hover {
    background-color: darkgreen;
  }
  &:hover button {
    visibility: visible;
    opacity: 1;
  }
  button {
    float: right;
    visibility: hidden;
    opacity: 0;
    transition: all 0.5s;
  }
`

export function Todo() {
  const tasks: TodoType[] = store([{ title: 'hello' }, { title: 'world' }])
  const current = ref('')

  return div(
    css`
      width: 600px;
      margin: 0 auto;
      margin-top: 100px;
    `,
    input(
      css`
        width: 100%;
        box-sizing: border-box;
        padding: 4px 14px;
        margin-bottom: 20px;
      `,
      {
        value: current,
        placeholder: `Add a new task`
      },
      {
        onkeydown({ ev }) {
          if (ev.key === `Enter` && current.value.trim()) {
            tasks.unshift({ title: current.value })
            current.value = ''
          }
        }
      }
    ),
    div(
      listView(tasks, (task, index) =>
        div(
          c__taskItem,
          task.title,
          button(`✔️`, {
            onclick() {
              tasks.splice(index as number, 1)
            }
          })
        )
      )
    )
  )
}
