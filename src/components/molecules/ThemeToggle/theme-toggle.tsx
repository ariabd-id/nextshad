'use client'

import { Button } from '@nextshad/components/ui/button'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import * as React from 'react'

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      variant='ghost'
      size='icon'
      onClick={() => {
        console.log({
          theme,
        })

        setTheme(theme === 'light' ? 'dark' : 'light')
      }}>
      <Sun className='h-6 w-[1.3rem] dark:hidden' />
      <Moon className='hidden size-5 dark:block' />
      <span className='sr-only'>Toggle theme</span>
    </Button>
  )
}
