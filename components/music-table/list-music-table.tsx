'use client'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { Button } from '@/components/ui/button'
import { Song } from '@/lib/types'
import { queryClient } from '@/providers/query-provider'
import { useQuery } from '@tanstack/react-query'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'

import { FilterByGenre } from '@/components/music-table/filter-by-genre'
import SearchBox from '@/components/music-table/search-box'
import { MusicRow } from './music-row'
import { SkeletonRow } from './skeleton-row'
import { ScrollArea, ScrollBar } from '../ui/scroll-area'

export function ListMusicTable() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const genreParam = searchParams.get('genre')
  const [searchValue, setSearchValue] = useState('')
  const selectedGenres = genreParam ? genreParam.split(',') : []

  const { data, isPending, isError } = useQuery<Song[]>({
    queryKey: ['get-songs'],
    queryFn: async () => {
      const response = await fetch('api/songs')
      if (!response.ok) {
        throw new Error('Erro interno do sistema.')
      }
      return await response.json()
    },
  })

  function resetQuery() {
    queryClient.invalidateQueries({ queryKey: ['get-songs'] })
  }

  const handleSetValueSearch = (value: string) => {
    setSearchValue(value)
  }

  useEffect(() => {
    if (searchValue.length > 0) {
      router.replace('/', undefined)
    }
  }, [searchValue, router])

  const filteredSongs = useMemo(() => {
    if (!data) return []

    if (searchValue.length > 0) {
      return data.filter(
        (song) =>
          song.title.toLowerCase().includes(searchValue.toLowerCase()) ||
          song.artist.toLowerCase().includes(searchValue.toLowerCase())
      )
    }

    if (selectedGenres.length > 0) {
      return data.filter((song) =>
        selectedGenres.some((genre) => song.genre.includes(genre))
      )
    }

    return data
  }, [data, selectedGenres, searchValue])
  return (
    <div className='mt-4'>
      <div className='py-6 flex items-center gap-4'>
        <FilterByGenre />
        <SearchBox handleSetValueSearch={handleSetValueSearch} />
      </div>
      <ScrollArea>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>#</TableHead>
              <TableHead>Título</TableHead>
              <TableHead>Artista</TableHead>
              <TableHead>Genero</TableHead>
              <TableHead>Lançamento</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isError && (
              <TableRow>
                <TableCell colSpan={5}>
                  Não foi possível carregar os resultados.
                  <Button variant='link' className='p-0' onClick={resetQuery}>
                    Tentar novamente.
                  </Button>
                </TableCell>
              </TableRow>
            )}

            {isPending ? (
              <SkeletonRow />
            ) : filteredSongs && filteredSongs.length > 0 ? (
              filteredSongs.map((song, index) => (
                <MusicRow key={song.id} song={song} n={index} />
              ))
            ) : (
              !isError && (
                <TableRow>
                  <TableCell colSpan={5}>Sem resultados.</TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
        <ScrollBar orientation='horizontal' />
      </ScrollArea>
    </div>
  )
}
