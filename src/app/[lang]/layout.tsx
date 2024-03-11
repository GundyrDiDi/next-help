import { Local } from "@/i18n/settings";
import LayoutChild from "./LayoutChild";
import { cookies } from "next/headers";
import { PlatCookie, TokenSignCookie } from "@/config";
import "./globals.scss";

export default function RootLayout({
  children,
  params:{lang}
}: Readonly<{
  children: React.ReactNode;
  params:{
    lang: Local;
  }
}>) {
  const cookieStore = cookies()
  const plat=cookieStore.get(encodeURIComponent(PlatCookie))?.value||'d2c'
  const token=cookieStore.get(encodeURIComponent(TokenSignCookie))?.value
  
  return (
    <html lang={lang}>
      <script type="text/javascript" src="https://cdn.channel.io/plugin/ch-plugin-web.js" async></script>
      <body >
       <div id="app">
       <LayoutChild params={{lang,initPlat:plat,token}}>
        {children}
        </LayoutChild>
       </div>
        </body>
    </html>
  );
}


