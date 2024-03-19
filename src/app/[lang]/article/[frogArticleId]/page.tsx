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

export default async function Page({ params, searchParams }: Props) {
  const frogArticleId = +params.frogArticleId;
  const article = await getData(frogArticleId);
  return <ArticlesCont frogArticle={article} querys={searchParams} />;
}
