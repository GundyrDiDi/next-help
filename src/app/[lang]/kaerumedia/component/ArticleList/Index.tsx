import { useEffect, useState } from "react";
import { usePagination, useRequest } from "ahooks";
import { api } from "@/service";
import ArticleItem from "./ArticleItem";
import { Empty, Pagination, Spin } from "antd";
import {
  FrogArticleRespDTO,
  GetFrogArticleArchivePageDTO,
  GetFrogArticlePageDTO,
} from "@/service/customer";
import { useTranslation } from "@/i18n/client";
import { Local } from "@/i18n/settings";
import { useSite2Station } from "@/utils/language";
import "./Index.scss";
import { useAtom } from "jotai";
import { QueryParams } from "@/model";

type Params = Omit<
  GetFrogArticlePageDTO & GetFrogArticleArchivePageDTO,
  "pageNum" | "pageSize"
>;

interface Props{
  initListArticle:FrogArticleRespDTO[]
}

const ArticleList = ({initListArticle}:Props) => {
  const stationCode = useSite2Station();
  const [querys] = useAtom(QueryParams);
  const { t } = useTranslation();
  const [list,setList]=useState(initListArticle??[])
  const {
    data: articleRes,
    loading,
    pagination,
    run: articlePage,
  } = usePagination(
    async ({ current, pageSize }, params: Params) => {
      if (querys.tab === -2) {
        const res = await api.customer.frog.articleArchivePage({
          pageNum: current,
          pageSize,
          ...params,
        });
        return {
          total: res.data?.total || 0,
          list: res.data?.records || [],
        };
      } else {
        const res = await api.customer.frog.articlePage({
          pageNum: current,
          pageSize,
          ...params,
        });
        return {
          total: res.data?.total || 0,
          list: res.data?.records || [],
        };
      }
    },
    {
      manual: true,
    }
  );

  useEffect(() => {
    console.log("querys.tab", querys.tab);
    
   if(initListArticle?.length){
    articlePage(
      { pageSize: 10, current: 1 },
      {
        frogArticleType: querys.tab === -1 ? undefined : querys.tab,
        stationCode,
        frogArticleYear: querys.year ? String(querys.year) : "",
        frogArticleMonth: querys.month ? String(querys.month) : "",
      }
    );
   }
  }, [articlePage, querys.month, querys.tab, querys.year, stationCode,initListArticle]);

  useEffect(()=>{
   if(querys.tab==-1&&pagination.current==1){
    setList(initListArticle)
   }else{
    setList(articleRes?.list??[])
   }
  },[articleRes?.list, initListArticle, pagination, querys.tab])

  return (
    <div className="ArticleList">
      <div className="ArticleList-main">
        <Spin spinning={loading&&pagination.current!==1}>
          {list.length ? (
            list.map((item: FrogArticleRespDTO) => {
              return <ArticleItem key={item.frogArticleId} article={item} />;
            })
          ) : (
            <Empty description={t("没有更多了")} />
          )}
        </Spin>
      </div>
      {!!list.length && (
        <div className="ArticleList-pagination">
          <Pagination
            onChange={pagination.onChange}
            showQuickJumper
            current={pagination.current}
            pageSize={pagination.pageSize}
            total={articleRes?.total}
          />
        </div>
      )}
    </div>
  );
};

export default ArticleList;
