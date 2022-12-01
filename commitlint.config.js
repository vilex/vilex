module.exports = {
  extends: ['@commitlint/config-conventional'],
  'subject-case': ['lower-case', 'start-case'],
  rules: {
    'type-enum': [2, 'always', ['feat', 'fix', 'perf', 'style', 'docs', 'refactor', 'chore', 'types', 'test', 'workflow', 'build', 'release']]
  }
}
