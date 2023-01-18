<script lang="ts">
  import { Chart, LineController, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js'
  import { onMount } from 'svelte'

  Chart.register(LineController)
  Chart.register(CategoryScale)
  Chart.register(LinearScale)
  Chart.register(PointElement)
  Chart.register(LineElement)

  let canvas: HTMLCanvasElement

  onMount(() => {
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7],
        datasets: [{
          data: [-20, -100 / 3, -50, -100, undefined, 100, 50, 100 / 3, 25, 20, 100 / 6, 100 / 7],
          borderColor: 'rgba(0, 0, 0, 0)',
          backgroundColor: 'cyan',
        }],
      },
      options: {
        responsive: true,
        scales: {
          x: {
            grid: {
              color(context): string {
                return (context.tick.label.toString() === '0') ? '#ffffff80' : '#ffffff20'
              },
            },
          },
          y: {
            grid: {
              color(context): string {
                return (context.tick.label.toString() === '0') ? '#ffffff80' : '#ffffff20'
              },
            },
          },
        },
        borderColor: '#fff',
      },
    })
  })

</script>

<div class="my-4">
  <canvas bind:this={canvas} />
</div>
