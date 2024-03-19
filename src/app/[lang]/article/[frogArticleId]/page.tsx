import { FrogArticleDetailRespDTO } from "@/service/customer";
import type { Metadata, ResolvingMetadata } from "next";
import ArticlesCont from "./component/ArticlesCont/Index";

type Props = {
  params: { frogArticleId: string };
  searchParams: { [key: string]: string | undefined };
};

/** 获取数据 */
const getData = async (frogArticleId: number) => {
  const article = await fetch(
    `${process.env.NEXT_PUBLIC_THE_CKB_API_URL}/customer/frog/article/detail?frogArticleId=${frogArticleId}`
  ).then((res) => res.json());
  return article.data as FrogArticleDetailRespDTO;
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const frogArticleId = +params.frogArticleId;
  const article = await getData(frogArticleId);
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
    description: article.seoDescription || article.frogArticleTitle,
    openGraph: {
      siteName: "THE CKB",
      images: "https://static-s.theckb.com/BusinessMarket/Client/favicon.ico",
      title,
      description: article.seoDescription || article.frogArticleTitle,
    },
  };
}

export default async function Page({ params, searchParams }: Props) {
  const frogArticleId = +params.frogArticleId;
  const article = await getData(frogArticleId);
  return <ArticlesCont frogArticle={article} querys={searchParams} />;
}
