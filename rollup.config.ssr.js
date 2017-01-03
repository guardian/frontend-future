import svelte from 'rollup-plugin-svelte';

export default {
  entry: 'prototypes/svelte/src/FaciaCardContainer.html',
  dest: 'prototypes/svelte/dist/app-ssr.js',
  format: 'cjs',
  plugins: [
    svelte({
      generate: 'ssr',
    }),
  ],
};
