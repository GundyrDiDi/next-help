import { SvgCheck } from "@/components/svgs";
import {
  NO_LOGIN_RESTRICTION_TYPE,
  NO_MEMBERSHIP_RESTRICTION_TYPE,
} from "@/const/enum";
import { CustomerDetail } from "@/model";
import { FrogArticleRespDTO } from "@/service/customer";
import {  isD2C, isLogin } from "@/utils";
import { useLink, toLogin } from "@/utils/router";
import { setStationTime } from "@/utils/time";
import { formatViewNum } from "@/utils/util";
import classNames from "classnames";
import { useAtom } from "jotai";

import "./ArticleItem.scss"

interface Props {
  article: FrogArticleRespDTO;
}
const ArticleItem = ({ article }: Props) => {
  const [userInfo] = useAtom(CustomerDetail);
  // TODO：关于类型问题及登录问题需要解决
  const href= useLink(`article/${article.frogArticleId}`,{type:1})
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
    
    location.href=href;

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
              <SvgCheck  style={{ marginRight: "5px",fontSize: "12px", transform: "scale(1.4)", }} />
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
