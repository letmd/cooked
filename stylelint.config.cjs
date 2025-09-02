// stylelint.config.cjs
module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue',
    'stylelint-config-recess-order',
  ],
  overrides: [
    {
      files: ['**/*.{scss,sass}'],
      customSyntax: 'postcss-scss',
    },
    {
      files: ['**/*.vue'],
      customSyntax: 'postcss-html',
    },
  ],
  plugins: ['stylelint-order', 'stylelint-high-performance-animation'],
  rules: {
    // Приклади корисних правил, які не конфліктують із Prettier
    'color-hex-length': 'short',
    'selector-class-pattern': [
      '^[a-z][a-z0-9\\-]*$',
      { message: 'Використовуйте kebab-case для назв класів' },
    ],
    'scss/dollar-variable-pattern': [
      '^[a-z][a-z0-9\\-]*$',
      { message: 'Використовуйте kebab-case для змінних SCSS' },
    ],

    // Загальні best-practices
    'property-no-vendor-prefix': true,
    'value-no-vendor-prefix': true,
    'color-named': 'never',
    'length-zero-no-unit': true,
    'declaration-block-no-duplicate-properties': [
      true,
      { ignore: ['consecutive-duplicates-with-different-values'] },
    ],
    'no-descending-specificity': true,
    'selector-max-id': 1,
    'selector-max-compound-selectors': 3,
    'max-nesting-depth': 3,

    // SCSS best-practices
    'scss/selector-no-redundant-nesting-selector': true,
    'scss/at-extend-no-missing-placeholder': true,
    'scss/no-global-function-names': true,
    'scss/double-slash-comment-whitespace-inside': null,

    // SCSS at-rules: вимикаємо core і вмикаємо SCSS-еквівалент
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,

    // Функції: вимикаємо core і дозволяємо ваші SCSS-функції
    'function-no-unknown': null,
    'scss/function-no-unknown': false,

    // Порядок структур (змінні → custom props → декларації → вкладені правила)
    'order/order': [
      ['dollar-variables', 'custom-properties', 'declarations', 'rules'],
      { unspecified: 'bottomAlphabetical' },
    ],

    // Дозволяємо кастомні функції у значеннях декларацій
    'declaration-property-value-no-unknown': [
      true,
      {
        ignoreFunctions: ['em'],
      },
    ],

    // Плагіни
    'plugin/no-low-performance-animation-properties': true,
  },
};
