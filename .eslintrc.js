module.exports = {
    parser: 'babel-eslint',
    extends: [ 'airbnb', 'prettier' ],
    parserOptions: { sourceType: 'module', ecmaVersion: 2017 },
    plugins: [ 'prettier' ],
    env: { browser: true, node: true, es6: true, commonjs: true },
    rules: {
        'prettier/prettier': [
            'error',
            {
                trailingComma: 'es5',
                singleQuote: true,
                bracketSpacing: true,
                tabWidth: 4,
            },
        ],
    },
};
