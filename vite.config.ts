import type { UserConfig } from 'vite'

import { sveltekit } from '@sveltejs/kit/vite'
import Unocss from 'unocss/vite'
import Icons from 'unplugin-icons/vite'
import { presetUno } from 'unocss'
import transformerDirective from '@unocss/transformer-directives'

const config: UserConfig = {
  plugins: [
    sveltekit(),
    Unocss({
      presets: [
        presetUno(),
      ],
      transformers: [
        transformerDirective(),
      ],
    }),
    Icons({
      autoInstall: true,
      compiler: 'svelte',
    }),
  ],
  define: {
    __BUILD_DATE__: JSON.stringify(Date.now())
  }
}

export default config
