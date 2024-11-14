/**
 * This is a flat ESLint configuration.
 * Note that `extends` should not be added in this configuration.
 * Prettier recommended rules are applied using the spread operator with `...prettierConfig.rules`.
 * The configuration includes TypeScript, React hooks, React refresh, and Prettier plugins.
 * It also organizes imports using the `prettier-plugin-organize-imports`.
 */
import tseslint from '@typescript-eslint/eslint-plugin';
import airbnbConfig from 'eslint-config-airbnb-typescript';
import prettierConfig from 'eslint-config-prettier';
import prettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import organizeImports from 'prettier-plugin-organize-imports';
import { parser } from 'typescript-eslint';
import jsdom from 'eslint-plugin-jsdom';

const { rules: airbnbRules } = airbnbConfig;

export default [
  {
    ignores: ['dist'],
    files: ['**/*.{js,svg,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: parser,
    },
    plugins: {
      '@typescript-eslint': tseslint,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      react: react,
      prettier: prettier,
      'prettier-plugin-organize-imports': organizeImports,
      'jsdom': jsdom,
    },
    rules: {
      ...airbnbRules,
      ...reactHooks.configs.recommended.rules,
      ...jsdom.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      '@typescript-eslint/no-unused-vars': 'error',
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1, maxBOF: 0 }],
      'max-len': ['error', { code: 80, ignoreComments: false }],
    },
  },
  prettierConfig,
];
