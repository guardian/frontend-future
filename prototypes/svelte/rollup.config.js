import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';
import svelte from 'rollup-plugin-svelte';
import path from 'path';

export default {
  entry: path.resolve(__dirname, 'src/main.js'),
  dest: path.resolve(__dirname, 'dist/main.js'),
  format: 'iife',
  plugins: [
    eslint({
      include: [
        path.resolve(__dirname, 'src/**/*.js'),
      ],
    }),
    babel({
      include: [path.resolve(__dirname, 'src/*.js')],
    }),
    svelte({
      // By default, all .html and .svelte files are compiled
      extensions: ['.html'],

      // You can restrict which files are compiled
      // using `include` and `exclude`
      include: path.resolve(__dirname, 'src/**.html'),
    }),
  ],
};
