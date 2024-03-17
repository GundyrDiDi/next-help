import { createRef, useMemo, useRef, useState } from "react";
import "./Index.scss";
import classNames from "classnames";
import {
  SellerProps,
  mergeDataSell,
} from "@/components/CKBSearch/component/SellerCate/Index";
import { CSSTransition, TransitionGroup } from "react-transition-group";
interface Props {
  children?: React.ReactNode;
  value?: SellerProps;
  options?: mergeDataSell[];
  itemChilren?: (param: mergeDataSell) => React.ReactNode;
  ref?: any;
  onChange?: (i: SellerProps) => void;
  className?: string;
}

const SecondDrop = ({
  children,
  value,
  options,
  itemChilren,
  ref,
  onChange,
  className,
}: Props) => {
  const trRef = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);
  return (
    <div
      ref={ref}
      className={classNames("dropdown cate-dropdown rel seller", className, {
        active: hover,
      })}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="line--only flex-ter btn  flex title-item">
        {children ? children : <div>{value?.label}</div>}
        <i
          style={{ transform: `scaleY(${hover ? -1 : 1})` }}
          className="ml-5 fa fa-caret-down"
        ></i>
      </div>
      <CSSTransition in={hover} classNames="fade" nodeRef={trRef} timeout={100}>
        <div hidden={!hover} ref={trRef} className="abs dropdown-menu">
          {options?.map((i) => {
            return (
              <div
                key={i.label}
                className="btn"
                onClick={() => {
                  onChange && onChange(i);
                  setHover(false);
                }}
              >
                {itemChilren ? (
                  itemChilren(i)
                ) : (
                  <div className="option-item">{i?.label}</div>
                )}
              </div>
            );
          })}
        </div>
      </CSSTransition>
    </div>
  );
};

export default SecondDrop;
