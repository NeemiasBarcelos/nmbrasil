import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Headphones, Music } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

export function MobileListenNow() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className='text-white flex items-center gap-1'>
          <Music size={16} />
        </button>
      </SheetTrigger>
      <SheetContent side='right'>
        <SheetHeader>
          <SheetTitle className='hidden'>Listem now</SheetTitle>
          <SheetDescription className='hidden'>Just Me</SheetDescription>
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
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
