// @flow

module.exports = {
    parser: 'babel-eslint',
    env: { browser: true, node: true, es6: true, jest: true },
    extends: [
        'airbnb',
        'plugin:flowtype/recommended',
        'prettier',
        'prettier/flowtype',
        'prettier/react',
    ],
    plugins: ['flow-header', 'flowtype', 'prettier'],
    parserOptions: {
        ecmaVersion: '2017',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        react: { pragma: 'h' },
        'import/resolver': {
            webpack: {
                config: '__config__/webpack.config.js',
            },
        },
    },
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

        // these exentions never need to be supplied for imports
        'import/extensions': [
            'error',
            'always',
            {
                js: 'never',
                jsx: 'never',
            },
        ],
        'import/no-extraneous-dependencies': 'off',

        // from frontend
        'no-extend-native': 'error',
        'func-style': ['error', 'expression', { allowArrowFunctions: true }],
        // disallow naming variables 'guardian', because
        // window.guardian is our global config/settings object
        'id-blacklist': ['error', 'guardian'],
        // flow should take care of our return values
        'consistent-return': 'off',

        // react API stuff
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
    },
    globals: {
        BROWSER: true,
        SERVER: true,
    },
};
