<script>
  import NavBar from '$lib/NavBar.svelte'

  /** @type string */
  export let title = ''
  /** @type string */
  export let description = ''

  /** @type string | undefined*/
  export let created
  /** @type string | undefined*/
  export let updated
  /** @type string[] */
  export let tags = []


  /** @type import('$/types').Author | undefined*/
  export let author
</script>

<svelte:head>
  <title>{ title }</title>
  <meta name="og:title" content={title} />
  <meta name="description" content={description} />
  <meta name="og:description" content={description} />
  <meta name="keywords" content={tags.join(', ')} />
  <meta />
</svelte:head>

<NavBar />
<article itemscope itemtype="http://schema.org/Article" class="mb-8 max-w-[100ch] w-[100%] mx-auto" id="content">
  {#if created}
    <meta itemprop="datePublished" content={created} />
  {/if}
  {#if updated}
    <meta itemprop="dateModified" content={updated} />
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
    @apply text-3xl font-extrabold border-b-2 border-opacity-75 border-dark-400 mt-2 mb-4 pb-1;
  }

  .markdown :global(h2) {
    @apply text-2xl font-extrabold border-b-2 border-opacity-75 border-dark-400 mt-4 mb-2 pb-1;
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

  .markdown :global(code) {
    @apply bg-dark-800 border-dark-400 border rounded-md p-1;
  }

  .markdown :global(pre[class*="language-"]) {
    @apply bg-transparent m-0 p-0;
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
