export function createElement(tag: string, textContent?: string) {
  const element = document.createElement(tag)
  element.textContent = textContent || ''
  return element
}
