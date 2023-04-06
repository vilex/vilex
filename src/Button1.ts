import { WebNative } from '../packages/new_vilex/src'
import {s} from './appCss'



export const Button1 = (data: {children: any[]}) => {
    return new WebNative.NativeButton({
        textContent: 'button 1',
        classList: [ b ],
        children: data.children
    })
}


const b = s.css`
    padding: 30px;
`

