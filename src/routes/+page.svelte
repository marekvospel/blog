<script lang="ts">
  import ListPost from '$/lib/ListPost.svelte'
  import NavBar from '$/lib/NavBar.svelte'
  import type { PostData } from '$/types'
  import type { LayoutServerData } from '../../.svelte-kit/types/src/routes/$types'

  export let data: LayoutServerData

  $: posts = data.posts
</script>

<svelte:head>
  <title>Marek Vospěl - Blog</title>
  <meta property="og:title" content="Marek Vospěl - Blog"/>
  <meta name="description" content="Cybersecurity and web development related blog">
  <meta name="og:description" content="Cybersecurity and web development related blog">
</svelte:head>

<NavBar />
<div
  itemscope itemtype="https://schema.org/Blog"
  class="flex flex-col gap-4 px-4 py-2"
  id="content"
>
  {#each posts as post}
    <ListPost {...post} />
  {/each}
</div>
