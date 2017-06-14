// @flow
module.exports = {
    parser: 'babel-eslint',
    extends: ['airbnb', 'prettier', 'prettier/flowtype', 'prettier/react'],
    parserOptions: { sourceType: 'module', ecmaVersion: 2017, jsx: true },
    plugins: ['flowtype-errors', 'flow-header', 'jest', 'prettier'],
    env: { browser: true, node: true, es6: true, 'jest/globals': true },
    globals: { el: true, render: true, BROWSER: true, SERVER: true },
    settings: { react: { pragma: 'h' }, 'import/resolver': 'webpack' },
    rules: {
        'prettier/prettier': [
            'error',
            {
                trailingComma: 'es5',
                singleQuote: true,
                bracketSpacing: true,
                tabWidth: 4,
                jsxBracketSameLine: true,
            },
        ],

        'flowtype-errors/show-errors': 'error',
        'flow-header/flow-header': 'error',

        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    },
};
