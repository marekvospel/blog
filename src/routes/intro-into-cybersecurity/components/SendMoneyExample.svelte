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
    flex flex-row gap-6 items-center justify-between
    my-4 py-4 px-8 rounded-xl
    bg-dark-400
  "
>
  <div>
    <input
      type="number" bind:value={amount} class="
        px-4 py-2
        bg-dark-800 border border-dark-300 rounded-md
        disable-input-arrows
        focus-visible:outline focus-visible:outline-cyan-400 focus-visible:outline-size-[1px]
      "
    >
    <button type="button" class="px-8 py-2 rounded-md bg-cyan-400" on:click={sendMoneyToBob}>Send</button>
  </div>
  <p>My balance: { myBalance }</p>
  <p>Bob's balance: { bobsBalance }</p>
</div>

<style>
  input[type=number] {
    -moz-appearance: textfield;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0
  }
</style>
