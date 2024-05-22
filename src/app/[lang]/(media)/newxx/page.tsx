/*
 * @Author: shiguang
 * @Date: 2024-04-25 10:57:25
 * @LastEditors: shiguang
 * @LastEditTime: 2024-05-22 11:19:52
 * @Description: 
 */
import { Local } from "@/i18n/settings";
import { getSiteStation, useSite2Station } from "@/utils/language";
import { BizResponsePageFrogArticleRespDTO } from "@/service/customer";
import { getLangType } from "@/model/Lang";
import { request } from "@/config/request";
import Index from ".";

interface Props {
  params: {
    lang: Local;
  };
  searchParams: {
    articleTypeId?: string
  }
}

const requestSSRArticleList = async (stationCode: string, frogArticleTypeId?: number) => {
  const params = {
      pageNum: 1,
      pageSize: 10,
      stationCode,
      frogArticleTypeId,
      // frogArticleYear: '',
      // frogArticleMonth: '',
  }
  return request.customer.frog.articlePage(params)
}

// querys.month, querys.tab, querys.year
// 顶部navbar
export default async function Page(props:Props) {
  const { params, searchParams } = props;
  const siteStation = getSiteStation(params.lang)
  console.log(params, 'queryqueryquery')
  const SSRArticleListData = await requestSSRArticleList(siteStation, searchParams.articleTypeId as unknown as number);
  // const stationCode = useSite2Station(params.lang);
  // const url=`${process.env.NEXT_PUBLIC_THE_CKB_API_URL}/customer/frog/article/page`
  // const res:BizResponsePageFrogArticleRespDTO = await fetch(url ,
  //   { cache: "no-cache" ,
  //   method:'POST',
  //   body:JSON.stringify({
  //     pageNum: 1,
  //     pageSize: 10,
  //     stationCode: stationCode,
  //     "frogArticleYear":"",
  //     "frogArticleMonth":""
  //   }),
  //   headers:{
  //     "X-Stationcode": stationCode,
  //     "Content-Type": "application/json",
  //   }
  // }
  // ).then((res) => res.json());



  // SSRArticleListData

  
  return (
    <>
      <Index siteStation={siteStation as string} SSRArticleListData={SSRArticleListData}  />
    </>
  );
}