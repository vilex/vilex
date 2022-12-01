import { vn } from '../vn'

export type TextValue = string | { value: string } | number

export function Text(textValue: TextValue) {
  return vn('text', [{ data: textValue, $dataType: 'text' }])
}
