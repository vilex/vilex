import { createApp, div } from 'vilex'

createApp(() => {
  return div({
    width: 100,
    height: 100,
    background: 'red'
  })
}).mount('#app')
