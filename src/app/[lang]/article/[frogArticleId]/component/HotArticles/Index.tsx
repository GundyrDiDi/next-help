import "./Index.scss";
import { Lang } from "@/model";
import { useTranslation } from "@/i18n/client";
import { Button, Empty } from "antd";
import { useState } from "react";
import ArticleItem from "./ArticleItem/Index";
import { useAsyncEffect, useRequest } from "ahooks";
import { api } from "@/service";
import { useSite2Station } from "@/utils/language";
import { FrogArticleRespDTO } from "@/service/customer";
import { setStationTime } from "@/utils/time";

interface Props {
  title?: string;
  // 是否显示右侧按钮
  showBtn: boolean;
  type?:string;
}
const HotArticles = ({ title = "热门文章", showBtn }: Props) => {
  const { t } = useTranslation();
  const [list, setList] = useState<FrogArticleRespDTO[]>([]);
  const stationCode = useSite2Station();
  const toKaerumedia = () => {};

  const { runAsync: articlePage } = useRequest(api.customer.frog.articlePage, {
    manual: true,
  });

  useAsyncEffect(async () => {
    const res = await articlePage({ pageNum: 1, pageSize: 3, stationCode });
    setList(
      res.data?.records?.map((i) => {
        return {
          ...i,
          createTime:
            i.frogArticleId === 151 ? undefined : setStationTime(i.createTime),
        };
      }) ?? []
    );
  }, []);

  return (
    <div className="HotArticles">
      <div className="HotArticles-header">
        <div className="HotArticles-header-title">{t(title)}</div>
        <div className="HotArticles-header-btn">
          <Button
            hidden={!showBtn}
            size="large"
            shape="round"
            className="btn custom-plain"
            onClick={toKaerumedia}
          >
            {t("更多最新文章")}
          </Button>
        </div>
      </div>
      <div className="HotArticles-list">
          {!!list.length ? (
            list.map((i) => {
              return <ArticleItem type={type} article={i} key={i.frogArticleId} />;
            })
          ) : (
            <Empty
              className="HotArticles-list-empty"
              description={t("没有更多了")}
            />
          )}
        </div>
    </div>
  );
};

export default HotArticles;
