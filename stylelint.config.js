const bemMatching = /^[a-z]([a-z0-9-]+)?(__([a-z0-9]+-?)+)?(--([a-z0-9]+-?)+){0,2}$/

module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-hudochenkov/dollar-variables',
    'stylelint-config-hudochenkov/order'
  ],
  overrides: [
    {
      files: [ '*.vue', '**/*.vue' ],
      customSyntax: 'postcss-html',
      rules: {
        'selector-pseudo-element-no-unknown': [
          true,
          {
            ignorePseudoElements: [ 'v-deep' ]
          }
        ]

      }
    }
  ],
  rules: {
    // DEFAULT
    indentation: 2,
    'no-empty-source': null,
    'function-no-unknown': [
      true,
      {
        ignoreFunctions: [
          'em', 'rem', 'theme'
        ]
      }
    ],
    'selector-class-pattern': bemMatching,
    'max-nesting-depth': 2,
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: [
          'v-deep'
        ]
      }
    ],
    // ORDER
    'order/properties-alphabetical-order': null,
    // SCSS
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'layer',
          'apply',
          'variants',
          'responsive',
          'screen'
        ]
      }
    ]
  }
}
