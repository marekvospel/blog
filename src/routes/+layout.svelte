<script lang="ts">
</script>
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
