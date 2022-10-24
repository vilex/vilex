let length = 0
export function insert(sheet: CSSStyleSheet, rule: string) {
  console.log(rule, length)
  sheet.insertRule(rule, length)
  length++
}
