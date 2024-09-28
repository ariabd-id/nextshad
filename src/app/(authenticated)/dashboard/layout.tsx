import Authenticated from '@nextshad/layouts/authenticated/Authenticated'
import type React from 'react'

export default function Layout({ children }: React.PropsWithChildren) {
  return <Authenticated>{children}</Authenticated>
}
