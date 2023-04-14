const Layout = { }
Reflect.defineProperty(Layout, 'Row', {
    value: null,
    get(...args) {
        console.log('get', args)
        if (this.value === null) {
            this.value = 1
        }
        return this.value
    },
    set(value) {
        console.log(value)
    }
})


Layout.Row[
    a = 1,
    b = 2
]