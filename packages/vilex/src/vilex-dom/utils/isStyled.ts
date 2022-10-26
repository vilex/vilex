import { Styled } from 'vilex-css'

export function isStyled(val: unknown) {
  if ((val as Styled).classname && (val as Styled)._styled) {
    return val as Styled
  }
  return undefined
}