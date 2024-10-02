import { Sidebar } from '@/components/sidebar'
import { ListenNow } from '@/components/listen-now'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ListMusicTable } from '@/components/music-table/list-music-table'
import { Suspense } from 'react'
import { MobileMenu } from '@/components/mobile-menu'

export default function Page() {
  return (
    <div className='min-h-screen'>
      <div className='flex'>
        <Sidebar />
        <div className='min-h-screen w-full px-6 py-4'>
          <div className='flex items-center gap-4'>
            <Avatar>
              <AvatarImage src='man-face.png' alt='me' />
              <AvatarFallback>JM</AvatarFallback>
            </Avatar>
            <div>
              <p className='text-sm'>Seja Bem-vindo</p>
              <p className='font-bold'>Just Me</p>
            </div>
          </div>
          <Suspense>
            <ListMusicTable />
          </Suspense>
        </div>
        <ListenNow />
      </div>
      <MobileMenu />
    </div>
  )
}
