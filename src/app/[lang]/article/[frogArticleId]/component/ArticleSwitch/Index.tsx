import { useTranslation } from "@/i18n/client";
import { api } from "@/service";
import { FrogArticlePrepAndNextRespDTO } from "@/service/customer";
import { useAsyncEffect, useRequest } from "ahooks";
import { Button } from "antd";
import queryString from "query-string";
import { useState } from "react";
import "./Index.scss";
// import { lang } from "@/utils/language";
import { useAtom } from "jotai";
import { Lang } from "@/model";
import { toTheCkb } from "@/utils/router";
import { ENUM_PAGE } from "@/const/enum";

interface Props {
  frogArticleId?: number;
  type?: string;
  source?: string;
}

const ArticleSwitch = ({ frogArticleId, type, source }: Props) => {
  const [lastNextMsg, setLastNextMsg] =
    useState<FrogArticlePrepAndNextRespDTO>();
  const { t } = useTranslation();
  const [lang] = useAtom(Lang);
  const { runAsync: articleGetPrepAndNext, loading } = useRequest(
    api.customer.frog.articleGetPrepAndNext,
    { manual: true }
  );
  const articleSwitch = (id?: number) => {
    location.href = `/${lang}/article/${id}?type=${type}`;
  };

  useAsyncEffect(async () => {
    const res = await articleGetPrepAndNext({
      frogArticleId,
      type: type ? Number(type) : undefined,
    });
    setLastNextMsg(res.data);
  }, []);

  const toKaerumedia = () => {
    toTheCkb(ENUM_PAGE.HOME);
  };

  return (
    <div className="ArticleSwitch viewport">
      <div
        onClick={() => articleSwitch(lastNextMsg?.prepArticleId)}
        className="ArticleSwitch-last"
      >
        {lastNextMsg?.prepArticleId && (
          <>
            <div className="action-text tstn">{t("上一篇")}</div>
            <div className="article-title tstn">
              {lastNextMsg?.prepArticleTitle}
            </div>
          </>
        )}
      </div>
      <div
        onClick={() => articleSwitch(lastNextMsg?.nextArticleId)}
        className="ArticleSwitch-next"
      >
        {lastNextMsg?.nextArticleId && (
          <>
            <div className="action-text tstn">{t("下一篇")}</div>
            <div className="article-title tstn">
              {lastNextMsg?.nextArticleTitle}
            </div>
          </>
        )}
      </div>
      {source !== "shopcart" && (
        <div className="ArticleSwitch-btn">
          <Button
            className="btn"
            type="primary"
            shape="round"
            size="large"
            onClick={toKaerumedia}
          >
            {t("返回")}
          </Button>
        </div>
      )}
    </div>
  );
};

export default ArticleSwitch;
