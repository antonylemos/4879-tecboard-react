import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import { ThemeToggle } from './ThemeToggle'
import { SearchBar } from './SearchBar'
import tecboardLogo from '../assets/tecboard.svg'

interface HeaderProps {
  search: string
  onSearchChange: (value: string) => void
}

export function Header({ search, onSearchChange }: HeaderProps) {
  return (
    <AppBar position="static" sx={{ py: 2, backgroundColor: '#06151A' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <img src={tecboardLogo} alt="Tecboard Logo" style={{ height: '28px' }} />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <SearchBar value={search} onChange={onSearchChange} />
          <ThemeToggle />
        </Box>
      </Toolbar>
    </AppBar>
  )
}
