export function formatDate(date: string): string {
  // already formatted as DD/MM/YYYY
  if (/^\d{2}\/\d{2}\/\d{4}$/.test(date)) return date

  // ISO date → DD/MM/YYYY
  const d = new Date(date)
  if (isNaN(d.getTime())) return date
  return d.toLocaleDateString('pt-BR')
}

export function formatEventAge(date: string): string {
  const d = new Date(date)
  if (isNaN(d.getTime())) return ''
  const now = new Date()
  const diffMs = now.getTime() - d.getTime()
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24))
  if (days < 0) return `Em ${Math.abs(days)} dias`
  if (days === 0) return 'Hoje'
  if (days === 1) return 'Ontem'
  return `Há ${days} dias`
}

export function formatTheme(theme: string): string {
  return theme.charAt(0).toUpperCase() + theme.slice(1)
}
