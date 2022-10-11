// @ts-ignore
// @ts-nocheck
const { dirname, resolve } =  require("path")

const importReg = /(import(.*)(?=from)(.*)['|"])/g;

// interface ImportMeta {
//   from: string;
//   method: string;
//   path: string;
//   input: string;
// }

function getImports(esStr, id) {
  const imports = [];
  const importLines = esStr.match(importReg) || [];
  importLines.forEach((item) => {
    const input = item;
    const from = item.split("from")[1].trim();
    const path = resolve(dirname(id), from.replace(/'|"/g, ""));
    const newItem = item.match(/import(.*)from/);
    if (newItem) {
      const item1 = newItem[1].replace(/{|type|}/g, "");
      item1.split(",").forEach((item) => {
        if (/ as /.test(item)) {
          imports.push({
            input,
            from,
            path,
            method: item.split(" as ")[1].trim(),
          });
        } else {
          imports.push({
            input,
            from,
            path,
            method: item.trim(),
          });
        }
      });
    }
  });
  // @ts-ignore
  // __VILEX_HMR__[id] = imports;

  return {
    line: importLines.length,
    imports,
  };
}

 function isImportLocal(meta) {
  return meta.from.includes("./");
}


exports.isImportLocal = isImportLocal
exports.getImports = getImports
