module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'airbnb-base',
    'plugin:import/errors', // 설치한 경우
    'plugin:import/warnings', // 설치한 경우
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': 0,
    'import/prefer-default-export': 'off',
    'import/extensions': [ 'off' ],
    "no-useless-constructor": "off",
    "no-shadow": "off",
  },
  settings: {
    'import/resolver': {
      alias: {
        map:[
          ["src", './src'],
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};