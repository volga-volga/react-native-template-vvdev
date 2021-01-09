module.exports = {
  extends: ['plugin:react-hooks/recommended', 'vvdev-rn'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react-hooks'],
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.tsx',
          '.ts',
        ],
      },
    },
  },
  rules: {
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'guard-for-in': 'off',
    'no-unused-vars': 'off',
    'no-mixed-operators': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'react/sort-comp': 'off',
    'react-native/no-color-literals': 'warn',
    'react-native/no-raw-text': 'off',
    'no-unused-expressions': 'off',
  },
  globals: {
    XMLHttpRequest: false,
    WebSocket: false,
  },
};
