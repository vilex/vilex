const { TransformCode } = require('./transform')
const { default: generate } = require('@babel/generator')
const { parse } = require('@babel/parser')
const { normalizePath } = require('vite')
const { createFilter } = require('vite')
const { join } = require('path')
const { VirtualFile } = require('./hmrManager')

function vilexPlugin() {
  const root = normalizePath(process.cwd())
  const pkg = require(normalizePath(join(root, 'package.json')))
  const allDeps = [...Object.keys(pkg.dependencies), ...Object.keys(pkg.devDependencies)]
  const virtualModuleId = 'virtual:vilex-hmr-manager'
  const resolvedVirtualModuleId = '\0' + virtualModuleId

  const filter = createFilter(['src/**/*.ts', 'src/**/*.js'], ['node_modules/**'])

  function transform(code, id) {
    if (filter(id)) {
      const transformCode = TransformCode(code, id, allDeps)

      const result = generate(
        parse(transformCode.code, {
          plugins: ['typescript'],
          sourceType: 'module'
        })
      )

      return {
        map: result.map,
        code: transformCode.code,
        vite: {
          meta: {
            lang: 'ts'
          }
        }
      }
    }
  }

  return {
    name: 'vite:vilex',
    apply: 'serve',
    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId
      }
    },
    load(id) {
      if (id === resolvedVirtualModuleId) {
        return VirtualFile
      }
    },
    transform
  }
}

module.exports = vilexPlugin
