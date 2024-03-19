"use client";
import { FrogArticleDetailRespDTO } from "@/service/customer";
import { setStationTime } from "@/utils/time";
import { Spin } from "antd";
import classNames from "classnames";
import { memo, useEffect, useState } from "react";
import "./Index.scss";
import ArticleSwitch from "../ArticleSwitch/Index";
import HotArticles from "../HotArticles/Index";
import Marking from "../Marking/Index";
import queryString from "query-string";
import { api } from "@/service";
import { useMount } from "ahooks";

interface Props {
  frogArticle?: FrogArticleDetailRespDTO;
  querys: { [key: string]: string | undefined };
}
const ArticlesCont = ({ frogArticle, querys }: Props) => {
  const [markingShow, setMarkingShow] = useState<boolean>(false);
  useMount(() => {
    if (frogArticle?.frogArticleId) {
      api.customer.frog.articleCount({
        frogArticleId: frogArticle?.frogArticleId,
      });
    }
  });
  return (
    <>
      {/* TODO:分类 */}
      <div
        className={classNames("Article w-[100%]", { readLess: markingShow })}
      >
        <div className="Article-main box-style viewport">
          <div className="content">
            <div className="content-title">{frogArticle?.frogArticleTitle}</div>
            {frogArticle?.frogArticleId !== 151 && (
              <div className="content-date">
                {setStationTime(frogArticle?.createTime)}
              </div>
            )}
            <div
              className="content-html"
              dangerouslySetInnerHTML={{
                __html: frogArticle?.frogArticleContent!,
              }}
            ></div>
          </div>
          <ArticleSwitch
            frogArticleId={frogArticle?.frogArticleId}
            type={querys.type}
            source={querys.source}
          />
        </div>
        <div className="Article-hot box-style">
          <HotArticles showBtn={false} type={querys.type} />
        </div>
      </div>
      {markingShow && <Marking />}
    </>
  );
};

export default memo(ArticlesCont);
