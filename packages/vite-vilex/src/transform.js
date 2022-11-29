const { parse } = require('@babel/parser')
const { default: traverse } = require('@babel/traverse')
const t = require('@babel/types')
const { default: generate } = require('@babel/generator')

const images = ['.png', '.jpg', '.svg', '.mp3', '.mp4', '.gif', '.webp', '.md']
function TransformCode(
  code,
  id,
  namePrefix,
  endOfImportIndentification,
  endOfFileIdentification
) {
  let importPath,
    programPath,
    localImportSpecifiers = []
  const astfile = parse(code, { plugins: ['typescript'], sourceType: 'module' })

  traverse(astfile, {
    ImportDeclaration(path) {
      importPath = path

      const value = path.node.source.value
      const blacklist = [
        !value.startsWith('.'),
        value.startsWith('/@fs/'),
        images.some(v => value.includes(v))
      ]

      const nolocal = blacklist.some(v => v)
      if (!nolocal) {
        path.node.specifiers.forEach(specifier => {
          localImportSpecifiers.push({
            name: specifier.local.name,
            path: value,
            from: value
          })
        })
      }
    },
    Identifier(path) {
      if (localImportSpecifiers.some(item => item.name == path.node.name)) {
        const blacklist = [
          t.isImportSpecifier(path.parentPath),
          t.isVariableDeclarator(path.parent) &&
            path.parentPath.node.id.name == path.node.name,
          t.isFunctionDeclaration(path.parentPath),
          t.isProperty(path.parentPath) &&
            path.parentPath.node.value.name != path.node.name,
          t.isClassDeclaration(path.parentPath),
          t.isImportDefaultSpecifier(path.parentPath)
        ]

        const replace = blacklist.some(bool => bool)
        if (!replace) {
          // console.log(path.node.name, blacklist)
          path.node.name = `${namePrefix}${path.node.name}`
        }
      }
    },
    Program(path) {
      programPath = path
    }
  })

  if (importPath) {
    importPath.insertAfter(t.identifier(endOfImportIndentification))
    programPath.node.body.push(t.identifier(endOfFileIdentification))
  }

  const recode = generate(astfile).code

  return { code: recode, specifiers: localImportSpecifiers }
}

exports.TransformCode = TransformCode
