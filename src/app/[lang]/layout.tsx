/*
 * @Author: shiguang
 * @Date: 2024-04-25 10:57:25
 * @LastEditors: shiguang
 * @LastEditTime: 2024-04-26 23:12:35
 * @Description:
 */
import LayoutContainer from "@/components/Layout/LayoutContainer";
import { PlatCookie, TokenSignCookie } from "@/config";
import { Local } from "@/i18n/settings";
import { ENUM_PLATE } from "@/model/Plat";
import { cookies, headers } from "next/headers";
type Props = Readonly<{
  children: React.ReactNode;
  params: {
    lang: Local;
  };
}>;

export default async function RootLayout(props: Props) {
  const { children, params } = props;
  const { lang } = params;
  const cookieStore = cookies();
  const headerStore = headers();
  const plat = (cookieStore.get(encodeURIComponent(PlatCookie))?.value ||
    "d2c") as ENUM_PLATE;
  const token = cookieStore.get(encodeURIComponent(TokenSignCookie))?.value;
  const serverHeaders = {
    host: headerStore.get("host")!,
  };

  console.log(plat, `server_plat:${encodeURIComponent(PlatCookie)}`);

  return (
    <LayoutContainer params={{ lang, initPlat: plat, token, serverHeaders }}>
      {children}
    </LayoutContainer>
  );
}
