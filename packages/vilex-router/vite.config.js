import { defineConfig } from "vite"
export default defineConfig({
    plugins: [
        (function() {
            return {
                name: 'vite:ewrwerw',
                load(id) {
                    console.log('load ',id)
                },
                // transform(code, id) {
                //     console.log(id)
                //     // if (id.includes('hmr_child')) {
                //     //     const output = []
                //     //     console.log('transform', id)
                //     //     console.log(code)
                //     //     return {
                //     //         source: code + '\n export const $$filePath = ' + id
                //     //     }
                //     // }
                //     // return { source: code }
                    
                // }
            }
        })()
    ]
})