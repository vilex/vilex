module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'perf',
        'style',
        'docs',
        'refactor',
        'chore',
        'types',
        'test',
        'workflow',
        'build',
        'release'
      ]
    ]
  }
}
