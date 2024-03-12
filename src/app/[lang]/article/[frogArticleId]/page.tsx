import { FrogArticleDetailRespDTO} from '@/service/customer'
import type { Metadata, ResolvingMetadata } from 'next'
import ArticlesCont from './component/ArticlesCont/Index'

type Props = {
  params: { frogArticleId: string }
  searchParams: { [key: string]: string| undefined },
}


 
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const frogArticleId = +params.frogArticleId
  const article=await getData(frogArticleId)
  const title=article?.frogArticleTitle;
  return {
    metadataBase: new URL('https://s.theckb.com/'),
    alternates: {
      canonical: '/',
      languages: {
        'en': '/en',
        'ko': '/ko',
        'ja': '/ja',
      },
    },
    title,
    description:title,
    openGraph: {
      siteName:'THE CKB',
      images:'https://static-s.theckb.com/BusinessMarket/Client/favicon.ico',
      title,
      description:title
    },
  }
}
 
export default async function Page({ params, searchParams }: Props) {
  console.log(searchParams,'searchParams');

  const frogArticleId = +params.frogArticleId
   const article= await getData(frogArticleId)
  return <ArticlesCont frogArticle={article} querys={searchParams} />
}

/** 获取数据 */
export const getData=async (frogArticleId:number)=>{
  const article = await fetch(`${process.env.THE_CKB_API_URL}/customer/frog/article/detail?frogArticleId=${frogArticleId}`).then(res=>res.json())
  return article.data as FrogArticleDetailRespDTO
}