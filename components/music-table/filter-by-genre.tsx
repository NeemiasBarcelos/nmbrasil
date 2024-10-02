'use client'

import { useEffect, useState } from 'react'
import { Check, Filter, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useRouter, useSearchParams } from 'next/navigation'

type Genre = {
  id: string
  name: string
}

const genres: Genre[] = [
  { id: '1', name: 'New Rock' },
  { id: '2', name: 'Progressive Metal' },
  { id: '3', name: 'Extreme Power Metal' },
  { id: '4', name: 'Alternative Metal' },
  { id: '5', name: 'R&B/hip-hop' },
]

export function FilterByGenre() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams.toString())
  const [open, setOpen] = useState(false)
  const [selectedGenres, setSelectedGenres] = useState<string[]>([])

  const handleOpenChange = (newOpen: boolean) => {
    if (newOpen === false) {
      return
    }
    setOpen(newOpen)
  }

  const handleGenreChange = (genreName: string) => {
    setSelectedGenres((prev) =>
      prev.includes(genreName)
        ? prev.filter((name) => name !== genreName)
        : [...prev, genreName]
    )
  }

  const handleRemove = () => {
    setSelectedGenres([])
    setOpen(false)
  }

  const handleFilter = () => {
    setOpen(false)
  }

  useEffect(() => {
    if (selectedGenres.length > 0) {
      params.set('genre', selectedGenres.join(','))
      router.push(`?${params.toString()}`)
    } else {
      router.replace('/', undefined)
    }
  }, [selectedGenres])

  return (
    <DropdownMenu open={open} onOpenChange={handleOpenChange}>
      <DropdownMenuTrigger asChild>
        <Button className='flex items-center gap-1'>
          <Filter size={14} strokeWidth={1.75} />
          <span>Gêneros</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-' align='start'>
        <DropdownMenuLabel>Gêneros</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {genres.map((genre) => (
          <DropdownMenuCheckboxItem
            key={genre.id}
            checked={selectedGenres.includes(genre.name)}
            onCheckedChange={() => handleGenreChange(genre.name)}>
            {genre.name}
          </DropdownMenuCheckboxItem>
        ))}
        <DropdownMenuSeparator />
        <div className='flex gap-2 items-center'>
          <Button
            variant='outline'
            size='sm'
            onClick={handleRemove}
            className='h-7 px-3 text-xs'>
            <X className='mr-2 h-4 w-4' />
            Limpar
          </Button>
          <Button size='sm' onClick={handleFilter} className='h-7 px-3 text-xs'>
            <Check className='mr-2 h-4 w-4' />
            Fechar
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
