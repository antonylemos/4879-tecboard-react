import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import CardActionArea from '@mui/material/CardActionArea'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'
import { Link } from 'react-router-dom'
import type { Event } from '../features/events/types'
import { useFavorites } from '../hooks/useFavorites'
import { formatDate } from '../lib/formatters'
import { isEnabled } from '../lib/featureFlags'

const ThemeChip = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  backgroundColor: theme.palette.text.secondary,
  padding: '4px 8px',
  borderRadius: '4px',
  marginBottom: '8px',
}))

interface EventCardProps {
  event: Event
}

export function EventCard({ event }: EventCardProps) {
  const { isFavorite, toggleFavorite } = useFavorites()
  const favorite = isFavorite(event.id)

  const favoriteButton = (
    <IconButton
      onClick={() => toggleFavorite(event.id)}
      aria-label={favorite ? 'remover dos favoritos' : 'adicionar aos favoritos'}
      sx={{
        position: 'absolute',
        top: 8,
        right: 8,
        zIndex: 1,
        color: favorite ? '#e91e63' : '#fff',
        backgroundColor: 'rgba(0,0,0,0.4)',
        '&:hover': { backgroundColor: 'rgba(0,0,0,0.6)' },
        width: 32,
        height: 32,
      }}
    >
      {favorite ? '❤️' : '🤍'}
    </IconButton>
  )

  if (isEnabled('USE_NEW_MUI_API')) {
    return (
      <Card sx={{ width: '282px', position: 'relative' }}>
      {favoriteButton}

      <CardActionArea component={Link} to={`/events/${event.id}`}>
        <CardMedia
          component="img"
          height="236"
          image={event.image ?? 'https://placehold.co/282x236'}
          alt={event.name}
        />
        <CardContent sx={{ flexGrow: 1, py: 3, px: 2, backgroundColor: 'text.secondary' }}>
          <ThemeChip>
            <Typography variant="caption">{event.theme}</Typography>
          </ThemeChip>
          <Typography variant="body2" sx={{ color: '#aaa', mt: 0.5 }}>
            {formatDate(event.date)}
          </Typography>
          <Typography variant="body1" sx={{ mt: 0.5 }}>
            {event.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    )
  }

  return (
    <Card sx={{ width: '282px', position: 'relative' }}>
      {favoriteButton}

      <CardActionArea component={Link} to={`/events/${event.id}`}>
        <CardMedia
          component="img"
          height="236"
          image={event.image ?? 'https://placehold.co/282x236'}
          alt={event.name}
        />
        <CardContent sx={{ flexGrow: 1, py: 3, px: 2, backgroundColor: '#FFF' }}>
          <ThemeChip>
            <Typography variant="caption">{event.theme}</Typography>
          </ThemeChip>
          <Typography variant="body2" sx={{ color: '#316cec', mt: 0.5 }}>
            {formatDate(event.date)}
          </Typography>
          <Typography variant="body1" sx={{ mt: 0.5 }}>
            {event.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
