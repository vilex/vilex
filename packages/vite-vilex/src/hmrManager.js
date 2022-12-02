const content = `
const isViElement = val => !!(val && val.$ && val.$.type)
const isFn = val => typeof val === 'function'
const equal = (element1, element2) => !!(element1 && element2 && element1.hmrId === element2.hmrId && element1.hmrId !== undefined)
let matched = false
const hotModuleReplace = (newElement, app) => {
  const current = app || __dev_vilex__app__
  if (!current) return
  if (equal(newElement, current)) {
    return window.location.reload()
  }
  const children = current.children || []
  for (let i = children.length -1; i >= 0; i--) {
    const child = children[i]
    if (equal(newElement, child)) {
      matched = true
      current.insert(newElement, child)
      current.remove(child)
    } else {
      hotModuleReplace(newElement, child)
    }
  }
}
window.HmrManager = new class {
  arguments = new Map()
  update(module, fileId) {
    if (Object.keys(module).length === 0) {
      return window.location.reload()
    }
    if (typeof module === 'object' && module !== null) {
      for(const key in module) {
        let exportBlock = module[key]
        if (isFn(exportBlock)) {
          const args = this.getArguments(fileId + '#' + key)
          Array.isArray(args) && (exportBlock = exportBlock(...args))
        } 
        if (isViElement(exportBlock)) {
          hotModuleReplace(exportBlock)
        } 
      }
    }
    !matched && window.location.reload()
  }
  setArguments(hmrId, args) {
    this.arguments.set(hmrId, args)
  }
  getArguments(hmrId) {
    return this.arguments.get(hmrId)
  }
}
`
exports.VirtualFile = content
