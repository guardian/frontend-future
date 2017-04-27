import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import progress from 'rollup-plugin-progress';
import uglify from 'rollup-plugin-uglify';
import filesize from 'rollup-plugin-filesize';
import replace from 'rollup-plugin-replace';
import conditional from 'rollup-plugin-conditional';

export default {
    entry: 'src/index.js',
    dest: `dist/${process.env.target}.js`,
    format: process.env.target === 'browser' ? 'iife' : 'cjs',
    moduleName: 'graun',
    plugins: [
        replace({
            BROWSER: process.env.target === 'browser',
            SERVER: process.env.target === 'server',
        }),
        resolve({ jsnext: true }),
        commonjs({
            namedExports: {
                'styletron-preact': [ 'styled', 'StyletronProvider' ],
            },
        }),
        babel({
            babelrc: false,
            exclude: 'node_modules/!(preact)',
            sourceMap: true,
            presets: [
                [
                    'env',
                    {
                        modules: false,
                        targets: process.env.target === 'browser'
                            ? null
                            : { node: 'current' },
                    },
                ],
            ],
            plugins: [
                [ 'transform-react-jsx', { pragma: 'h' } ],
                'preact-require',
                'external-helpers',
            ],
        }),
        progress(),
        conditional(process.env.target === 'browser', [ uglify() ]),
        filesize(),
    ],
};
