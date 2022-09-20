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
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: [-2, -1, 0, 1, 2, 3, 4],
        datasets: [{
          data: [-50, -100, undefined, 100, 50, 100 / 3, 20],
          borderColor: 'rgba(0, 0, 0, 0)',
          pointBackgroundColor: 'red',
        }],
      },
      options: {
        responsive: true,
        scales: {
          x: {
            grid: {
              color(context): string {
                // @ts-expect-error
                // eslint-disable-next-line eqeqeq
                return (context.tick.label == 0) ? '#ffffff80' : '#ffffff20'
              },
              borderColor: '#fff',
            },
          },
          y: {
            grid: {
              color(context): string {
                // @ts-expect-error
                // eslint-disable-next-line eqeqeq
                return (context.tick.label == 0) ? '#ffffff80' : '#ffffff20'
              },
              borderColor: '#fff',
            },
          },
        },
      },
    })
  })

</script>

<div class="my-4">
  <canvas bind:this={canvas}></canvas>
</div>
