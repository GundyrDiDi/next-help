/*
 * @Author: shiguang
 * @Date: 2024-04-25 10:57:25
 * @LastEditors: shiguang
 * @LastEditTime: 2024-04-25 14:26:29
 * @Description: 
 */
import { Local } from "@/i18n/settings";
import Kaerumedia from "./component/Index"
import { useSite2Station } from "@/utils/language";
import { BizResponsePageFrogArticleRespDTO, PageFrogArticleRespDTO } from "@/service/customer";

interface Props {
  params: {
    lang: Local;
  };
}

// querys.month, querys.tab, querys.year
// 顶部navbar
export default async function Page({ params }:Props) {
  const stationCode = useSite2Station(params.lang);
  const url=`${process.env.NEXT_PUBLIC_THE_CKB_API_URL}/customer/frog/article/page`
  const res:BizResponsePageFrogArticleRespDTO = await fetch(url ,
    { cache: "no-cache" ,
    method:'POST',
    body:JSON.stringify({
      pageNum: 1,
      pageSize: 10,
      stationCode: stationCode,
      "frogArticleYear":"",
      "frogArticleMonth":""
    }),
    headers:{
      "X-Stationcode": stationCode,
      "Content-Type": "application/json",
    }
  }
  ).then((res) => res.json());
  return (
    <>
    <Kaerumedia  initListArticle={res?.data?.records??[]}/>
    </>
  );
}