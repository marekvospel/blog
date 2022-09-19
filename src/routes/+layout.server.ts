// import { initI18n } from '$/modules/i18n'
import type { LayoutServerLoad } from './$types'

import { locales } from '$modules/i18n'

export const load: LayoutServerLoad = async ({ cookies }) => {
  if (!cookies.get('locale')) cookies.set('locale', 'en')

  if (!locales.includes(cookies.get('locale') ?? '')) {
    cookies.set('locale', 'en')
  }
  
  return { locale: cookies.get('locale') ?? 'en' }
}

export const prerender = true
