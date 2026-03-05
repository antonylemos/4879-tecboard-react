import InputBase from '@mui/material/InputBase'
import Box from '@mui/material/Box'

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#212121',
        borderRadius: 1,
        px: 1.5,
        py: 0.5,
      }}
    >
      <InputBase
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Buscar evento..."
        sx={{ color: '#fff', fontSize: '14px', width: '200px' }}
        inputProps={{ 'aria-label': 'buscar evento' }}
      />
    </Box>
  )
}
