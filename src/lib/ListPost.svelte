<script lang="ts">
  import { formatTimeAgo } from '$/utils/date.util'
  import IcBaselineKeyboardArrowRight from '~icons/ic/baseline-keyboard-arrow-right'

  export let title = ''
  export let description = ''
  export let path = ''
  export let created: string | undefined

  $: timeAgo = formatTimeAgo(created ?? Date.now())
</script>

<a
  itemprop="blogPost" itemtype="https://schema.org/BlogPosting" href={path}
  class="px-6 py-4 flex flex-row rounded-2xl bg-dark-400 group"
>
  <div class="flex flex-col gap-1">
    <h3 class="text-lg group-hover:text-cyan-400 transition-colors duration-300">{ title }</h3>
    <p class="text-sm">{ description }</p>
    <p class="text-xs">{ timeAgo }</p>
  </div>
  <div class="flex items-center justify-center ml-auto">
    <IcBaselineKeyboardArrowRight class="text-3xl group-hover:text-cyan-400 transition-colors duration-300" />
  </div>
</a>
