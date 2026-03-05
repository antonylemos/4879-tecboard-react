import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import type { PaginatedEvents } from '../features/events/types'

interface PaginationProps {
  page: number
  data: PaginatedEvents | undefined
  onPageChange: (page: number) => void
}

export function Pagination({ page, data, onPageChange }: PaginationProps) {
  return (
    <Box sx={{ display: 'flex', gap: 1 }}>
      <Button
        onClick={() => data?.prev != null && onPageChange(data.prev)}
        disabled={page === 1 || !data?.prev}
      >
        Página anterior
      </Button>
      <Button
        onClick={() => data?.next != null && onPageChange(data.next)}
        disabled={!data?.next}
      >
        Próxima página
      </Button>
    </Box>
  )
}
