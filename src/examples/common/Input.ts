import { createElement, css } from 'vilex'

export const Input = createElement(
  'input',
  css`
    outline: none;
    padding: 0 8px;
    border-radius: 3px;
    border-style: solid;
    font-size: 14px;
    line-height: 28px;
    border-color: #999999;
  `
)
