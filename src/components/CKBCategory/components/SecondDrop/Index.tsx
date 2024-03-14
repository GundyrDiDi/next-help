import { useState } from "react";
import "./Index.scss";
import classNames from "classnames";
import { useAtom } from "jotai";
// import { fastCatesAtom } from "@/components/CKBSearch/component/SellerCate/Index";



const SecondDrop = () => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className={classNames("dropdown cate-dropdown", { active: hover })}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >

    </div>
  );
};

export default SecondDrop;
