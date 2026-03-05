import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { EventCard } from './EventCard'
import type { Event } from '../features/events/types'

interface EventListProps {
  events: Event[]
  isLoading?: boolean
  isError?: boolean
}

export function EventList({ events, isLoading, isError }: EventListProps) {
  if (isLoading) return <Typography>Carregando eventos...</Typography>
  if (isError) return <Typography>Erro ao carregar eventos.</Typography>
  if (events.length === 0) return <Typography>Nenhum evento encontrado.</Typography>

  return (
    <Grid container spacing={3} sx={{ maxWidth: '1200px', mx: 'auto' }}>
      {events.map((event) => (
        <Grid item xs={12} sm={6} md={4} key={event.id}>
          <EventCard event={event} />
        </Grid>
      ))}
    </Grid>
  )
}
