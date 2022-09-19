<script lang="ts">
  import PostLayout, { type PostData } from '$lib/PostLayout.svelte'
  
  export let data: any

  let post: PostData
  $: post = Object.values(data).find((p: any) => p.path === '/hello') as PostData
</script>

<PostLayout {...post}>
  <slot />
</PostLayout>
