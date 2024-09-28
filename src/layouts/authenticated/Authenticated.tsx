'use client'

import React from 'react'

import Header from './components/Headers'

export default function Authenticated({
  children,
}: React.PropsWithChildren<{
  children: React.ReactNode
}>) {
  return (
    <div className='flex min-h-screen w-full flex-col'>
      <Header />

      <main className='flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8'>
        {children}
      </main>

      <footer className='py-6 md:px-8 md:py-0'>
        <div className='container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row'>
          <p className='text-balance text-center text-sm leading-loose text-muted-foreground md:text-left'>
            Built by{' '}
            <a
              href={`#`}
              target='_blank'
              rel='noreferrer'
              className='font-medium underline underline-offset-4'>
              shadcn
            </a>
            . The source code is available on{' '}
            <a
              href={`#`}
              target='_blank'
              rel='noreferrer'
              className='font-medium underline underline-offset-4'>
              GitHub
            </a>
            .
          </p>
        </div>
      </footer>
    </div>
  )
}
