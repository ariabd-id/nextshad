import Unauthenticated from '@nextshad/layouts/unauthenticated/Unauthenticated'
import type React from 'react'

export default function Layout({ children }: React.PropsWithChildren) {
  return <Unauthenticated>{children}</Unauthenticated>
}
