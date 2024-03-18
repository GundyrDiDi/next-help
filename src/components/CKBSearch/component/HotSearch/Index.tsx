import { Spin } from "antd";
import "./Index.scss";
import { isLogin } from "@/utils";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useAsyncEffect, useRequest } from "ahooks";
import { api } from "@/service";
import { isEN, isJA, isKO, useSite2Station } from "@/utils/language";
import { CustomerSearchKeywordHotRespDTO } from "@/service/goods";
import { toTheCkb } from "@/utils/router";
import { Site } from "@/const";

interface Props {
  keyword?: string;
  hotSearchSelected: (
    keyword: string,
    item?: CustomerSearchKeywordHotRespDTO
  ) => void;
}

const HotSearch = ({ hotSearchSelected }: Props) => {
  const token = isLogin();
  const { t } = useTranslation();
  const stationCode = useSite2Station();
  const { runAsync: keywordHistory, loading } = useRequest(
    api.goods.search.keywordHistory,
    { manual: true }
  );
  const { runAsync: keywordHost, loading: loading1 } = useRequest(
    api.goods.search.keywordHost,
    {
      manual: true,
    }
  );
  // 历史关键词列表
  const [historyList, setHistoryList] = useState<string[]>();
  // 热搜关键词列表
  const [hotList, setHotList] = useState<CustomerSearchKeywordHotRespDTO[]>();
  // 热词定义
  const hotWord = isJA() ? t("1688国家货盘") : t("1688严选");

  useAsyncEffect(async () => {
    if (token) {
      const res = await keywordHistory({ stationCode } as any);
      setHistoryList(res?.data?.slice(0, 10));
    }
    const res1 = await keywordHost({ stationCode } as any);
    setHotList(
      res1?.data
        ?.map((i) => {
          const keywordList = i?.keywordList?.slice(0, 10);
          return {
            ...i,
            keywordList,
          };
        })
        .reverse()
    );
  }, []);

  const goToList = (path: string) => {
    toTheCkb(`/activity/${path}`);
  };

  return (
    <div className="HotSearch abs">
      <Spin spinning={loading || loading1}>
        {token && (
          <div className="HotSearch-block">
            <div className="HotSearch-title">{t("搜索历史")}</div>
            <div className="otSearch-block-list">
              {!!historyList?.length &&
                historyList.map((i, idx) => {
                  return (
                    <span key={idx} onClick={() => hotSearchSelected(i)}>
                      {i}
                    </span>
                  );
                })}
            </div>
          </div>
        )}
        <div className="HotSearch-title mt-[10px]">{t("热门推荐词")}</div>
        <div className="inline-block">
          {isEN() && (
            <div className="valentinesdayTag ">
              <a
                href="javascript:;"
                onClick={() => goToList("valentinesday")}
                className="valentinesday"
              >
                <div className="flex-cen-ter">
                  {`Happy Valentine's Day`}
                  <img
                    src="https://static-s.theckb.com/BusinessMarket/Client/activity/valentinesday/heart.png"
                    alt=""
                    className="valentinesday-logo"
                  />
                </div>
              </a>
            </div>
          )}
          {isEN() && (
            <div className="tiktokTag ml-[10px]">
              <a
                href="javascript:;"
                onClick={() => goToList("tiktok")}
                className="tiktok "
              >
                <div className="flex-cen-ter">
                  Tiktok made me buy it
                  <img
                    src="https://static-s.theckb.com/BusinessMarket/Client/activity/tiktok/logo.png"
                    alt=""
                    className="tiktok-logo"
                  />
                </div>
              </a>
            </div>
          )}
          {isKO() && (
            <div className="spring-hot-tag">
              <a href="javascript:;" onClick={() => goToList("springHot")}>
                <div className="spring-hot-tag-container">
                  <span className="text">2024년 봄 상품 추천</span>
                  <span className="tag">NEW</span>
                </div>
              </a>
            </div>
          )}
          <div className="regularTag ml-[10px]">
            <div
              className="flex-cen-ter"
              onClick={() => hotSearchSelected(hotWord)}
            >
              <img
                src="https://static-s.theckb.com/BusinessMarket/Client/kaerumedia/thumb.png"
                alt=""
              />
              {hotWord}
            </div>
          </div>
        </div>
        {!!hotList?.length &&
          hotList.map((i, idx) => {
            return (
              <div
                className="HotSearch-block"
                key={i.productCategoryFrontendId}
              >
                <div className="HotSearch-title">
                  {i.cateIcon && (
                    <div className="HotSearch-title-icon">
                      <img
                        referrerPolicy="no-referrer"
                        className="wrap w-[24px]"
                        src={i.cateIcon}
                        alt=""
                      />
                    </div>
                  )}
                  {
                    {
                      [Site.JA]: i.cateNameJp,
                      [Site.KO]: i.cateNameKr,
                      [Site.EN]: i.cateNameEn,
                    }[stationCode]
                  }
                </div>
                <div className="HotSearch-block-list">
                  {!!i.keywordList?.length &&
                    i.keywordList?.map((keyItem) => {
                      return (
                        <span
                          key={keyItem}
                          onClick={() => {
                            hotSearchSelected(keyItem, i);
                          }}
                        >
                          {keyItem}
                        </span>
                      );
                    })}
                </div>
              </div>
            );
          })}
      </Spin>
    </div>
  );
};

export default HotSearch;
