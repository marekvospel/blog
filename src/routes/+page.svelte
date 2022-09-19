<script lang="ts">
  import type { PostData } from '$/lib/PostLayout.svelte'

  export let data: any

  $: posts = Object.values(data) as PostData[]
</script>

<div itemscope itemtype="https://schema.org/Blog">
  {#each posts as post}
    <a itemprop="blogPost" itemtype="https://schema.org/BlogPosting" href={post?.path}>
      <h3>{ post.title }</h3>
      <p>{ post.description }</p>
    </a>
  {/each}
</div>
