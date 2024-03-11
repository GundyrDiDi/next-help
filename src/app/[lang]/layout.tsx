import { Local } from "@/i18n/settings";
import LayoutChild from "./LayoutChild";
import { cookies } from "next/headers";
import { PlatCookie } from "@/config";
import '@/styles/theme/b2b-css-variable.scss';
import '@/styles/theme/d2c-css-variable.scss';
import "./globals.css";

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
  console.log(plat);
  
  return (
    <html lang={lang}>
      <script type="text/javascript" src="https://cdn.channel.io/plugin/ch-plugin-web.js" async></script>
      <body >
       <div id="app">
       <LayoutChild params={{lang,initPlat:plat}}>
        {children}
        </LayoutChild>
       </div>
        </body>
    </html>
  );
}


