import { useTranslation } from "@/i18n/client";
import { CustomerDetail, Lang } from "@/model";
import { api } from "@/service";
import { HotFrogArticleRespDTO } from "@/service/customer";
import { useSite2Station } from "@/utils/language";
import { useAsyncEffect, useRequest } from "ahooks";
import { Empty } from "antd";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import "./Index.scss";
import { isLogin } from "@/utils";
import { toLogin, toTheCkb } from "@/utils/router";
import { ENUM_PAGE } from "@/const/enum";

const HotArticlesList = () => {
  const { t } = useTranslation();
  const [lang] = useAtom(Lang);
  const stationCode = useSite2Station();
  const [userInfo] = useAtom(CustomerDetail);
  // 热门分类列表
  const [hotList, setHotList] = useState<HotFrogArticleRespDTO[]>();

  const { runAsync: articleHotPage, loading } = useRequest(
    api.customer.frog.articleHotPage,
    { manual: true }
  );

  useAsyncEffect(async () => {
    const res = await articleHotPage({ pageNum: 1, pageSize: 12, stationCode });
    setHotList(res.data?.records || []);
  }, []);

  // 跳转文章详情
  const toArticle = (article: HotFrogArticleRespDTO) => {
    if (!isLogin() && article.noLoginRestriction === 3) {
      toTheCkb(ENUM_PAGE.LOGIN,false);
      return;
    }
    if (
      article.noMembershipRestriction === 3 &&
      !userInfo?.membership?.templateLevel
    ) {
      toTheCkb(ENUM_PAGE.VIP_LEVEL);
      return;
    }
    window.$location.href = `/${lang}/article/${
      article?.frogArticleId
    }`;
  };

  return (
    <div className="HotArticlesList">
      <div className="HotArticlesList-title">{t("热门文章")}</div>
      <div className="HotArticlesList-main">
        <div className="HotArticlesList-main-box">
          {hotList?.length ? (
            hotList.map((i) => {
              return (
                <div
                  onClick={() => toArticle(i)}
                  key={i.frogArticleId}
                  className="HotArticlesList-main-item tstn"
                >
                  <span>{i.frogArticleTitle}</span>
                </div>
              );
            })
          ) : (
            <Empty description={t("没有更多了")} />
          )}
        </div>
      </div>
    </div>
  );
};

export default HotArticlesList;
