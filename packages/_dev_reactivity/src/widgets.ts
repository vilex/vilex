import { div, p, span } from 'vilex'

export function wordart(text: string) {
  return p(text, {
    color: '#404040',
    fontSize: '48px',
    display: 'block',
    fontWeight: 'bold',
    textShadow: '5px 5px 5px #a7a7a7, 0px 0px 2px #7c897b'
  })
}

export function fulllist(...items: ViHTMLDivElementPart[]) {
  return div(
    {
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    },
    ...items
  )
}
