import { z } from 'zod'

const songsSchema = z.object({
  id: z.string().uuid(),
  title: z.string(),
  artist: z.string(),
  genre: z.string(),
  release: z.string(),
  url: z.string(),
})

export type Song = z.infer<typeof songsSchema>
