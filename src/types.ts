export interface Author {
  link?: string
  name?: string
}

export interface PostData {
  title: string | undefined
  description: string | undefined
  path: string | undefined

  created: string | undefined
  updated: string | undefined

  author: Author | undefined
}
