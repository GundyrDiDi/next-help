/*
 * @Author: shiguang
 * @Date: 2024-04-08 11:30:20
 * @LastEditors: shiguang
 * @LastEditTime: 2024-05-16 14:56:40
 * @Description: 
 */
import { BizResponseCustomerDetailRespDTO, FrogArticleDetailRespDTO } from "@/service/customer";
import type { Metadata, ResolvingMetadata } from "next";
import ArticlesCont from "./component/ArticlesCont/Index";
import { Local } from "@/i18n/settings";
import { serveTranslation } from "@/i18n";
import { Lang } from "@/model";
import { cookies } from "next/headers";
import { TokenSignCookie } from "@/config";
import { CustomerDetailRespDTO2 } from "@/model/CustomerDetail";

type Props = {
  params: { frogArticleId: string; lang: Local };
  searchParams: { [key: string]: string | undefined };
};

/** 获取数据 */
const getData = async (frogArticleId: number) => {
  const article = await fetch(
    `${process.env.NEXT_PUBLIC_THE_CKB_API_URL}/customer/frog/article/detail?frogArticleId=${frogArticleId}`,
    { cache: "no-cache" }
  ).then((res) => res.json());
  console.log(12345, `${process.env.NEXT_PUBLIC_THE_CKB_API_URL}/customer/frog/article/detail?frogArticleId=${frogArticleId}`);
  console.log(article, 333)
  return article.data as FrogArticleDetailRespDTO;
};

export default async function Page({ params, searchParams }: Props) {
  const frogArticleId = +params.frogArticleId;
  const article = await getData(frogArticleId);
  const cookieStore = cookies();
  const token = cookieStore.get(encodeURIComponent(TokenSignCookie))?.value;
  const {data}:{data:CustomerDetailRespDTO2}=await fetch(
    `${process.env.NEXT_PUBLIC_THE_CKB_API_URL}/customer/getCustomerDetails`,
    { 
        cache: "no-cache",
        headers:{
        'X-Authtoken':token||''
    } 
  }
  ).then((res) => res.json());
  return <ArticlesCont userInfo={data} frogArticle={article} querys={searchParams} />;
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const frogArticleId = +params.frogArticleId;
  const article = await getData(frogArticleId);
  console.log(article, 666, `${process.env.NEXT_PUBLIC_THE_CKB_API_URL}/customer/getCustomerDetails`,)
  
  const title = article?.frogArticleTitle;
  
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
    title: `${article.frogArticleTitle}${
      {
        [Local.JA]: "| 中国輸入代行THE CKB",
        [Local.KO]: "| 중국수입대행 THE CKB",
        [Local.EN]: "THE CKB-The Biggest Sourcing Agency in China",
      }[params.lang] || ""
    }`,
    description: article.seoDescription || article.frogArticleTitle,
    openGraph: {
      siteName: "THE CKB",
      images: "https://static-s.theckb.com/BusinessMarket/Client/favicon.ico",
      title,
      description: article.seoDescription || article.frogArticleTitle,
    },
  };
}
