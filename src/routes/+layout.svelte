<script lang="ts">
  import 'prism-themes/themes/prism-one-dark.min.css'
</script>
<main class="flex flex-col m-auto mx-4 my-2">
  <slot />
</main>

<style global>
  body {
    @apply bg-dark-700 text-light-100;
  }
</style>
