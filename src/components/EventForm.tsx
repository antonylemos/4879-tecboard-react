import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import OutlinedInput from '@mui/material/OutlinedInput'
import Select from '@mui/material/Select'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { eventSchema, type EventFormValues } from '../schema'
import { useCreateEvent } from '../hooks/useCreateEvent'
import { THEMES } from '../lib/constants'

export function EventForm() {
  const { mutate: createEvent, isLoading } = useCreateEvent()

  const { handleSubmit, control, reset } = useForm<EventFormValues>({
    resolver: zodResolver(eventSchema),
    defaultValues: { name: '', date: '', theme: '', image: '' },
  })

  function handleOnSubmit(data: EventFormValues) {
    createEvent(data, {
      onSuccess: () => reset(),
    })
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(handleOnSubmit)}
      sx={{
        backgroundColor: '#212121',
        width: '100%',
        maxWidth: '384px',
        py: '32px',
        px: '28px',
        borderRadius: 2,
      }}
    >
      <Typography sx={{ mb: 2 }}>Preencha para criar um evento:</Typography>
      <Stack spacing={2}>
        <FormControl fullWidth>
          <InputLabel shrink htmlFor="name" sx={{ position: 'static', transform: 'none', mb: 1 }}>
            Qual o nome do evento?
          </InputLabel>
          <Controller
            name="name"
            control={control}
            render={({ field, fieldState }) => (
              <>
                <OutlinedInput id="name" placeholder="Summer dev hits" fullWidth sx={{ height: '36px' }} {...field} />
                {fieldState.error && (
                  <Typography variant="caption" sx={{ color: '#f44336', mt: 0.5 }}>
                    {fieldState.error.message}
                  </Typography>
                )}
              </>
            )}
          />
        </FormControl>

        <FormControl fullWidth>
          <InputLabel shrink htmlFor="date" sx={{ position: 'static', transform: 'none', mb: 1 }}>
            Data do evento
          </InputLabel>
          <Controller
            name="date"
            control={control}
            render={({ field, fieldState }) => (
              <>
                <OutlinedInput id="date" placeholder="20/05/2025" fullWidth sx={{ height: '36px' }} {...field} />
                {fieldState.error && (
                  <Typography variant="caption" sx={{ color: '#f44336', mt: 0.5 }}>
                    {fieldState.error.message}
                  </Typography>
                )}
              </>
            )}
          />
        </FormControl>

        <FormControl fullWidth>
          <InputLabel shrink htmlFor="theme" sx={{ position: 'static', transform: 'none', mb: 1 }}>
            Tema do evento
          </InputLabel>
          <Controller
            name="theme"
            control={control}
            render={({ field, fieldState }) => (
              <>
                <Select id="theme" displayEmpty fullWidth sx={{ height: '36px' }} {...field}>
                  <MenuItem value="" disabled>
                    Selecione uma opção
                  </MenuItem>
                  {THEMES.map((t) => (
                    <MenuItem key={t} value={t}>
                      {t}
                    </MenuItem>
                  ))}
                </Select>
                {fieldState.error && (
                  <Typography variant="caption" sx={{ color: '#f44336', mt: 0.5 }}>
                    {fieldState.error.message}
                  </Typography>
                )}
              </>
            )}
          />
        </FormControl>

        <FormControl fullWidth>
          <InputLabel shrink htmlFor="image" sx={{ position: 'static', transform: 'none', mb: 1 }}>
            URL da imagem (opcional)
          </InputLabel>
          <Controller
            name="image"
            control={control}
            render={({ field }) => (
              <OutlinedInput id="image" placeholder="https://..." fullWidth sx={{ height: '36px' }} {...field} />
            )}
          />
        </FormControl>

        <Button type="submit" disabled={isLoading} sx={{ alignSelf: 'center' }}>
          {isLoading ? 'Criando...' : 'Criar evento'}
        </Button>
      </Stack>
    </Box>
  )
}
