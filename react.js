module.exports = {
  plugins: ['react', 'react-hooks'],
  extends: ['plugin:react/recommended'],
  rules: {
    'react/display-name': 'off',
    'react/no-deprecated': ['error'],
    'react/self-closing-comp': 'error',
    'react/sort-prop-types': ['error', { ignoreCase: true }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
