import type { Metadata } from 'next'
import { font_sans } from '@/fonts'
import './globals.css'
import { cn } from '@/lib/utils'
import { Toaster } from '@/components/ui/toaster'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/providers/query-provider'

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
      <QueryClientProvider client={queryClient}>
        <body className={cn(font_sans.variable, 'font-sans antialiased')}>
          {children}
          <Toaster />
        </body>
      </QueryClientProvider>
    </html>
  )
}
