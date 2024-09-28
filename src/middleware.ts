import { type NextRequest, NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
  // const session = cookies().get('session')

  // if (
  //   !session &&
  //   request.nextUrl.pathname !== '/login' &&
  //   !request.nextUrl.pathname.includes('/room')
  // ) {
  //   return NextResponse.redirect(new URL('/login', request.url))
  // }

  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/login', request.url))
  }
}

export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)'],
}
