import { vn, VnItem } from '../vn'

type TextValue = string | { value: string }

export function Text(textValue: TextValue) {
  return vn('text', [{ data: textValue, $dataType: 'text'}])
}
