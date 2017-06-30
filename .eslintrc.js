// @flow
module.exports = {
    parser: 'babel-eslint',
    extends: ['airbnb', 'prettier', 'prettier/flowtype', 'prettier/react'],
    parserOptions: { sourceType: 'module', ecmaVersion: '2017', jsx: true },
    plugins: ['flow-header', 'jest', 'html', 'prettier'],
    env: { browser: true, node: true, es6: true, 'jest/globals': true },
    settings: {
        react: { pragma: 'h' },
        'import/resolver': {
            webpack: {
                config: 'config/webpack.config.js',
            },
        },
    },
    globals: { style: true },
    rules: {
        'import/extensions': [
            'error',
            'always',
            {
                js: 'never',
                jsx: 'never',
            },
        ],
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
        'flow-header/flow-header': 'error',
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
        'react/jsx-filename-extension': [1, { extensions: ['.jsx'] }],
    },
};
