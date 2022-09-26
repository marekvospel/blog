import { browser } from '$app/environment'
import { goto } from '$app/navigation'
import type { PageLoad } from './$types'

export const load: PageLoad = () => {
  if (browser) {
    goto('/what-is-cybersecurity')
  }
}
