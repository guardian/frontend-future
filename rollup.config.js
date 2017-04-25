import resolve from 'rollup-plugin-node-resolve';
import commonJS from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import inject from 'rollup-plugin-inject';

export default {
    entry: 'src/main.js',
    format: 'cjs',
    plugins: [
        resolve(),
        commonJS({
            extensions: [ '.js', '.json' ],
            namedExports: {
                preact: [ 'h' ],
                'styletron-preact': [ 'styled', 'StyletronProvider' ],
            },
        }),
        babel({ exclude: 'node_modules/**' }),
        inject({
            include: '**/*.js',
            exclude: 'node_modules/**',
            modules: {
                h: [ 'preact', 'h' ],
                render: 'preact-render-to-string',
                Styletron: 'styletron-server',
                StyletronProvider: [ 'styletron-preact', 'StyletronProvider' ],
                styled: [ 'styletron-preact', 'styled' ],
            },
        }),
    ],
    dest: 'dist/prod.js',
};
