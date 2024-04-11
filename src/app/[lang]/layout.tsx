import LayoutContainer from "@/components/Layout/LayoutContainer";
import { PlatCookie, TokenSignCookie } from "@/config";
import { Local } from "@/i18n/settings";
import { cookies } from "next/headers";
type Props = Readonly<{
  children: React.ReactNode;
  params: {
    lang: Local;
  };
}>


export default async function RootLayout(props: Props) {
  const { children,  params } = props;
  console.log(props)
  const { lang } = params;
  const cookieStore = cookies();
  const plat = cookieStore.get(encodeURIComponent(PlatCookie))?.value || "d2c";
  const token = cookieStore.get(encodeURIComponent(TokenSignCookie))?.value;

  return (
    <LayoutContainer params={{ lang, initPlat: plat, token }}>
     {children}
    </LayoutContainer>
  );
}
