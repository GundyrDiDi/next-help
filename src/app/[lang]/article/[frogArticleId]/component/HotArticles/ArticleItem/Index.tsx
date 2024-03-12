import classNames from "classnames";
import "./Index.scss";
import { isD2C } from "@/utils";
import { FrogArticleRespDTO } from "@/service/customer";
import { SvgCheck } from "@/components/svgs";
import { formatViewNum } from "@/utils/util";

interface Props {
  article: FrogArticleRespDTO;
}

const ArticleItem = ({ article }: Props) => {
  const articleClick = () => {};

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
