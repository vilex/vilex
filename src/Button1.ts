import { WebNative } from '../packages/new_vilex/src'



export const Button1 = (data: {children: any[]}) => {
    return new WebNative.NativeButton({
        textContent: 'button 1',
        classList: [  ],
        children: data.children
    })
}




