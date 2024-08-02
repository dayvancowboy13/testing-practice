import globals from 'globals';
import pluginJs from '@eslint/js';
import stylisticJs from '@stylistic/eslint-plugin-js';
import jest from 'eslint-plugin-jest';

export default [
  {
    ignores: ['eslint.config.mjs']
  },
  {
    files: [
      'functions.js',
      'main.test.js',
      'babel.config.js'
    ],
    plugins: {
      '@stylistic/js': stylisticJs,
      'jest': jest

    },
    rules: {
      "@stylistic/js/space-before-function-paren": ["off", 'never'],
      '@stylistic/js/space-before-function-paren': ["off", {
        "named": "never"
      }],
      '@stylistic/js/quotes': ['warn', 'single', { avoidEscape: true }],
      '@stylistic/js/eol-last': ['off', 'never'],
      '@stylistic/js/function-paren-newline': ["warn", { "minItems": 3 }],
      '@stylistic/js/object-curly-spacing': ['warn', 'always'],
      '@stylistic/js/multiline-comment-style': ['off', 'separate-lines'],
      '@stylistic/js/function-call-argument-newline': ["error", "consistent"],
      '@stylistic/js/indent': ['warn', 4, { "SwitchCase": 1 }],
      '@stylistic/js/array-element-newline': ["error", { "minItems": 3 }],
      '@stylistic/js/quote-props': ['warn', 'consistent'],
      '@stylistic/js/comma-dangle': ['warn', 'only-multiline'],

    },
    languageOptions: {
      globals:
        globals.node
    }
  },
  stylisticJs.configs["all-flat"],
  // pluginJs.configs.recommended,
];