import type { RequestHandler } from '@sveltejs/kit'
import { redirect } from '@sveltejs/kit'

export const GET: RequestHandler = () => {
  throw redirect(301, '/posts/what-is-cybersecurity')
}

export const prerender = true
