'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Song } from '@/lib/types'
import { TableCell, TableRow } from '../ui/table'

interface Props {
  song: Song
  n: number
}

export function MusicRow({ song, n }: Props) {
  return (
    <TableRow className='border-0'>
      <TableCell>{n + 1}</TableCell>
      <TableCell>
        <div className='flex items-center gap-4'>
          <Avatar className='rounded-md'>
            <AvatarImage src={`/${song.url}`} alt={song.artist} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          {song.title}
        </div>
      </TableCell>
      <TableCell>{song.artist}</TableCell>
      <TableCell>{song.genre}</TableCell>
      <TableCell>{song.release}</TableCell>
    </TableRow>
  )
}
