/*
 * @Author: shiguang
 * @Date: 2024-03-28 15:21:28
 * @LastEditors: shiguang
 * @LastEditTime: 2024-05-09 22:47:11
 * @Description:
 */
import { Local } from "@/i18n/settings";
import { cookies } from "next/headers";
import { PlatCookie, TokenSignCookie } from "@/config";
import "./globals.scss";
import { Metadata, ResolvingMetadata } from "next";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import ClientInitJS from "./ClientInitJS";

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
  // const token = cookieStore.get(encodeURIComponent(TokenSignCookie))?.value;
  return (
    <html lang={lang} data-theme={String(plat).toUpperCase()} className={lang}>
      <ClientInitJS />
      <meta
        name="google-site-verification"
        content="oahwUkqmAScewSrtx4M7_EaH_ci5PvH-N9FAHIda1gk"
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, minimal-ui, viewport-fit=cover,user-scalable=no"
      />
      <GoogleTagManager gtmId="GTM-W9HSLNKD" />
      {/* <GoogleAnalytics gaId="GTM-W9HSLNKD" /> */}
      <body>
        <div id="app" className="page_layout">
          <AntdRegistry>{children}</AntdRegistry>
        </div>
      </body>
    </html>
  );
}
