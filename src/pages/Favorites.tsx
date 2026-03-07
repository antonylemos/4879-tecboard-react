import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { useFavorites } from '../hooks/useFavorites'
import { EventCard } from '../components/EventCard'
import { API_BASE_URL } from '../lib/constants'
import type { Event } from '../features/events/types'

export function Favorites() {
  const { favoriteIds } = useFavorites()

  const { data: allEvents, isLoading } = useQuery<Event[]>({
    queryKey: ['allEvents'],
    queryFn: async () => {
      const response = await fetch(`${API_BASE_URL}/events`)
      if (!response.ok) throw new Error('Falha ao buscar eventos')
      return response.json() as Promise<Event[]>
    },
    enabled: favoriteIds.length > 0,
  })

  const favoriteEvents = allEvents?.filter((e) => favoriteIds.includes(e.id)) ?? []

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#06151A', py: 6, px: 4 }}>
      <Button component={Link} to="/" sx={{ mb: 4 }}>
        ← Voltar ao Board
      </Button>

      <Typography variant="h4" component="h1" sx={{ mb: 4, textAlign: 'center' }}>
        Meus Favoritos
      </Typography>

      {favoriteIds.length === 0 && (
        <Typography sx={{ textAlign: 'center', color: '#aaa' }}>
          Você ainda não favoritou nenhum evento.
        </Typography>
      )}

      {isLoading && <Typography sx={{ textAlign: 'center' }}>Carregando...</Typography>}

      <Grid container spacing={3} sx={{ maxWidth: '1200px', mx: 'auto' }}>
        {favoriteEvents.map((event) => (
          <Grid key={event.id}>
            <EventCard event={event} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
