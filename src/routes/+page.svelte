<script lang="ts">
  import ListPost from '$/lib/ListPost.svelte'
  import type { PostData } from '$/types'

  export let data: any

  $: posts = Object.values(data) as PostData[]
</script>

<svelte:head>
  <title>Marek Vospěl - Blog</title>
  <meta property="og:title" content="Marek Vospěl - Blog"/>
  <meta name="description" content="Cybersecurity and web development related blog">
  <meta name="og:description" content="Cybersecurity and web development related blog">
</svelte:head>

<div
  itemscope itemtype="https://schema.org/Blog"
  class="flex flex-col gap-4 px-4 py-2"
>
  {#each posts as post}
    <ListPost {...post} />
  {/each}
</div>
