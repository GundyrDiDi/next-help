import { SellerProps } from "@/components/CKBSearch/component/SellerCate/Index";
import classNames from "classnames";
import { useRef, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

interface Props {
  children?: React.ReactNode;
  options?: SellerProps[];
  itemChilren?: (item: SellerProps) => React.ReactNode;
}
const ThirdDrop = ({ children, options, itemChilren }: Props) => {
  const [hover, setHover] = useState<boolean>(false);
  const divRef = useRef<HTMLDivElement>(null);
  return (
    <div
      className={classNames("dropdown cate-dropdown rel", { active: hover })}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="flex-ter-bwn btn line--only">
        {children}
        <i className="ml-5 fa fa-caret-right"></i>
      </div>
      <CSSTransition
        nodeRef={divRef}
        in={hover}
        classNames="fade"
        timeout={100}
      >
        <div ref={divRef} className="abs dropdown-menu online">
          {options?.map((i) => {
            return <div key={i.key}>{itemChilren && itemChilren(i)}</div>;
          })}
        </div>
      </CSSTransition>
    </div>
  );
};

export default ThirdDrop;
