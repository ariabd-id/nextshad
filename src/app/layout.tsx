import '../styles/globals.css'

import { TailwindIndicator } from '@nextshad/components/molecules'
import { ThemeProvider } from '@nextshad/components/provider/theme-provider'
import { siteConfig } from '@nextshad/config/site'
import { fontMono } from '@nextshad/lib/fonts'
import { cn } from '@nextshad/lib/utils'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontMono.variable
        )}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          {children}
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  )
}
