import { NextRequest, NextResponse,NextFetchEvent } from 'next/server'
import { cookies } from 'next/headers'
// import {  } from "";
// import { languages } from '@/i18n/init'



// export const config = {
//   // matcher: '/:lng*'
//   matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)']
// }

export async function middleware(req:NextRequest) {
  // 转发规则，比如匹配 /help 或 /media 的路径
  const rule=/\/(help|media)(\/[^.]+)*$/
  // 统一向cdn请求，cdn无缓存的情况下会回源到对应的oss地址
  if(!rule.test(req.url)){
    const host=req.url.slice(0,req.url.indexOf('/'))
    // 添加_oss_，保证不会缓存真实页面，headers参数用于命中回源规则
    const res=await fetch(host+'/_oss_',{headers:{'X-ssr':'true'}})
    const html=await res.text()
    return new NextResponse(
      html,
      { status: 200, headers: { 'content-type': 'text/html' } }
  )}
  return NextResponse.next()
}
