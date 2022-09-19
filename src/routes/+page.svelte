<script lang="ts">
  import ListPost from '$/lib/ListPost.svelte'
  import type { PostData } from '$/types'

  export let data: any

  $: posts = Object.values(data) as PostData[]
</script>

<div
  itemscope itemtype="https://schema.org/Blog"
  class="flex flex-col px-4 py-2"
>
  {#each posts as post}
    <ListPost {...post} />
  {/each}
</div>
