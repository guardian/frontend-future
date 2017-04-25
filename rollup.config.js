import resolve from 'rollup-plugin-node-resolve';
import commonJS from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import inject from 'rollup-plugin-inject';
import progress from 'rollup-plugin-progress';

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
        babel({
            babelrc: false,
            exclude: 'node_modules/**',
            sourceMap: true,
            presets: [ [ 'env', { modules: false, targets: { node: 6 } } ] ],
            plugins: [
                'external-helpers',
                [ 'transform-react-jsx', { pragma: 'h' } ],
            ],
        }),
        inject({
            include: '**/*.js',
            exclude: 'node_modules/**',
            modules: { h: [ 'preact', 'h' ] },
        }),
        progress({ clearLine: false }),
    ],
    dest: 'dist/prod.js',
};
