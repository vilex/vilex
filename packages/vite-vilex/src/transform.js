const { parse } = require('@babel/parser')
const { default: traverse } = require('@babel/traverse')
const t = require('@babel/types')
const { default: generate } = require('@babel/generator')
const { DepManager, Dep } = require('./dep')

function TransformCode(code, id, allDeps) {
  const dep = new Dep()
  dep.keepOn = true
  let programPath
  const astfile = parse(code, { plugins: ['typescript'], sourceType: 'module' })

  traverse(astfile, {
    ImportDeclaration(path) {
      const value = path.node.source.value
      !allDeps.includes(value) && dep.use(value)
    },

    CallExpression(path) {
      if (path.node.callee.name === 'defineComponent') {
        if (path.node.arguments.length) {
          const first = path.node.arguments[0]
          if (!t.isStringLiteral(first) && !t.isIdentifier(first)) {
            if (t.isVariableDeclarator(path.parent)) {
              if (path.parent.id.name) {
                path.node.arguments.unshift(t.stringLiteral(id + '#' + path.parent.id.name))
                dep.keepOn = false
              }
            }
          }
        }
      }
    },
    Program(path) {
      programPath = path
    }
  })

  const list = dep.useList
  DepManager.set(id, dep)
  if (id.includes('src/main.ts')) {
    programPath.node.body.unshift(t.identifier(`import 'virtual:vilex-hmr-manager';`))
  }
  const hmrHandlers = [`import.meta.hot.accept(module => HmrManager.update(module,'${id}'));`]
  hmrHandlers.shift()
  if (list.length) {
    const accepts = list.map(item => `import.meta.hot.accept('${item}', module => HmrManager.update(module, '${id}'));`)
    hmrHandlers.push(...accepts)
  }
  hmrHandlers.unshift(`if(import.meta.hot){`)
  hmrHandlers.push(`}`)
  programPath.node.body.push(t.identifier(hmrHandlers.join('')))

  return { code: generate(astfile).code }
}

exports.TransformCode = TransformCode
