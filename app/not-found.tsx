import { Button } from '@/components/ui/button'
import React from 'react'
import NotFoundImg from '@/public/not-found.svg'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='container min-h-screen mx-auto flex flex-col items-center justify-center'>
      <NotFoundImg className='size-80 text-emerald-300' />
      <div className='flex flex-col justify-center items-center pt-4'>
        <div className='text-center'>
          <p className='text-3xl font-bold'>
            Desculpe a pagina não foi encontrada!
          </p>
          <p className='mb-8 font-zinc-700'>
            Não se preocupe você pode voltar para uma página segura.
          </p>
        </div>
        <Button className=' w-fit' asChild>
          <Link href='/' className='flex items-center'>
            <ChevronLeft size={16} />
            Voltar
          </Link>
        </Button>
      </div>
    </div>
  )
}
