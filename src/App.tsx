import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Board } from './pages/Board'
import { EventDetail } from './pages/EventDetail'
import { Favorites } from './pages/Favorites'
import { darkTheme, lightTheme } from './theme'
import { useThemeMode } from './hooks/useThemeMode'

const queryClient = new QueryClient()

function ThemedApp() {
  const { mode } = useThemeMode()
  const theme = mode === 'dark' ? darkTheme : lightTheme

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Board />} />
          <Route path="/events/:id" element={<EventDetail />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemedApp />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
