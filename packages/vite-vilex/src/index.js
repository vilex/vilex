const { hmr } = require("./hmr");
const { getImports, isImportLocal } = require( "./utils")


function vilexPlugin() {

  function transformIndexHtml(html) {
    const tags = [
      {
        tag: 'script',
        attrs: { type: 'module'},
        children: hmr,

        injectTo: 'head'
      }
    ]
    return { html, tags}
  }

  function transform(code, id) {
    if (!id.includes(".ts")) return;
    const codeList = code.split("\n");
    const { imports, line } = getImports(code, id);


    // 替换使用导入

    for (let i = line; i < codeList.length; i++) {
      for (let j = 0; j < imports.length; j++) {
        const str = codeList[i];
        const imp = imports[j];
        if (isImportLocal(imp)) {
          if (str.includes(imp.method)) {
            codeList[i] = str.replace(imp.method, `__vilex__${imp.method}`);
          }
        }
      }
    }

    const preCodes = [];
    imports.forEach((item) => {
      if (isImportLocal(item)) {
        preCodes.push(`let __vilex__${item.method} = ${item.method}`);
        const preCode = `
        if (typeof ${item.method} === 'object') {
          if (${item.method}.$ && ${item.method}.$.type) {
            __vilex__hmr__.register(${item.method}, '${item.path}', '${item.method}', null)
          }
        } else if (typeof ${item.method} === 'function') {
          __vilex__${item.method} = new Proxy(${item.method}, {
            apply(target, thisArg, args) {
              const ret = Reflect.apply(target, thisArg, args)
              if (ret && ret.$ && ret.$.type) {
                __vilex__hmr__.register(ret, '${item.path}', '${item.method}', args)
              }
              return ret
            }
          })
        }
      `;
        preCodes.push(preCode);
      }
    });
    codeList.splice(line, 0, ...preCodes);

    // codeList.push(code);

    // codeList.push(`if (import.meta.hot) { `);

    const accepts = [];
    imports.forEach((item) => {
      if (isImportLocal(item)) {
        const hotCode = `
          import.meta.hot.accept('${item.from.replace(/'|"/g, "")}', mod => {
            for (const key in mod) {
              if (typeof mod[key] === 'object') {
                if (mod[key].$ && mod[key].$.type) {
                  __vilex__hmr__.register(ret, '${item.path}', '${item.method}', null)
                  __vilex__hmr__.render(ret)
                }
              } else if (typeof mod[key] === 'function') {
                const ret = mod[key]()
                if (ret && ret.$ && ret.$.type) {
                  // ret.hmrId = '${item.path}'
                  // ____hmr___update___(ret)
                  __vilex__hmr__.register(ret, '${item.path}', '${item.method}', null)
                  __vilex__hmr__.render(ret, null, mod, key)
                }
              }
            }
          })
        `;
        accepts.push(hotCode);
      }
    });

    if (accepts.length) {
      codeList.push(`if (import.meta.hot) { `);
      codeList.push(...accepts);
      codeList.push(`}`);
    }

    const output = codeList.join("\n");
    return {
      source: output,
      code: output,
      vite: {
        meta: {
          lang: "ts",
        },
      },
    };
  }

  return {
    name: "vite:vilex",
    transform,
    transformIndexHtml
  };
}


module.exports = vilexPlugin