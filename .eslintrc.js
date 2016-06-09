module.exports = {
  extends: 'airbnb',
  rules: {
    'react/jsx-no-bind': [2, {
      ignoreRefs: true,
      allowArrowFunctions: true,
      allowBind: true,
    }],
  }
}
