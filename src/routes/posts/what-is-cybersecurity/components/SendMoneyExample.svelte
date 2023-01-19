<script lang="ts">
  let myBalance = 100
  let bobsBalance = 100

  let amount = 50

  function sendMoneyToBob(): void {
    myBalance -= amount
    bobsBalance += amount
  }
</script>

<div
  class="
    flex flex-col gap-4 items-center justify-between
    my-4 py-4 px-8 rounded-xl
    bg-dark-400
    md:gap-6 lg:flex-row
  "
>
  <div class="flex flex-col gap-2 md:flex-row">
    <input
      type="number" bind:value={amount} class="
        px-4 py-2
        bg-dark-800 border border-dark-300 rounded-md
        disable-input-arrows
        focus-visible:outline focus-visible:outline-cyan-400 focus-visible:outline-size-[1px]
      "
    />
    <button type="button" class="px-8 py-2 rounded-md bg-cyan-400" on:click={sendMoneyToBob}>Send</button>
  </div>
  <p class="!mb-0">My balance: { myBalance }</p>
  <p class="!mb-0">Bob's balance: { bobsBalance }</p>
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
