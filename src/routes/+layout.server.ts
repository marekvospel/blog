import type { LayoutServerLoad } from './$types'
import type { PostData } from '$/types'

interface Response {
  posts: PostData[]
}

export const load: LayoutServerLoad = async ({ fetch }): Promise<Response> => {
  const result = await fetch('/api/posts')

  return { posts: result.ok ? (await result.json()) : [] }
}

export const prerender = true
