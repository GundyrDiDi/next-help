import { SvgCheck } from "@/components/svgs";
import {
  NO_LOGIN_RESTRICTION_TYPE,
  NO_MEMBERSHIP_RESTRICTION_TYPE,
} from "@/const/enum";
import { CustomerDetail } from "@/model";
import { FrogArticleRespDTO } from "@/service/customer";
import {  isD2C, isLogin } from "@/utils";
import { lang } from "@/utils/language";
import { gotoLink, toLogin } from "@/utils/router";
import { setStationTime } from "@/utils/time";
import { formatViewNum } from "@/utils/util";
import classNames from "classnames";
import { useAtom } from "jotai";
import Router from "next/router"

interface Props {
  article: FrogArticleRespDTO;
}
const ArticleItem = ({ article }: Props) => {
  const [userInfo] = useAtom(CustomerDetail);
  // 点击跳转文章线详情
  const goArticle = () => {
    if (
      !isLogin() &&
      article.noLoginRestriction === NO_LOGIN_RESTRICTION_TYPE.CHECK_DISABLE
    ) {
      toLogin();
      return;
    }
    if (
      article.noMembershipRestriction ===
        NO_MEMBERSHIP_RESTRICTION_TYPE.CHECK_DISABLE &&
      !userInfo?.membership?.templateLevel
    ) {
      // TODO：非会员弹窗提醒
    }
    // location.href=gotoLink('article',)
    Router.push({pathname:`${lang}/article/${article.frogArticleId}`,})
  };
  return (
    <div
      onClick={goArticle}
      className={classNames("ArticleItem", isD2C() ? "d2c" : "b2b")}
    >
      <div className="ArticleItem-main">
        <div className="ArticleItem-main-pic">
          <img src={article.frogArticleImgUrl} alt={article.frogArticleTitle} />
        </div>
        <div className="ArticleItem-main-text">
          <div className="article-title tstn">{article.frogArticleTitle}</div>
          <div className="article-body tstn">{article.frogArticleSubTitle}</div>
          <div className="article-msg tstn">
            <div className="article-msg-read">
              <SvgCheck style={{ fontSize: "12px", transform: "scale(1.4)" }} />
              {formatViewNum(article?.viewNum!)}
            </div>
            <div className="article-msg-date">
              {setStationTime(article?.createTime!)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleItem;
