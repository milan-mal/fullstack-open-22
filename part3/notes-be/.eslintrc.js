/* eslint-disable linebreak-style */
module.exports = {
  'env': {
    'node': true,
    'commonjs': true,
    'es2021': true,
    'jest': true
  },
  'extends': 'eslint:recommended',
  'overrides': [
  ],
  'parserOptions': {
    'ecmaVersion': 'latest'
  },
  'rules': {
    'indent': [
      'warn',
      2
    ],
    'linebreak-style': [
      'warn',
      'windows'
    ],
    'quotes': [
      'warn',
      'single'
    ],
    'semi': [
      'error',
      'never'
    ],
    'eqeqeq': 'error',
    'no-trailing-spaces': 'error',
    'object-curly-spacing': [
      'error', 'always'
    ],
    'arrow-spacing': [
      'error', { 'before': true, 'after': true }
    ],
    'no-console': 0
  }
}