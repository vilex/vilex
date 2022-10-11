const hmr = `
window.__vilex__hmr__ = {
    register(v, file, name, args) {
        v.__hmr__ = {
            file, name, args
        }
    },

    render(updated, app, mod, key) {
        const self = app || window.__dev_vilex__app__

        if (this.equal(__dev_vilex__app__, updated)) {
            import.meta.hot.invalidate()
            return
        }
        for (let i = 0; i < self.children.length; i++) {
            const child = self.children[i]
            if (this.equal(child, updated)) {
                if (mod && key && child.__hmr__.args) {
                    const r = child.__hmr__
                    const u = mod[key](...r.args)
                    self.insert(u, child)
                    this.register(u, r.file, r.name, r.args)
                } else {
                    self.insert(updated, child)
                }
                self.remove(child)
                return
            } else {
                this.render(updated, child, mod, key)
            }
        }
    },

    equal(v1, v2) {
        if (!v1.__hmr__ || !v2.__hmr__)
            return false
        if (v1.__hmr__.file != v2.__hmr__.file)
            return false
        if (v1.__hmr__.name != v2.__hmr__.name) 
            return false
        return true
    }
}
`
exports.hmr = hmr