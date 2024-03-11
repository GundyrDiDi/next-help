import { useAsyncEffect, useRequest, useToggle } from "ahooks";
import classNames from "classnames";

import "./Index.scss";
import { useAtom } from "jotai";
import { CustomerDetail, Lang } from "@/model";
import { useTranslation } from "@/i18n/client";
import { useSite2Station } from "@/utils/language";
import { api } from "@/service";
import { useState } from "react";
import { FrogArticleArchiveSortRespDTO } from "@/service/customer";
import { Empty } from "antd";

const ArticleDateFilter = () => {
  const [active,{toggle}] = useToggle();
  const [lang] = useAtom(Lang);
  const { t } = useTranslation(lang);
  const stationCode = useSite2Station();
  const [userInfo] = useAtom(CustomerDetail);
  const [activeList, setActiveList] =
    useState<FrogArticleArchiveSortRespDTO[]>();

  const { runAsync: articlePage, loading } = useRequest(
    api.customer.frog.articleArchive,
    { manual: true }
  );

  useAsyncEffect(async () => {
    const res = await articlePage({ stationCode });
    setActiveList(res.data || []);
  }, []);


  return (
    <div
      className={classNames("ArticleDateFilter tstn", active ? "active" : "")}
    >
      <div className="ArticleDateFilter-title">{t("档案")}</div>
      <div
        className="ArticleDateFilter-main tstn"
        style={{ height: active ? "456px" : "310px" }}
      >
        <div className="ArticleDateFilter-main-box">
          {activeList?.length ? (
            activeList?.map((item, index) => {
              return (
                <div className="ArticleDateFilter-main-item tstn" key={index}>
                  <div className="item-date">
                    {`${item.frogArticleYear}-${item.frogArticleMonth}`}
                  </div>
                  <div className="item-num">{item?.articleNum}</div>
                </div>
              );
            })
          ) : (
            <Empty description={t("没有更多了")} />
          )}
        </div>
      </div>
      <div className="ArticleDateFilter-more" onClick={toggle}>
        <img referrerPolicy="no-referrer" src="https://static-s.theckb.com/BusinessMarket/Client/kaerumedia/aw-rt.png" alt="" />
      </div>
    </div>
  );
};

export default ArticleDateFilter;
