'use client'

import React from 'react'

export default function Unauthenticated({
  children,
}: React.PropsWithChildren<{
  children: React.ReactNode
}>) {
  return (
    <div className='flex flex-col h-screen w-screen items-center justify-center'>
      <div className='z-10 flex w-screen flex-col items-center justify-center gap-6'>
        {children}
      </div>
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
