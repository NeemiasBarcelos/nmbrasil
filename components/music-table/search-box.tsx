'use client'

import { useState } from 'react'
import { Search, X } from 'lucide-react'
import { Input } from '../ui/input'

interface Props {
  handleSetValueSearch: (value: string) => void
}

export default function SearchBox({ handleSetValueSearch }: Props) {
  const [searchValue, setSearchValue] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value
    setSearchValue(v)
    handleSetValueSearch(v)
  }

  const handleClearSearch = () => {
    const v = ''
    setSearchValue(v)
    handleSetValueSearch(v)
  }

  return (
    <div className='relative w-full max-w-sm'>
      <Search className='absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500' />
      <Input
        type='text'
        placeholder='Procurar...'
        value={searchValue}
        onChange={handleInputChange}
        className='pl-10 pr-10'
      />
      {searchValue.length > 1 && (
        <button
          onClick={handleClearSearch}
          className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700'>
          <X className='h-4 w-4' />
          <span className='sr-only'>Limpar</span>
        </button>
      )}
    </div>
  )
}
