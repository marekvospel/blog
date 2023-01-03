import type { RequestHandler } from './$types'
import type { PostData } from "$/types";

export const GET: RequestHandler = async ({ fetch }) => {
  const allPosts = await (await fetch('/api/posts')).json() as PostData[]

  return new Response(`<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
      <title>Blog - Marek Vospěl</title>
      <description>Cybersecurity and web development related blog</description>
      <link>https://blog.vospel.cz</link>
      <copyright>2022 Marek Vospěl</copyright>
      <pubDate>${new Date().toUTCString()}</pubDate>
      <ttl>180</ttl>

      ${allPosts.map(p => `
        <item>
          <title>${p.title}</title>
          <description>${p.description}</description>
          <link>https://blog.vospel.cz${p.path}</link>
          <pubDate>${new Date(p.created ?? Date.now()).toUTCString()}</pubDate>
          <guid>${p.path}</guid>
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
