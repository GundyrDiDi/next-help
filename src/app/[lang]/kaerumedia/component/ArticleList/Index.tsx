import { useEffect, useState } from "react";
import { usePagination, useRequest } from "ahooks";
import { api } from "@/service";
import ArticleItem from "./ArticleItem";
import { Empty, Pagination, Spin } from "antd";
import { FrogArticleRespDTO ,GetFrogArticlePageDTO} from "@/service/customer";
import { useTranslation } from "@/i18n/client";
import { Local } from "@/i18n/settings";
import { useSite2Station } from "@/utils/language";
import "./Index.scss"


type Params=Omit<GetFrogArticlePageDTO, 'pageNum' | 'pageSize'>
interface ArticleListProps {
  navIndex:number;
}
const ArticleList=({navIndex}:ArticleListProps)=>{
  const stationCode=useSite2Station()
  const {t}=useTranslation()
  const { data:articleRes, loading, pagination, run:articlePage, params } = usePagination(
   async ({ current, pageSize },params:Params) => {
    const res=await api.customer.frog.articlePage({
      pageNum:current,
      pageSize,
      ...params
    })
   return  {
    total:res.data?.total||0,
    list:res.data?.records ||[],
   }
    },
    {
      manual: true,
    },
  );
  useEffect(()=>{
    articlePage({pageSize:10,current:1},{frogArticleType:navIndex===-1?undefined:navIndex,stationCode})
  },[articlePage, navIndex,stationCode])
  
  return <div className="ArticleList">
    <div className="ArticleList-main">
      <Spin spinning={loading}>
        {
         articleRes?.list?.length? articleRes.list.map((item)=>{
            return <ArticleItem key={item.frogArticleId} article={item}/>
          }):<Empty description={t('没有更多了')} />
        }
      </Spin>
    </div>
    {!!articleRes?.list?.length&&<div className="ArticleList-pagination">
      <Pagination 
        onChange={pagination.onChange}
        showQuickJumper 
        current={pagination.current} 
        pageSize={pagination.pageSize}
        total={articleRes?.total}/>
      </div>
      }
  </div>
}


export default ArticleList;