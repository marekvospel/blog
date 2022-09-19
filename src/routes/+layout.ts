import '$modules/unocss'
import { init, register } from 'svelte-i18n'

register('en', () => import('$locale/en.json'))

init({
  fallbackLocale: 'en',
  initialLocale: 'en',
})

export const prerender = true
