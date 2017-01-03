import svelte from 'rollup-plugin-svelte';
import path from 'path';

export default {
  entry: path.resolve(__dirname, 'src/FaciaCardContainer.html'),
  dest: path.resolve(__dirname, 'dist/app-ssr.js'),
  format: 'cjs',
  plugins: [
    svelte({
      generate: 'ssr',
    }),
  ],
};
