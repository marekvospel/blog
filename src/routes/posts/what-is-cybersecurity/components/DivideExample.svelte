<script lang="ts">

  let number = 1
  $: divided = 100 / number

</script>

<div
  class="
    flex flex-row gap-6 items-center justify-between
    my-4 py-4 px-8 rounded-xl
    bg-dark-400
  "
>
  <input
    type="number" bind:value={number} class="
      px-4 py-2
      bg-dark-800 border border-dark-300 rounded-md
      disable-input-arrows
      focus-visible:outline focus-visible:outline-cyan-400 focus-visible:outline-size-[1px]
    "
  />
  <p>Divided: { divided }</p>
</div>

<style>
  input[type=number] {
    -moz-appearance: textfield;
    appearance: textfield;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0
  }
</style>
