import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  /* Consult https://github.com/sveltejs/svelte-preprocess
     for more information about preprocessors */
  preprocess: preprocess(),

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
