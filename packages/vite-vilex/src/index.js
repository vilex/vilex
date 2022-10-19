const {
  VAR_PREFIX,
  END_OF_IMPORT_IDENTIFICATION,
  END_OF_FILE_IDENTIFICATION
} = require('./contants')
const { hmr } = require('./hmr')
const { RewriteImportSpecifiers, InsertCodeEndOfFile } = require('./templates')
const { TransformCode } = require('./transform')
const { default: generate } = require('@babel/generator')
const { parse } = require('@babel/parser')
const { normalizePath } = require('vite')

function vilexPlugin() {
  const root = normalizePath(process.cwd())

  function transformIndexHtml(html) {
    const tags = [
      {
        tag: 'script',
        attrs: { type: 'module' },
        children: hmr,
        injectTo: 'head'
      }
    ]
    return { html, tags }
  }

  function transform(code, id) {
    if (!id.includes('.ts')) return
    if (!id.includes(root)) return

    const tfc = TransformCode(
      code,
      id,
      VAR_PREFIX,
      END_OF_IMPORT_IDENTIFICATION,
      END_OF_FILE_IDENTIFICATION
    )

    const ris = RewriteImportSpecifiers(tfc.code, tfc.specifiers, VAR_PREFIX)

    const iceof = InsertCodeEndOfFile(ris.code, tfc.specifiers)

    const result = generate(
      parse(code, {
        plugins: ['typescript'],
        sourceType: 'module'
      })
    )

    return {
      map: result.map,
      code: iceof.code,
      vite: {
        meta: {
          lang: 'ts'
        }
      }
    }
  }

  return {
    name: 'vite:vilex',
    apply: 'serve',
    transform,
    transformIndexHtml
  }
}

module.exports = vilexPlugin
