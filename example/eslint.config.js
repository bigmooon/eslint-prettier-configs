import globals from 'globals'
import { globalIgnores } from 'eslint/config'
import baseConfig from 'eslint-config'
import reactConfig from 'eslint-config/mixins/react'

export default [
  globalIgnores(['dist', '.eslintrc.cjs']),
  ...baseConfig,
  ...reactConfig,
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: globals.browser,
    },
  },
]
