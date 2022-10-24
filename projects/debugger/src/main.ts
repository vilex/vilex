import { createApp, createElement, ref } from 'vilex'
import 'styled'
import { css } from 'styled'

const count = ref(0)

const Button = createElement(
  'button',
  css`
    color: red;
    font-size: large;
    flood-color: antiquewhite;
  `
)

const a = createElement('button')`
  bg
`

const app = createElement('div', [
  {
    fontFamily: 'cursive',
    width: '200px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center'
  },
  createElement('p', [count]),
  createElement('button', [
    '点我+1',
    css`
      background-color: rebeccapurple;
      font-size: 60px;
      &:hover {
        background-color: gray;
      }
    `,
    {
      onclick() {
        count.value++
      }
    },
    {
      color: 'rgba(0,0,0,0.8)'
    }
  ])
])

createApp(app).mount('#app')
