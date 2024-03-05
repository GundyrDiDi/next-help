import { BizResponseFrogArticleDetailRespDTO ,FrogArticleDetailRespDTO} from '@/service/customer'
import type { Metadata, ResolvingMetadata } from 'next'
 
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
  const previousImages = (await parent).openGraph?.images || []
  const title=article?.data?.frogArticleTitle
  return {
    title,
    description:title,
    openGraph: {
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