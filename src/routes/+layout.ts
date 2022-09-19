import '$modules/unocss'
import type { LayoutLoad } from './$types'
import { initI18n, registerLocales } from '$/modules/i18n'

import { waitLocale } from 'svelte-i18n'

export const load: LayoutLoad = async ({ data }) => {
  registerLocales()

  initI18n(data.locale)

  await waitLocale(data.locale)
}
