let length = 0
export function insert(sheet: CSSStyleSheet, rule: string) {
  try {
    sheet.insertRule(rule, length)
    length++
  } catch {}
}
