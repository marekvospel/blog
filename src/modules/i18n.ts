import { init, register } from 'svelte-i18n'

export const locales = ['en', 'cz']

export function registerLocales(): void {
  register('en', () => import('$locale/en.json'))
  register('cz', () => import('$locale/cz.json'))
}

export function initI18n(initialLocale: string): void {
  init({
    fallbackLocale: 'en',
    initialLocale,
  })
}
