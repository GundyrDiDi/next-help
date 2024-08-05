import { NextRequest, NextResponse,NextFetchEvent } from 'next/server'
import { cookies } from 'next/headers'
// import {  } from "";
// import { languages } from '@/i18n/init'



// export const config = {
//   // matcher: '/:lng*'
//   matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)']
// }

export async function middleware(req:NextRequest,...res:any[]) {
  const a=await fetch('https://20240802-seo-s.theckb.com/_oss_',{headers:{'X-ssr':'true'}}).then(res=>res.text())
  if( /^[^.]+$/.test(req.url)){
    return new NextResponse(
      a,
      { status: 200, headers: { 'content-type': 'text/html' } }
  )}
  // return NextResponse.json(a)
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
