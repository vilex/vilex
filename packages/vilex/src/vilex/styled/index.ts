import { Properties } from 'csstype'

export interface Styled extends Properties {
  '&:hover': Properties
  '&:active': Properties
  '&:checked': Properties
  '&:disabled': Properties
  '&:empty': Properties
  '&:enabled': Properties
  '&:first-child': Properties
  '&:first-of-type': Properties
  '&:focus': Properties
  '&:in-range': Properties
  '&:invalid': Properties
  '&:last-child': Properties
  '&:last-of-type': Properties
  '&:link': Properties
  '&:only-of-type': Properties
  '&:only-child': Properties
  '&:optional': Properties
  '&:out-of-range': Properties
  '&:read-only': Properties
  '&:read-write': Properties
  '&:required': Properties
  '&:root': Properties
  '&:target': Properties
  '&:valid': Properties
  '&:visited': Properties
  '&::before': Properties
  '&::after': Properties
  '&::first-letter': Properties
  '&::first-line': Properties
  '&::selection': Properties
  '&::placeholder': Properties
}
