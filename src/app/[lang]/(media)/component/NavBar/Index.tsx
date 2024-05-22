/*
 * @Author: shiguang
 * @Date: 2024-04-08 11:30:20
 * @LastEditors: shiguang
 * @LastEditTime: 2024-05-16 14:32:45
 * @Description: 
 */
import classNames from "classnames";
import { NavItem } from "../configData";
import { useContext } from "react";
import { LocalContext, useTranslation } from "@/i18n/client";
import "./Index.scss";
import { useAtom } from "jotai";
import { QueryParams } from "@/model";

interface Props {
  navList: NavItem[];
  changeType: (index: number) => void;
}

const NavBar = ({ navList, changeType }: Props) => {
  const { t } = useTranslation();
  const [querys] = useAtom(QueryParams);
  // console.log(111);
  
  return (
    <div className="Nav">
      <div className="navmain viewport flex-nowrap">
        {navList?.map((nav) => (
          <div
            onClick={() => {
              changeType(nav.value)
            }}
            key={nav.value}
            className={classNames("navmain-item one-line", {
              active: querys.tab === nav.value,
            })}
          >
            <div>{t(nav.label)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
