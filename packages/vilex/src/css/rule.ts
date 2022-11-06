let length = 0
export function insert(sheet: CSSStyleSheet, rule: string) {
  sheet.insertRule(rule, length)
  length++
}
