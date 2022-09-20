module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: [
    '@vospel',
  ],
  rules: { 'no-inner-declarations': ['off'] },
}
