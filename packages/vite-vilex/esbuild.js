const esbuild = require('esbuild')

esbuild
    .build({
        entryPoints: ['src/index.js'],
        outdir: 'lib',
        bundle: true,
        sourcemap: false,
        minify: true,
        splitting: true,
        format: 'esm',
        platform: 'node',
        target: ['node12.0']
        })
    .catch(() => process.exit(1))