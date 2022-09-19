<script lang="ts">
  import { Chart, LineController, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js'
  import { onMount } from 'svelte'

  let canvas: HTMLCanvasElement

  onMount(() => {
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    Chart.register(LineController)
    Chart.register(CategoryScale)
    Chart.register(LinearScale)
    Chart.register(PointElement)
    Chart.register(LineElement)
    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [-2, -1, 0, 1, 2, 3, 4],
        datasets: [{
          data: [-50, -100, undefined, 100, 50, 25, 100 / 3, 20],
          borderColor: 'rgba(0, 0, 0, 0)',
          pointBackgroundColor: 'red',
        }],
      },
      options: { responsive: true },
    })
  })

</script>

<canvas bind:this={canvas}></canvas>
