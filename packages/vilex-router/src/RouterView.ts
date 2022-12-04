import { css, div } from 'vilex'

const container_style = css`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`

export const defaultContainer = () => div(container_style)
