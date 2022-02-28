module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  plugins: ['@typescript-eslint', 'react-hooks', 'import'],
  settings: {
    //自动发现React的版本，从而进行规范react代码
    react: {
      pragma: 'React',
      version: 'detect',
    },
    'import/resolver': {
      typescript: {},
    },
  },
  parserOptions: {
    //指定ESLint可以解析JSX语法
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
    tsconfigRootDir: './',
  },
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-unused-vars': 2,
    '@typescript-eslint/no-empty-function': 0,
    'import/no-duplicates': 'error',
    'import/no-unused-modules': 'error',
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 2,
  },
};
