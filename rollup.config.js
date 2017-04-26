import fs from 'fs';
import path from 'path';

import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import inject from 'rollup-plugin-inject';
import progress from 'rollup-plugin-progress';
import uglify from 'rollup-plugin-uglify';
import filesize from 'rollup-plugin-filesize';
import replace from 'rollup-plugin-replace';
import conditional from 'rollup-plugin-conditional';

const nodeTarget = parseFloat(fs.readFileSync(path.resolve('.nvmrc'), 'utf8'));

export default {
    entry: 'src/index.js',
    dest: `dist/${process.env.target}.js`,
    format: process.env.target === 'browser' ? 'iife' : 'cjs',
    plugins: [
        replace({
            BROWSER: process.env.target === 'browser',
            SERVER: process.env.target === 'server',
        }),
        resolve({ jsnext: true }),
        commonjs({
            extensions: [ '.js', '.json' ],
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
                            : { node: nodeTarget },
                    },
                ],
            ],
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
        progress(),
        conditional(process.env.target === 'browser', [ uglify() ]),
        filesize(),
    ],
};
