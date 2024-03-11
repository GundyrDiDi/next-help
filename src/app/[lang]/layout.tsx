import { Local } from "@/i18n/settings";
import LayoutChild from "./LayoutChild";
import { cookies } from "next/headers";


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
  console.log(cookieStore);
  
  return (
    <html lang={lang}>
      <script type="text/javascript" src="https://cdn.channel.io/plugin/ch-plugin-web.js" async></script>
      <body >
        <LayoutChild params={{lang}}>
        {children}
        </LayoutChild>
        </body>
    </html>
  );
}


