/**
 * @rushstack/eslint-patch is used to include plugins as dev
 * dependencies instead of imposing them as peer dependencies
 *
 * https://www.npmjs.com/package/@rushstack/eslint-patch
 */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  overrides: [
    {
      files: ['*.ts', '*.mts', '*.cts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: true
      },
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript'
      ],
      rules: {
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
          'error',
          {argsIgnorePattern: '^_', varsIgnorePattern: '^_'}
        ],
        'prefer-destructuring': 'off',
        '@typescript-eslint/prefer-destructuring': [
          'error',
          {array: true, object: true},
          {
            enforceForRenamedProperties: true,
            enforceForDeclarationWithTypeAnnotation: true
          }
        ],
        'no-magic-numbers': 'off',
        '@typescript-eslint/no-magic-numbers': [
          'error',
          {
            ignore: [0, 1, 2],
            enforceConst: true,
            ignoreDefaultValues: true,
            ignoreClassFieldInitialValues: true,
            ignoreEnums: true,
            ignoreNumericLiteralTypes: true,
            ignoreReadonlyClassProperties: true,
            ignoreTypeIndexes: true
          }
        ],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/explicit-function-return-type': [
          'error',
          {allowExpressions: true}
        ]
      }
    },
    {
      files: [
        '**/test/**',
        '**/tests/**',
        '**/spec/**',
        '**/__tests__/**',
        '*.test.*',
        '*.spec.*',
        '*.e2e.*',
        '*.e2e-spec.*'
      ],
      rules: {
        '@typescript-eslint/no-magic-numbers': 'off'
      }
    }
  ],
  ignorePatterns: ['*.d.ts']
}
