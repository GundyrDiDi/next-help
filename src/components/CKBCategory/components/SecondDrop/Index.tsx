import { useState } from "react";
import "./Index.scss";
import classNames from "classnames";

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
