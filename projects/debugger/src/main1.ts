import { button, createApp, createElement, div, p, ref } from 'vilex'

const count = ref(0)

const app = div(
  {
    fontFamily: 'cursive',
    width: '200px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center'
  },
  p(count),
  button(
    '点我+1',
    {
      onclick() {
        count.value++
      }
    },
    {
      color: `rgba(0,0,0,0.8)`
    }
  )
)

createApp(app).mount('#app')
