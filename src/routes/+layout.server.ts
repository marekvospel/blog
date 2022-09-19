import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = async ({ request }) => {
  const url = new URL(request.url)
  url.pathname = '/api/posts'
  const result = await fetch(url.toString())
  
  return result.ok ? (await result.json()) : {}
}

export const prerender = true
