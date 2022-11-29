const {
  END_OF_FILE_IDENTIFICATION,
  END_OF_IMPORT_IDENTIFICATION
} = require('./contants')

function RewriteImportSpecifiers(code, specifiers, prefix) {
  const output = []
  specifiers.forEach(item => {
    let template = `
            let ${prefix}${item.name} = ${item.name}
            if (typeof ${item.name} === 'object') {
                if (${item.name}.$ && ${item.name}.$.type) {
                    __vilex__hmr__.register(${item.name}, '${item.path}', '${item.name}', null)
                }
            } else if (typeof ${item.name} === 'function') {
                ${prefix}${item.name} = new Proxy(${item.name}, {
                    apply(target, thisArg, args) {
                        const ret = Reflect.apply(target, thisArg, args)
                        try {
                            if (ret && ret.$ && ret.$.type) {
                                __vilex__hmr__.register(ret, '${item.path}', '${item.name}', args)
                            }
                        }catch(err) { }
                        return ret
                    }
                })
            }
        `
    output.push(template)
  })

  const recode = code.replace(END_OF_IMPORT_IDENTIFICATION, output.join('\n'))

  return { code: recode }
}

function InsertCodeEndOfFile(code, specifiers) {
  const output = []

  const fileMap = new Map()
  specifiers.forEach(item => {
    // if (fileMap.has(item.from)) {
    //     fileMap.get(item.from).push(item)
    // } else {
    //     fileMap.set(item.from, [item])
    // }

    fileMap.set(item.from, item)
  })

  fileMap.forEach((item, from) => {
    const template = `
import.meta.hot.accept('${from}', mod => {
  for (const key in mod) {
      if (typeof mod[key] === 'object') {
        const ret = mod[key]
          if (ret.$ && ret.$.type) {
              __vilex__hmr__.register(ret, '${item.path}', key, null)
              __vilex__hmr__.render(ret)
          }
      } else if (typeof mod[key] === 'function') {
          const args = __vilex__hmr__.getArgs('${item.path}', key)
          let ret
          if (Array.isArray(args)) {
            ret = mod[key](...args)
          } else {
            ret = mod[key]()
          }
          if (ret && ret.$ && ret.$.type) {
              __vilex__hmr__.register(ret, '${item.path}', key, args)
              __vilex__hmr__.render(ret, null, mod, key)
          }
      }
  }
})
`
    output.push(template)
  })

  output.unshift(`if (import.meta.hot) {`)
  output.push(`}`)

  const recode = code.replace(END_OF_FILE_IDENTIFICATION, output.join('\n'))

  return { code: recode }
}

module.exports = {
  RewriteImportSpecifiers,
  InsertCodeEndOfFile
}
