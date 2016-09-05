module.exports = {
  root: true,
  extends: ['airbnb-base/legacy', 'angular'],
  rules: {
    'comma-dangle': ['error', 'only-multiline'],

    'linebreak-style': 0,
    'no-global-assign': 0,
    'no-unsafe-negation': 0,
    'no-param-reassign': 0,
    'wrap-iife': 0,
    'func-names': 0,
    'no-underscore-dangle': 0,
    'vars-on-top': 0,
    'max-len': 0,
    'no-alert': 0,

    'angular/document-service': 0,
  },
  globals: {
    angular: true,
  }
};
