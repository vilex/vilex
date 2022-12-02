class Dep {
  keepOn = false
  useList = []
  dependents = []

  use(useName) {
    this.useList.push(useName)
  }

  dep(depName) {
    this.dependents.push(depName)
  }
}

const DepManager = new Map()

exports.Dep = Dep
exports.DepManager = DepManager
