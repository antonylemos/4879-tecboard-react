import { useMutation, useQueryClient } from '@tanstack/react-query'
import { api } from '../lib/api'
import type { Event } from '../features/events/types'
import type { EventFormValues } from '../schema'

export function useCreateEvent() {
  const queryClient = useQueryClient()

  return useMutation<Event, Error, EventFormValues>({
    mutationFn: (data) => api.post<Event>('/events', data),
    onSuccess: async () => {
      await queryClient.invalidateQueries(['getEvents'])
      await queryClient.invalidateQueries(['getInfiniteEvents'])
    },
  })
}
