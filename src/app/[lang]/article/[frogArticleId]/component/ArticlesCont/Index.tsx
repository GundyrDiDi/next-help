"use client";
import { FrogArticleDetailRespDTO } from "@/service/customer";
import { setStationTime } from "@/utils/time";
import { Spin } from "antd";
import classNames from "classnames";
import { useState } from "react";
import "./Index.scss";
import ArticleSwitch from "../ArticleSwitch/Index";
import HotArticles from "../HotArticles/Index";
import Marking from "../Marking/Index";

interface Props {
  frogArticle?: FrogArticleDetailRespDTO;
  type?:string;
}
const ArticlesCont = ({ frogArticle }: Props) => {
  const [markingShow, setMarkingShow] = useState<boolean>(false);
  return (
    <>
      {/* TODO:分类 */}
      <div
        className={classNames("Article viewport", { readLess: markingShow })}
      >
        <div className="Article-main box-style">
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
          <ArticleSwitch frogArticleId={frogArticle?.frogArticleId} type={type}  />
        </div>
        <div className="Article-hot box-style">
          <HotArticles  />
        </div>
      </div>
      {!markingShow&&<Marking/>}
    </>
  );
};

export default ArticlesCont;
