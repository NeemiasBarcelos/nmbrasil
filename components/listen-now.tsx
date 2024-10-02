import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Headphones } from 'lucide-react'

export function ListenNow() {
  return (
    <div className='w-fit p-4 space-y-4'>
      <h2 className='text-2xl font-bold tracking-tight flex items-center gap-1'>
        <Headphones size={20} strokeWidth={2} />
        Agora
      </h2>

      <Avatar className='rounded-md size-40'>
        <AvatarImage src={`/ankor.jfif`} alt={'new'} />
        <AvatarFallback className='rounded-md'>AK</AvatarFallback>
      </Avatar>

      <div className='mt-4'>
        <p className='text-sm font-bold'>Prisoner</p>
        <p className='text-sm text-muted-foreground'>Ankor</p>
      </div>
    </div>
  )
}
