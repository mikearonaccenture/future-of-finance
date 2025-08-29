import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript'],
    rules: {
      // Allow 'any' type for rapid development
      '@typescript-eslint/no-explicit-any': 'off',
      // Allow unused vars starting with underscore
      '@typescript-eslint/no-unused-vars': ['warn', {
        'argsIgnorePattern': '^_',
        'varsIgnorePattern': '^_'
      }],
      // Disable unescaped entities warning
      'react/no-unescaped-entities': 'off',
      // Change prefer-const to warning
      'prefer-const': 'warn',
      // Fix React not defined error
      'react/jsx-no-undef': 'off'
    }
  }),
];

export default eslintConfig;
