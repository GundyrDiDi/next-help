/*
 * @Author: shiguang
 * @Date: 2024-04-08 11:36:34
 * @LastEditors: shiguang
 * @LastEditTime: 2024-04-25 16:38:30
 * @Description:
 */
import { Metadata, ResolvingMetadata } from "next";
import { request } from "@/config/request";
import { getSiteStation } from "@/utils/language";
import { Local } from "@/i18n/settings";
import { getCommonDataByCookie } from "@/utils/server";
import { SupportCenterbizType } from "./utils";
import Help from "./Index";

const getMetaConf = (lang: Local) => {
  const conf: Record<Local, Metadata> = {
    [Local.JA]: {
      title: "THE CKBヘルプガイド |中国輸入代行・THE CKBなら丸投げOK！",
      description:
        "中国輸入代行・中国仕入れなら国際送料・買い付け手数料が業界最安値のTHE CKBへ。日本品質レベルのサポートと検品で安心。中国輸入で商品を選んだ後の面倒な作業（価格交渉、仕入れ、商品梱包、在庫管理、FBA直送）を全て代行します。アリババ・タオバオでのアパレル仕入れ・個人輸入など中国輸入代行業者をお探しの方はお任せください。",
    },
    [Local.KO]: {
      title: "",
    },
    [Local.EN]: {
      title: "",
    },
  };
  return conf[lang];
};

export async function generateMetadata(
  first: { params: { lang: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { params } = first;
  const metaConf = getMetaConf(params.lang as Local);
  const title = metaConf?.title ?? "THE CKB";
  const description = metaConf?.description ?? "THE CKB";
  return {
    metadataBase: new URL("https://s.theckb.com/"),
    alternates: {
      canonical: "/",
      languages: {
        en: "/en",
        ko: "/ko",
        ja: "/ja",
      },
    },
    title: title,
    description,
    openGraph: {
      siteName: "THE CKB",
      images: "https://static-s.theckb.com/BusinessMarket/Client/favicon.ico",
      title,
      description,
    },
  };
}
interface HelpPageProps {
  params: {
    lang: string;
  };
}
const Page = async (props: HelpPageProps) => {
  const { params } = props;
  const { lang } = params;
  const { plat } = getCommonDataByCookie();
  const siteStation = getSiteStation(lang as Local);
  const res = await request.customer.base.supportCenterTree({
    bizType: plat === "b2b" ? SupportCenterbizType.B : SupportCenterbizType.C,
    stationCode: siteStation,
  });
  return (
    <Help supportCenterSubjectList={res.data ?? []} siteStation={siteStation} />
  );
};
export default Page;
