const hmr = `
window.__vilex__hmr__ = {
  argsMap: {},
  register(v, file, name, args) {
    // 临时处理
    if (v.__hmr__) return  
    v.__hmr__ = {
          file, name, args
      }
      this.argsMap[file+name] = args
  },

  render(updated, app, mod, key) {
      const self = app || window.__dev_vilex__app__
      if (this.equal(__dev_vilex__app__, updated)) {
          import.meta.hot.invalidate()
          return
      }
      try {
        for (let i = 0; i < self.children.length; i++) {
            const child = self.children[i]
            if (this.equal(child, updated)) {
                self.insert(updated, child)
                self.remove(child)
                return
            } else {
                this.render(updated, child, mod, key)
            }
        }
      } catch(err) {
        import.meta.hot.invalidate()
        console.error(err)
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
  },
  getArgs(file, name) {
    return this.argsMap[file+name]
  }
}
`
exports.hmr = hmr