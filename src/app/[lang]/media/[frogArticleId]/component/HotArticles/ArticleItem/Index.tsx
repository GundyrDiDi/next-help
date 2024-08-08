import classNames from "classnames";
import "./Index.scss";
import { isD2C, isLogin } from "@/utils";
import { FrogArticleRespDTO } from "@/service/customer";
import { SvgCheck } from "@/components/svgs";
import { formatViewNum } from "@/utils/util";
import { useAtom } from "jotai";
import { CustomerDetail, Lang } from "@/model";
import { toLogin, toTheCkb } from "@/utils/router";
import { ENUM_PAGE } from "@/const/enum";

interface Props {
  article: FrogArticleRespDTO;
  type?: string;
}

const ArticleItem = ({ article, type }: Props) => {
  const [lang] = useAtom(Lang);
  const [userInfo] = useAtom(CustomerDetail);
  const articleClick = () => {
    if (!isLogin() && article.noLoginRestriction === 3) {
      toLogin();
      return;
    }
    if (
      article.noMembershipRestriction === 3 &&
      !userInfo?.membership?.templateLevel
    ) {
      toTheCkb(ENUM_PAGE.VIP_LEVEL);
    }
    window.location.href = `/${lang}/media/${article?.frogArticleId}`;
  };

  return (
    <div
      onClick={articleClick}
      className={classNames("ArticleItem", isD2C() ? "d2c" : "b2b")}
    >
      <div className="ArticleItem-img">
        <img
          referrerPolicy="no-referrer"
          src={article?.frogArticleImgUrl}
          alt={article?.frogArticleTitle}
        />
      </div>
      <div className="ArticleItem-title line--2">
        {article?.frogArticleTitle}
      </div>
      <div className="ArticleItem-msg tstn">
        <div className="ArticleItem-msg-read">
          <SvgCheck
            className="icon"
            style={{
              marginRight: "5px",
              fontSize: "12px",
              transform: "scale(1.4)",
            }}
          />
          {formatViewNum(article?.viewNum!)}
        </div>
        <div className="ArticleItem-msg-date">{article?.createTime}</div>
      </div>
    </div>
  );
};

export default ArticleItem;
