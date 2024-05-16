"use client";
import { CustomerDetailRespDTO, FrogArticleDetailRespDTO } from "@/service/customer";
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
import { getCookieToken, isLogin } from "@/utils";
import { useLink } from "@/utils/router";
import { CustomerDetailRespDTO2 } from "@/model/CustomerDetail";
// import HotArtical from "./HotArtical";
import ArticalCategory from "./ArticalCategory";
import FixedBanner from "./FixedBanner";
import HotArticalList from "@/app/[lang]/(media)/newxx/components/HotArticalList";




interface Props {
  frogArticle?: FrogArticleDetailRespDTO;
  querys: { [key: string]: string | undefined };
  userInfo?: CustomerDetailRespDTO2;
}
const ArticlesCont = ({ frogArticle, querys, userInfo }: Props) => {
  const [markingShow, setMarkingShow] = useState<boolean>(true);
  const href = useLink(`kaerumedia`);

  useMount(() => {
    const imgList = document.getElementById('content-html')?.querySelectorAll('img')
    console.log(imgList, 'imgList');
    imgList?.forEach((item: any) => {
      if (item.dataset.href && item.dataset.href !== '') {
        item.onclick = () => {
          window.open(item.dataset.href)
        }
        item.style.cursor = 'pointer'
      }
    })
    if (frogArticle?.frogArticleId) {
      api.customer.frog.articleCount({
        frogArticleId: frogArticle?.frogArticleId,
      });

      if (!userInfo?.customerId && frogArticle.noLoginRestriction === 3) {
        window.$location.href = href
        return
      }
      if (frogArticle.noMembershipRestriction === 3) {
        if (!userInfo?.customerId || !userInfo?.membership?.templateLevel) {
          window.$location.href = href
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
        if (frogArticle.noLoginRestriction === 2 && userInfo?.customerId) {
          setMarkingShow(false);
          return;
        }
        if (frogArticle.noLoginRestriction === 3) {
          setMarkingShow(false);
          return;
        }
      }
    }
    
  });
  return (
    <>
      <div
        className="justify-center pad:flex pc:flex mo:block article-content mo:py-[20px] px-[12px] bg-[#fff]"
      >
        <div className="pad:flex pc:flex mo:block pad:w-[1200px] pc:w-[1200px] pc:mt-[48px]" >
          <div className="pc:w-[calc(1200px-378px)] mo:w-[100%] " >
            <div className="pc:pr-[20px]">
              <div >
                <h1 className="content-title !text-[30px] !leading-[40px] !m-[0] mo:text-[20px]">{frogArticle?.frogArticleTitle}</h1>
                {frogArticle?.frogArticleId !== 151 && (
                  <div className="text-right mo:text-left mo:mt-[8px] mo:h-[20px] text-[#000]/[0.45]">
                    {setStationTime(frogArticle?.createTime)}
                  </div>
                )}
                <div
                  id="content-html"
                  className="media-help-artical-content"
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
            {/* <div className="">
              <HotArticles showBtn={false} type={querys.type} />
            </div> */}
          </div>
          <div className="pc:w-[370px] shrink-0 mo:w-[100%]" >
            <ArticalCategory/>
            {/* <HotArtical/> */}
            <HotArticalList/>
            <FixedBanner/>
          </div>

        </div>
      </div>
      {markingShow && <Marking />}
    </>
  );
};

export default memo(ArticlesCont);
