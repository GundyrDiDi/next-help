import {
  SellerProps,
  mergeDataSell,
  widthCheckProductCategoryFrontendShortRespDTO,
} from "@/components/CKBSearch/component/SellerCate/Index";
import classNames from "classnames";
import { useRef, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./Index.scss";

interface Props {
  value?: widthCheckProductCategoryFrontendShortRespDTO;
  options?: mergeDataSell[];
  itemChilren?: (item: mergeDataSell) => React.ReactNode;
}
const ThirdDrop = ({ value, options, itemChilren }: Props) => {
  const [hover, setHover] = useState<boolean>(false);
  const divRef = useRef<HTMLDivElement>(null);
  return (
    <div
      className={classNames("dropdown1 cate-dropdown rel btn second-item w-[100%]", {
        active: hover,
      })}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="flex-ter-bwn btn  option-item w-[100%] cursor-pointer">
        <div className="line--only">{value?.label}</div>
        <i className="ml-5 fa fa-caret-right"></i>
      </div>
      <CSSTransition
        nodeRef={divRef}
        in={hover}
        classNames="fade"
        timeout={100}
      >
        <div hidden={!hover} ref={divRef} className="abs dropdown-menu1 online">
          {value?.children?.map((i) => {
            return <div key={i.productCategoryFrontendId}>{itemChilren && itemChilren(i)}</div>;
          })}
        </div>
      </CSSTransition>
    </div>
  );
};

export default ThirdDrop;
