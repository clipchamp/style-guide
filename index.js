module.exports = {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    plugins: ['jest'],
    extends: [
        'plugin:jest/recommended',
        'plugin:@typescript-eslint/recommended', // uses typescript-specific linting rules
        'plugin:react/recommended', // uses react-specific linting rules
        'prettier', // enables eslint-plugin-prettier and eslint-config-prettier
        'prettier/@typescript-eslint',
        'prettier/react',
        'prettier/babel'
    ],
    rules: {
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/camelcase': 'off',
        'react/prop-types': 'off',
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
        'react/no-unescaped-entities': 'off',
        'react/display-name': 'off',
        'react/no-deprecated': 'off',
        'react/no-direct-mutation-state': 'off',
        'react/no-string-refs': 'off',
        'react/require-render-return': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'off'
    },
};
