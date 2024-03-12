import { useTranslation } from "@/i18n/client";
import { CustomerDetail, Lang } from "@/model";
import { api } from "@/service";
import { HotFrogArticleRespDTO } from "@/service/customer";
import { useSite2Station } from "@/utils/language";
import { useAsyncEffect, useRequest } from "ahooks";
import { Empty } from "antd";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import "./Index.scss"
import { isLogin } from "@/utils";
import { toLogin } from "@/utils/router";

const HotArticlesList = () => {
  const { t } = useTranslation();
  const stationCode=useSite2Station()
  const [userInfo] = useAtom(CustomerDetail);
  // 热门分类列表
  const [hotList, setHotList] = useState<HotFrogArticleRespDTO[]>();

  const { runAsync: articleHotPage, loading } = useRequest(
    api.customer.frog.articleHotPage,
    { manual: true }
  );

  useAsyncEffect(async () => {
    const res =await articleHotPage({pageNum:1,pageSize:12,stationCode});
    setHotList(res.data?.records || []);
  }, []);

  // 跳转文章详情
  const toArticle=(item:HotFrogArticleRespDTO)=>{
    if (!isLogin() && item.noLoginRestriction === 3) {
      toLogin()
      return
    }
    if (item.noMembershipRestriction === 3 && !userInfo?.membership?.templateLevel) {
      // TODO:开通会员，会员权限
      return
    }
    // TODO：跳转文章详情
    // router.push(useRtfix('article', { params: { id: item.frogArticleId, type: 2 } }))
  }

  return (
    <div className="HotArticlesList">
      <div className="HotArticlesList-title">{t("热门文章")}</div>
      <div className="HotArticlesList-main">
        <div className="HotArticlesList-main-box">
          {hotList?.length?hotList.map((i) => {
            return <div onClick={()=>toArticle(i)} key={i.frogArticleId} className="HotArticlesList-main-item tstn">
              <span>{i.frogArticleTitle}</span>
            </div>
          }):
          <Empty description={t('没有更多了')}/>
        }
        </div>
      </div>
    </div>
  );
};

export default HotArticlesList;
