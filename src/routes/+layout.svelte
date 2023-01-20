<svelte:head>
  <meta name="theme-color" content="#19b4d1">
  <meta name="google" content="notranslate nositelinksearchbox">
  <meta name="author" content="Marek Vospěl">
  <meta property="og:type" content="website">
</svelte:head>

<a href="#content" class="absolute px-4 py-2 bg-dark-200 translate-x-[-100%] focus:translate-0">Jump to content</a>
<main class="flex flex-col m-auto mx-4 my-2">
  <slot />
</main>

<style global>
  body {
    @apply bg-dark-700 text-light-100;
  }

  * {
    scrollbar-color: rgb(32, 211, 238) transparent;
  }
</style>
