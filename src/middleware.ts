import { NextRequest, NextResponse } from 'next/server'
// import { languages } from '@/i18n/init'


// export const config = {
//   // matcher: '/:lng*'
//   matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)']
// }

export function middleware(req:NextRequest) {
  // if (
  //   !languages.some(loc => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
  // ) {
  //   return NextResponse.redirect(new URL(`/${lng}${req.nextUrl.pathname}`, req.url))
  // }

  // if (req.headers.has('referer')) {
  //   const refererUrl = new URL(req.headers.get('referer'))
  //   const lngInReferer = languages.find((l) => refererUrl.pathname.startsWith(`/${l}`))
  //   const response = NextResponse.next()
  //   return response
  // }

  return NextResponse.next()
}
