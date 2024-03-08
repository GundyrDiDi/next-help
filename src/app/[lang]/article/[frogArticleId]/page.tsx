import { BizResponseFrogArticleDetailRespDTO ,FrogArticleDetailRespDTO} from '@/service/customer'
import type { Metadata, ResolvingMetadata } from 'next'
import { getServerSideProps } from 'next/dist/build/templates/pages'
 
type Props = {
  params: { frogArticleId: string }
  searchParams: { [key: string]: string | string[] | undefined },
}


 
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const frogArticleId = params.frogArticleId
  // fetch data
  const article:BizResponseFrogArticleDetailRespDTO = await fetch(`https://gateway-prod.theckb.com/customer/frog/article/detail?frogArticleId=${frogArticleId}`).then(res=>res.json())
  // optionally access and extend (rather than replace) parent metadata
  const title=article?.data?.frogArticleTitle
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
  const frogArticleId = params.frogArticleId
  
  const article:BizResponseFrogArticleDetailRespDTO = await fetch(`https://gateway-prod.theckb.com/customer/frog/article/detail?frogArticleId=${frogArticleId}`).then(res=>res.json())
  return <div dangerouslySetInnerHTML={{__html:article?.data?.frogArticleContent??''}}/>
}

// export async function  getServerSideProps({ params }){
//   return {}
// }