/*
  Copyright (C) danbulant
  https://github.com/danbulant/design
*/
import { json } from '@sveltejs/kit'
import type { RequestHandler } from './$types'

export const GET: RequestHandler = async () => {
  const allPostFiles = import.meta.glob('$/routes/posts/*/*.md')

  const allPosts = await Promise.all(
    Object.entries(allPostFiles).map(async ([path, resolver]) => {
      const { metadata } = await resolver() as any
      let postPath = path.slice(11, -3)
      if (postPath.endsWith('+page'))
        postPath = postPath.slice(0, -6)
      return {
        ...metadata,
        path: postPath,
      }
    }),
  )

  allPosts.sort((a: any, b: any) => new Date(b?.created ?? Number.POSITIVE_INFINITY).getTime() - new Date(a?.created ?? 0).getTime())

  return json(allPosts)
}

export const prerender = true
