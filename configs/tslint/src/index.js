module.exports = {
  extends: [
    'tslint-microsoft-contrib',
    'tslint-react',
    'tslint-eslint-rules',
  ],
  rules: {
    'comment-format': [
      true,
      'check-space'
    ],
    'interface-name': false,
    'no-empty-interface': false,
    'prefer-function-over-method': false,
    'no-namespace': false,
    'typedef': [
      true,
      'parameter',
      'property-declaration',
      'member-variable-declaration'
    ],
    'no-unnecessary-class': false,
    'member-ordering': false,
    'no-switch-case-fall-through': true,
    'variable-name': [
      true,
      'check-format',
      'allow-leading-underscore',
      'allow-pascal-case',
      'ban-keywords'
    ],
    'completed-docs': false, // 'too verbose',
    'object-literal-sort-keys': false,
    'strict-boolean-expressions': false,
    'member-access': false, // 'maybe',
    'ordered-imports': false,
    'no-unbound-method': false,
    'newline-before-return': false,
    'no-inferrable-types': false, // 'until this is resolved https://github.com/palantir/tslint/issues/711',
    'prefer-method-signature': true,
    'no-void-expression': [true, 'ignore-arrow-function-shorthand'],
    'object-literal-shorthand': [true, 'never'],
    'no-unsafe-any': false, // 'https://github.com/palantir/tslint/issues/3080',
    'array-type': [
      true,
      'array'
    ],
    'newline-per-chained-call': false, // until they add ignore-chain-with-depth like eslint https://github.com/palantir/tslint/issues/3253
    'no-use-before-declare': false,
    'prefer-method-signature': false,
    'switch-default': false,
    'no-shadowed-variable': false, // maybe
    'prefer-switch': false,
    'switch-final-break': false,
    'prefer-conditional-expression': false,
    'triple-equals': [true, 'allow-undefined-check'],
    'no-implicit-dependencies': true, // this wont work for our larger apps since Andy and ajafff has no vision https://github.com/palantir/tslint/issues/3364
    'quotemark': [true, 'single', 'jsx-single', 'avoid-escape', 'avoid-template'],
    'no-this-assignment': true,
    'semicolon': [true, 'always'],
    'trailing-comma': [true, {'multiline': 'always', 'singleline': 'never'}],
    'no-consecutive-blank-lines': [true, 2],
    'no-trailing-whitespace': [true, 'ignore-template-strings'],
    'ter-func-call-spacing': [true],
    'ter-computed-property-spacing': false, // TODO: review with alex
    'block-spacing': true, //
    'max-line-length': [true, {
      'limit': 150,
      'ignore-pattern': '^import |^export {(.*?)}'
    }],
    'object-curly-spacing': [true, 'always'],
    'array-bracket-spacing': [true, "always", { "singleValue": false }], // TODO: review with alex
    'space-in-parens': [false, 'never'],
    'eofline': true,
    'prefer-const': true,
    'no-var-keyword': true,
    'object-literal-key-quotes': [true, 'as-needed'],
    'no-eval': true,
    'space-before-function-paren': [true,
      {
        'anonymous': 'never',
        'named': 'never',
        'asyncArrow': 'always'
      }
    ],
    'one-variable-per-declaration': [true, 'ignore-for-loop'],
    'no-boolean-literal-compare': true,
    curly: true,
    'brace-style': [
      true,
      '1tbs'
    ],
    indent: [true, 'space'],
    whitespace: [true,
      'check-decl',
      'check-operator',
      'check-module',
      'check-rest-spread'
    ],
    'no-multiline-string': false,
    'missing-jsdoc': false, // Too Verbose
    'no-relative-imports': false, // I dont really know why this exists,
    'import-name': false,
    'match-default-export-name': false,
    'no-submodule-imports': [true,  '@fortawesome'],
    'one-line': [true, 'check-catch', 'check-finally', 'check-else', 'check-open-brace'],
    'react-this-binding-issue': false, // since we use autobind decorator, we cant use this
    'prefer-type-cast': false,
    'export-name': false,

  }
};
