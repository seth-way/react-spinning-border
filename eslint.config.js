import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginJestDom from 'eslint-plugin-jest-dom';
import eslintPluginTypescript from '@typescript-eslint/eslint-plugin';
import eslintConfigPrettier from 'eslint-config-prettier';
import parser from '@typescript-eslint/parser';

export default [
  {
    files: ['**/*.js', '**/*.ts', '**/*.jsx', '**/*.tsx'],
    languageOptions: {
      parser,
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        globalThis: 'readonly',
      },
    },
    plugins: {
      react: eslintPluginReact,
      'react-hooks': eslintPluginReactHooks,
      'jest-dom': eslintPluginJestDom,
      '@typescript-eslint': eslintPluginTypescript,
    },
    rules: {
      // React recommended settings
      ...eslintPluginReact.configs.recommended.rules,
      'react/jsx-runtime': 'off', // Adjust JSX runtime settings if necessary

      // React Hooks recommended settings
      ...eslintPluginReactHooks.configs.recommended.rules,

      // Jest DOM recommended settings
      ...eslintPluginJestDom.configs.recommended.rules,

      // TypeScript recommended settings
      ...eslintPluginTypescript.configs.recommended.rules,

      // Prettier - disable rules that conflict with Prettier
      ...eslintConfigPrettier.rules,
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-this-alias': 'off',
    },
  },
  {
    ignores: ['dist'],
  },
];
