const esbuild = require('esbuild')

esbuild
    .build({
        entryPoints: ['src/vii.ts'],
        outdir: 'lib',
        bundle: true,
        sourcemap: false,
        minify: true,
        splitting: true,
        format: 'esm',
        target: ['esnext']
        })
    .catch(() => process.exit(1))