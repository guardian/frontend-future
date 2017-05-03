module.exports = {
    parser: 'babel-eslint',
    extends: ['airbnb', 'prettier', 'prettier/flowtype', 'prettier/react'],
    parserOptions: { sourceType: 'module', ecmaVersion: 2017, jsx: true },
    plugins: ['jest', 'prettier'],
    env: { browser: true, node: true, es6: true, 'jest/globals': true },
    globals: { el: true, render: true, BROWSER: true, SERVER: true },
    settings: { react: { pragma: 'h' } },
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
        'import/prefer-default-export': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    },
};
