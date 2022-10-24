import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = async ({ fetch }) => {
  const result = await fetch('/api/posts')

  return result.ok ? (await result.json()) : {}
}

export const prerender = true
