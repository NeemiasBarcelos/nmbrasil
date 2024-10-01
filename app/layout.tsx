import type { Metadata } from 'next'
import { font_sans } from '@/fonts'
import './globals.css'
import { cn } from '@/lib/utils'
import { Toaster } from '@/components/ui/toaster'

export const metadata: Metadata = {
  title: 'Super App',
  description: 'Base Next Template.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt-br' suppressHydrationWarning>
      <body className={cn(font_sans.variable, 'font-sans antialiased')}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
