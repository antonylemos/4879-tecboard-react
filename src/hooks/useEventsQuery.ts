import { useQuery, useInfiniteQuery } from '@tanstack/react-query'
import { API_BASE_URL, EVENTS_PER_PAGE } from '../lib/constants'
import type { Event, PaginatedEvents } from '../features/events/types'

interface UseEventsQueryOptions {
  page?: number
  search?: string
  theme?: string
}

export function useEventsQuery({ page = 1, search = '', theme = '' }: UseEventsQueryOptions = {}) {
  return useQuery<PaginatedEvents>({
    queryKey: ['getEvents', page, search, theme],
    queryFn: async () => {
      const params = new URLSearchParams()
      params.set('_page', String(page))
      params.set('_per_page', String(EVENTS_PER_PAGE))
      if (search) params.set('name_like', search)
      if (theme) params.set('theme', theme)
      const response = await fetch(`${API_BASE_URL}/events?${params.toString()}`)
      if (!response.ok) throw new Error('Falha ao buscar eventos')
      return response.json() as Promise<PaginatedEvents>
    },
    keepPreviousData: true,
  })
}

export function useInfiniteEventsQuery({ search = '', theme = '' }: { search?: string; theme?: string } = {}) {
  return useInfiniteQuery<PaginatedEvents>({
    queryKey: ['getInfiniteEvents', search, theme],
    queryFn: async ({ pageParam = 1 }) => {
      const params = new URLSearchParams()
      params.set('_page', String(pageParam))
      params.set('_per_page', String(EVENTS_PER_PAGE))
      if (search) params.set('name_like', search)
      if (theme) params.set('theme', theme)
      const response = await fetch(`${API_BASE_URL}/events?${params.toString()}`)
      if (!response.ok) throw new Error('Falha ao buscar eventos')
      return response.json() as Promise<PaginatedEvents>
    },
    getNextPageParam: (lastPage) => lastPage.next ?? undefined,
  })
}

export function useEventByIdQuery(id: string) {
  return useQuery<Event>({
    queryKey: ['getEvent', id],
    queryFn: async () => {
      const response = await fetch(`${API_BASE_URL}/events/${id}`)
      if (!response.ok) throw new Error('Evento não encontrado')
      return response.json() as Promise<Event>
    },
    enabled: Boolean(id),
  })
}
