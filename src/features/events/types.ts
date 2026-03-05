export interface Event {
  id: string
  name: string
  date: string
  theme: string
  image?: string
}

export interface PaginatedEvents {
  data: Event[]
  next: number | null
  prev: number | null
  pages: number
  items: number
}
