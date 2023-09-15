const formatter = new Intl.RelativeTimeFormat(undefined, { numeric: 'auto' })

const DIVISIONS = [
  { amount: 60, name: 'seconds' },
  { amount: 60, name: 'minutes' },
  { amount: 24, name: 'hours' },
  { amount: 7, name: 'days' },
  { amount: 4.34524, name: 'weeks' },
  { amount: 12, name: 'months' },
  { amount: Number.POSITIVE_INFINITY, name: 'years' },
]

export function formatTimeAgo(date: string | number): string | undefined {
  let duration = (new Date(date).getTime() - new Date().getTime()) / 1000

  for (let i = 0; i <= DIVISIONS.length; i++) {
    const division = DIVISIONS[i]
    if (Math.abs(duration) < division.amount)
      return formatter.format(duration > 0 ? Math.floor(duration) : Math.ceil(duration), division.name as any)

    duration /= division.amount
  }
}
