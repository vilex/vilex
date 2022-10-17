module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module'
  },
  extends: ['plugin:@typescript-eslint/recommended'],
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-var-requires': 'off'
  }
}
