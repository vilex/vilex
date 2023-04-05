export function toHyphenCase(value: string) {
  const newValue = value.replace(/([A-Z])/g, '-$1').toLowerCase()
  return newValue.charAt(0) === '-' ? newValue.slice(1) : newValue
}