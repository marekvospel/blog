<script>
  import NavBar from '$lib/NavBar.svelte'

  /** @type string */
  export let title = ''
  /** @type string */
  export let description = ''

  /** @type string | undefined */
  export let created
  /** @type string | undefined */
  export let updated
  /** @type string[] */
  export let tags = []
  /** @type string | undefined */
  export let thumbnail = undefined

  let thumbnailUrl = undefined
  $: if (thumbnail) {
    try {
      const parsed = new URL(thumbnail)

      if (parsed.protocol === 'http:' || parsed.protocol === 'https:') {
        thumbnailUrl = thumbnail
      } else {
        thumbnailUrl = `https://pub-dc4c4b46dcdb4b8cafe7c4122362233b.r2.dev/posts/${encodeURIComponent(thumbnail)}`
      }
    } catch {
      thumbnailUrl = `https://pub-dc4c4b46dcdb4b8cafe7c4122362233b.r2.dev/posts/${encodeURIComponent(thumbnail)}`
    }
  }

  /** @type import('$/types').Author | undefined*/
  export let author
</script>

<svelte:head>
  <title>{ title }</title>
  <meta name="og:title" content={title} />
  <meta name="twitter:title" content={title} />
  <meta name="description" content={description} />
  <meta name="og:description" content={description} />
  <meta name="twitter:description" content={description} />
  <meta name="keywords" content={tags.join(', ')} />
  <meta name="twitter:card" content="summary_large_image">
  {#if thumbnail}
    <meta name="og:image" content={thumbnailUrl} />
    <meta name="twitter:image" content={thumbnailUrl} />
  {/if}
</svelte:head>

<NavBar />
<article itemscope itemtype="http://schema.org/Article" class="mb-8 max-w-[100ch] w-[100%] mx-auto" id="content">
  {#if created}
    <meta itemprop="datePublished" content={created} />
  {/if}
  {#if updated}
    <meta itemprop="dateModified" content={updated} />
  {/if}
  {#if thumbnail}
    <meta itemprop="thumbnailUrl" content={thumbnailUrl} />
  {/if}
  <meta itemprop="publisher" content="vospel.cz" />
  <meta itemprop="keywords" content={tags.join(', ')} />
  <span><a href="/" class="text-cyan-400 hover:text-cyan-200 transition-colors duration-300">Blog</a> <span class="text-dark-50">/</span></span>
  <div class="markdown">
    <slot />
  </div>
  {#if author?.name}
    <span itemprop="author" itemtype="http://schema.org/Person" class="hidden">
      By <a itemprop="name" href={author.link}>{ author.name }</a>
    </span>
  {/if}
</article>

<style>

  .markdown :global(h1) {
    @apply text-3xl font-extrabold border-b border-opacity-75 border-slate-600 mt-2 mb-4 pb-1;
  }

  .markdown :global(h2) {
    @apply text-2xl font-extrabold border-b border-opacity-75 border-slate-600 mt-4 mb-2 pb-1;
  }

  .markdown :global(h3) {
    @apply text-xl font-bold mt-4 mb-2;
  }

  .markdown :global(h4) {
    @apply text-lg font-bold mt-4 mb-2;
  }

  .markdown :global(h5) {
    @apply font-semibold mt-4 mb-2;
  }

  .markdown :global(p) {
    @apply mb-4;
  }

  /* TODO: add anchor style */

  .markdown :global(code) {
    @apply bg-dark-800 border-dark-400 border rounded-md p-1 overflow-x-auto;
  }

  .markdown :global(pre[class*="language-"]) {
    @apply bg-transparent p-0;
  }

  .markdown :global(pre) {
    @apply mb-4;
  }

  .markdown :global(pre > code) {
    @apply block w-[100%] my-1;
  }

  .markdown :global(strong) {
    @apply font-extrabold;
  }

  .markdown > :global(:first-child) {
    @apply mt-0;
  }

  .markdown > :global(:last-child) {
    @apply mb-0;
  }
</style>
