import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess'
import { mdsvex } from 'mdsvex'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md'],
  /* Consult https://github.com/sveltejs/svelte-preprocess
     for more information about preprocessors */
  preprocess: [
    preprocess(),
    mdsvex({ extensions: ['.md'] }),
  ],

  kit: {
    adapter: adapter(),
    alias: {
      $: 'src',
      $lib: 'src/lib',
      $modules: 'src/modules',
      $locale: 'src/locale',
    },
  },
}

export default config
