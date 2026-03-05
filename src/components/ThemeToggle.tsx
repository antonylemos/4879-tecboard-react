import Switch from '@mui/material/Switch'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { useThemeMode } from '../hooks/useThemeMode'

export function ThemeToggle() {
  const { mode, toggleMode } = useThemeMode()

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
      <Typography variant="caption" sx={{ color: '#fff', fontSize: '12px' }}>
        {mode === 'dark' ? '🌙' : '☀️'}
      </Typography>
      <Switch
        checked={mode === 'light'}
        onChange={toggleMode}
        size="small"
        sx={{ '& .MuiSwitch-thumb': { backgroundColor: '#17D9B1' } }}
        inputProps={{ 'aria-label': 'alternar tema' }}
      />
    </Box>
  )
}
