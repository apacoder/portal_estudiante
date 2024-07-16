// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    'semi'         : ['error', 'never'],
    'quotes'       : ['error', 'single'],
    'indent'       : ['error', 2],
    'comma-dangle' : ['warn', 'always-multiline'],
    'comma-style'  : ['warn', 'last'],
    'prefer-const' : 'warn',
    'brace-style'  : ['error', '1tbs', { 'allowSingleLine': true }], 
    'no-unused-vars': 'warn',
  },
})

// Add this to settings.json
// "editor.codeActionsOnSave": { "source.fixAll.eslint": "always" },
// "eslint.validate": [ "javascript", "vue", "html"],