import LayoutContainer from "@/components/Layout/LayoutContainer";
import { PlatCookie, TokenSignCookie } from "@/config";
import { Local } from "@/i18n/settings";
import { cookies } from "next/headers";

export default async function RootLayout({
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
    <LayoutContainer params={{ lang, initPlat: plat, token }}>
     {children}
    </LayoutContainer>
  );
}
