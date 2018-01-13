module.exports = {
  parserOptions: {
    parser: "babel-eslint",
  },
  env: {
    browser: true,
  },
  extends: [
    // "eslint:recommended",
    "plugin:vue/recommended"
  ],
  rules: {
    "vue/max-attributes-per-line": 'off',
    'vue/require-prop-types': 'off',
    'no-console': 'off'
  }
}