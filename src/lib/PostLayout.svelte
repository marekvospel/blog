<script context="module" lang="ts">
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
</script>

<script lang="ts">

  export let title: string | undefined
  export let description: string | undefined

  export let created: string | undefined
  export let updated: string | undefined

  export let author: Author | undefined
</script>

<svelte:head>
  <title>{ title }</title>
  <meta name="description" content={description}>
</svelte:head>

<article itemscope itemtype="http://schema.org/Article">
  {#if created}
    <meta itemprop="datePublished" content={created}/>
  {/if}
  {#if updated}
    <meta itemprop="dateModified" content={updated}/>
  {/if}
  <meta itemprop="publisher" content="vospel.cz" />
  <slot />
  {#if author?.name}
    <span itemprop="author" itemtype="http://schema.org/Person">
      By <a itemprop="name" href={author.link}>{ author.name }</a>
    </span>
  {/if}
</article>
