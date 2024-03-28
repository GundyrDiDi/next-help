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
import { useAtom, useAtomValue } from "jotai";
import { CustomerDetail } from "@/model";
import { isLogin } from "@/utils";
import { useLink } from "@/utils/router";
import { flushSync } from "react-dom";

interface Props {
  frogArticle?: FrogArticleDetailRespDTO;
  querys: { [key: string]: string | undefined };
}
const ArticlesCont = ({ frogArticle, querys }: Props) => {
  const [markingShow, setMarkingShow] = useState<boolean>(true);
  const userInfo = useAtomValue(CustomerDetail);
  const href = useLink(`kaerumedia`);
  useMount(() => {
    if (frogArticle?.frogArticleId) {
      api.customer.frog.articleCount({
        frogArticleId: frogArticle?.frogArticleId,
      });
      if (!isLogin() && frogArticle.noLoginRestriction === 3) {
        location.href=href
        return
      }
      if (frogArticle.noMembershipRestriction === 3) {
        if (!isLogin() || !userInfo?.membership?.templateLevel) {
          location.href=href
          return
        }
        setMarkingShow(false);
      }

      if (
        frogArticle.noMembershipRestriction === 2 &&
        userInfo?.membership?.templateLevel &&
        userInfo?.membership?.templateLevel > 1
      ) {
        setMarkingShow(false);
        return;
      }
      if (frogArticle.noMembershipRestriction === 1) {
        if (frogArticle.noLoginRestriction === 1) {
          setMarkingShow(false);
          return;
        }
        if (frogArticle.noLoginRestriction === 2 && isLogin()) {
          setMarkingShow(false);
          return;
        }
        if (frogArticle.noLoginRestriction === 3) {
          setMarkingShow(false);
          return;
        }
      }
    }
    flushSync(()=>{
      const imgList = document.getElementById('content-html')?.querySelectorAll('img')
      imgList?.forEach((item: any) => {
        if (item.dataset.href && item.dataset.href !== '') {
          item.onclick = () => {
            window.open(item.dataset.href)
          }
          item.style.cursor = 'pointer'
        }
      })
    })
  });
  return (
    <>
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
              id="content-html"
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
