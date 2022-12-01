import { Styled } from '../../css'

export function isStyled(val: unknown) {
  if (val && (val as Styled).classname && (val as Styled)._styled) {
    return val as Styled
  }
  return undefined
}
