import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess'
import { mdsvex } from 'mdsvex'

import rehypeKatexSvelte from 'rehype-katex-svelte'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md'],
  /* Consult https://github.com/sveltejs/svelte-preprocess
     for more information about preprocessors */
  preprocess: [
    preprocess(),
    mdsvex({
      extensions: ['.md'],
      smartypants: {
        quotes: false,
        backticks: 'all',
      },
      rehypePlugins: [
        rehypeKatexSvelte,
      ],
      remarkPlugins: [
        remarkGfm,
        remarkMath,
      ],
      layout: { _: 'src/lib/PostLayout.svelte' },
    }),
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
