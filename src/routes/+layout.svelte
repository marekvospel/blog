<script context="module" lang="ts">
  import { register, init, waitLocale } from 'svelte-i18n'

  register('en', () => import('$locale/en.json'))

  init({
    fallbackLocale: 'en',
    initialLocale: 'en',
  })

  export async function preload(_: any, session: any): Promise<void> {
    await waitLocale(session.locale)
  }
</script>

<slot />
