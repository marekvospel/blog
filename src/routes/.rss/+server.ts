/*
  Copyright (C) danbulant
  https://github.com/danbulant/design
*/
import type { RequestHandler } from './$types'

export const GET: RequestHandler = async ({ request }) => {
  const allPostFiles = import.meta.glob('$/routes/**/*.md')

  const allPosts = await Promise.all(
    Object.entries(allPostFiles).map(async ([path, resolver]) => {
      const { metadata } = await resolver() as any
      let postPath = path.slice(11, -3)
      if (postPath.endsWith('+page')) postPath = postPath.slice(0, -6)
      return {
        ...metadata,
        path: postPath,
      }
    })
  )

  allPosts.sort((a: any, b: any) => new Date(b?.created ?? Infinity).getTime() - new Date(a?.created ?? 0).getTime())
  return new Response(`<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
      <title>Blog - Marek Vospěl</title>
      <copyright>2022 Marek Vospěl</copyright>
      <pubDate>${new Date().toUTCString()}</pubDate>
      <ttl>180</ttl>

      ${allPosts.map(p => `
        <item>
          <title>${p.title}</title>
          <description>${p.description}</description>
          <link>https://blog.vospel.cz/${p.path}</link>
          <pubDate>${new Date(p.created).toUTCString()}</pubDate>
          <guild>${p.path}</guild>
        </item>
      `).join('\n')}
    </channel>
  </rss>`,
  {
    headers: {
      'Content-Type': 'application/rss+xml'
    }
  })
}

export const prerender = true