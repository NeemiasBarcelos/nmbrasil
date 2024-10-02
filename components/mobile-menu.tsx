'use client'

import { AlignJustify, Music } from 'lucide-react'
import { MobileSideBar } from './mobile/mobile-sidebar'
import { MobileListenNow } from './mobile/mobile-listen-now'

export function MobileMenu() {
  return (
    <div className='px-4 absolute bottom-2 z-50 bg-zinc-900 mx-auto left-0 right-0 w-fit h-10 rounded-xl lg:hidden'>
      <div className='h-full flex items-center justify-center gap-7'>
        <MobileSideBar />
        <button className='text-white flex items-center gap-1'>
          <MobileListenNow />
        </button>
      </div>
    </div>
  )
}
