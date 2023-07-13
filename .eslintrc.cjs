module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: [
    '@antfu',
  ],
  rules: { 'no-inner-declarations': ['off'] },
}
