import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';
import svelte from 'rollup-plugin-svelte';

export default {
  entry: 'prototypes/svelte/src/main.js',
  dest: 'prototypes/svelte/dist/main.js',
  format: 'iife',
  plugins: [
    eslint({
      include: [
        './prototypes/svelte/src/**/*.js',
      ],
    }),
    babel({
      include: ['./prototypes/svelte/src/*.js'],
    }),
    svelte({
      // By default, all .html and .svelte files are compiled
      extensions: ['.html'],

      // You can restrict which files are compiled
      // using `include` and `exclude`
      include: './prototypes/svelte/src/**.html',
    }),
  ],
};