import { createApp, css, div, h1 } from 'vilex'

const app = div(
  css`
    color: blue;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: baseline;
    transform: translate(0);
  `,
  div(
    h1('hello'),
    {
      onclick() {
        console.log('hit')
      }
    },
    {
      id: '777'
    }
  )
)

createApp(app).mount('#app')
