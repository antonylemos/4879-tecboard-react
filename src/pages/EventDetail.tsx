import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import CardMedia from '@mui/material/CardMedia'
import { useParams, useNavigate } from 'react-router-dom'
import { useEventByIdQuery } from '../hooks/useEventsQuery'
import { useFavorites } from '../hooks/useFavorites'
import { formatDate } from '../lib/formatters'

export function EventDetail() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { data: event, isLoading, isError } = useEventByIdQuery(id ?? '')
  const { isFavorite, toggleFavorite } = useFavorites()

  if (isLoading) {
    return (
      <Box sx={{ minHeight: '100vh', backgroundColor: '#06151A', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography>Carregando evento...</Typography>
      </Box>
    )
  }

  if (isError || !event) {
    return (
      <Box sx={{ minHeight: '100vh', backgroundColor: '#06151A', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography>Evento não encontrado.</Typography>
      </Box>
    )
  }

  const favorite = isFavorite(event.id)

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#06151A', py: 6, px: 4 }}>
      <Button onClick={() => navigate(-1)} sx={{ mb: 4 }}>
        ← Voltar
      </Button>
      <Box sx={{ maxWidth: '600px', mx: 'auto' }}>
        <CardMedia
          component="img"
          image={event.image ?? 'https://placehold.co/600x400'}
          alt={event.name}
          sx={{ borderRadius: 2, mb: 3 }}
        />
        <Box
          sx={{
            display: 'inline-block',
            backgroundColor: '#33353F',
            px: 1,
            py: 0.5,
            borderRadius: 1,
            mb: 2,
          }}
        >
          <Typography variant="caption">{event.theme}</Typography>
        </Box>
        <Typography variant="h4" component="h1" sx={{ mb: 1 }}>
          {event.name}
        </Typography>
        <Typography variant="body1" sx={{ color: '#aaa', mb: 3 }}>
          📅 {formatDate(event.date)}
        </Typography>
        <Button
          onClick={() => toggleFavorite(event.id)}
          sx={{
            backgroundColor: favorite ? '#e91e63' : '#17D9B1',
            color: '#fff',
            '&:hover': {
              backgroundColor: favorite ? '#c2185b' : '#12c4a0',
            },
          }}
        >
          {favorite ? '❤️ Remover dos favoritos' : '🤍 Adicionar aos favoritos'}
        </Button>
      </Box>
    </Box>
  )
}
