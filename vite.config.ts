import type { UserConfig } from 'vite'

import { sveltekit } from '@sveltejs/kit/vite'
import Unocss from 'unocss/vite'
import { presetUno } from 'unocss'

const config: UserConfig = {
  plugins: [
    sveltekit(),
    Unocss({
      presets: [
        presetUno(),
      ],
    }),
  ],
}

export default config
