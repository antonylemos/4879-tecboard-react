import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import { useState } from 'react'
import { Header } from '../components/Header'
import { EventList } from '../components/EventList'
import { EventForm } from '../components/EventForm'
import { Pagination } from '../components/Pagination'
import { useEventsQuery } from '../hooks/useEventsQuery'
import { useDebounce } from '../hooks/useDebounce'
import { THEMES } from '../lib/constants'
import bannerImage from '../assets/banner.png'

const ALL_FILTER = 'Todos'

export function Board() {
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')
  const [activeTheme, setActiveTheme] = useState('')

  const debouncedSearch = useDebounce(search, 300)

  const { data: eventsData, isLoading, isError } = useEventsQuery({
    page,
    search: debouncedSearch,
    theme: activeTheme,
  })

  function handleThemeFilter(theme: string) {
    setActiveTheme(theme === ALL_FILTER ? '' : theme)
    setPage(1)
  }

  function handleSearch(value: string) {
    setSearch(value)
    setPage(1)
  }

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#06151A' }}>
      <Header search={search} onSearchChange={handleSearch} />

      {/* Banner */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          height: '600px',
          background: 'linear-gradient(180deg, #17D9B1 0%, #06151A 100%)',
          justifyContent: 'flex-end',
          position: 'relative',
        }}
      >
        <Box sx={{ position: 'relative' }}>
          <img src={bannerImage} alt="Banner Tecboard" />
          <Typography
            variant="h1"
            component="h1"
            sx={{
              position: 'absolute',
              bottom: '80px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '652px',
              textAlign: 'center',
            }}
          >
            Seu hub de eventos de tecnologia
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          backgroundColor: '#06151A',
          py: 8,
          gap: 6,
        }}
      >
        {/* Formulário */}
        <EventForm />

        {/* Filtros por tema */}
        <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', justifyContent: 'center' }}>
          <Chip
            label={ALL_FILTER}
            onClick={() => handleThemeFilter(ALL_FILTER)}
            variant={activeTheme === '' ? 'filled' : 'outlined'}
            sx={{
              color: '#fff',
              borderColor: '#17D9B1',
              backgroundColor: activeTheme === '' ? '#17D9B1' : 'transparent',
            }}
          />
          {THEMES.map((t) => (
            <Chip
              key={t}
              label={t}
              onClick={() => handleThemeFilter(t)}
              variant={activeTheme === t ? 'filled' : 'outlined'}
              sx={{
                color: '#fff',
                borderColor: '#17D9B1',
                backgroundColor: activeTheme === t ? '#17D9B1' : 'transparent',
              }}
            />
          ))}
        </Stack>

        {/* Lista de eventos */}
        <Box sx={{ width: '100%', maxWidth: '1200px' }}>
          <Pagination page={page} data={eventsData} onPageChange={setPage} />
          <Box sx={{ mt: 4 }}>
            <EventList events={eventsData?.data ?? []} isLoading={isLoading} isError={isError} />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
