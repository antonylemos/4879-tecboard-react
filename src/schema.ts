import { z } from 'zod'

export const eventSchema = z.object({
  name: z.string().trim().min(4, { message: 'Nome inválido! Preencha corretamente' }),
  date: z.string().min(1, { message: 'Data obrigatória' }),
  theme: z.string().min(1, { message: 'Tema obrigatório' }),
  image: z.string().url({ message: 'URL de imagem inválida' }).optional().or(z.literal('')),
})

export type EventFormValues = z.infer<typeof eventSchema>
