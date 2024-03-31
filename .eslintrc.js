module.exports = {
  extends: ['auto'],
  rules: {
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'babel/semi': 'off',
    'react/react-in-jsx-scope': 'off',
    'const-case/uppercase': 'off',
    'react/function-component-definition': 'off',
    'react-native/no-inline-styles': 'warn',
    'react-native/no-raw-text': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        '': 'never'
      }
    ]
  }
}
