import { Local } from "@/i18n/settings";
import LayoutChild from "./LayoutChild";
import { cookies } from "next/headers";
import { PlatCookie, TokenSignCookie } from "@/config";
import "./globals.scss";
import { Metadata, ResolvingMetadata } from "next";
import classNames from "classnames";
interface Props {
  params: {
    lang: Local;
    initPlat: string;
    token?: string;
  };
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  return {
    icons: {
      icon: "/favicon.ico",
    },
    title:
      params.lang === "ja"
        ? "THE CKBー中国輸入代行・THE CKBなら丸投げOK!"
        : "THE CKB",
  };
}

export default function RootLayout({
  children,
  params: { lang },
}: Readonly<{
  children: React.ReactNode;
  params: {
    lang: Local;
  };
}>) {
  const cookieStore = cookies();
  const plat = cookieStore.get(encodeURIComponent(PlatCookie))?.value || "d2c";
  const token = cookieStore.get(encodeURIComponent(TokenSignCookie))?.value;

  return (
    <html lang={lang} data-theme={String(plat).toUpperCase()}>
      <script
        type="text/javascript"
        src="https://cdn.channel.io/plugin/ch-plugin-web.js"
        async
      ></script>
      <meta name="google-site-verification" content="1DIor1BkSq1vf_uf4-m5WRiVIyeWGmckG9hD2VLb3eM" />
      <body>
        <div id="app" className={classNames("page_layout", lang)}>
          <LayoutChild params={{ lang, initPlat: plat, token }}>
            {children}
          </LayoutChild>
        </div>
      </body>
    </html>
  );
}
