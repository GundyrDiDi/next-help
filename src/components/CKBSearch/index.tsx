import { Input, Select, Space } from "antd";
import "./Index.scss";
import classNames from "classnames";
import { useState } from "react";
import { useAtom } from "jotai";
import { useTranslation } from "@/i18n/client";
import { getSearchLangType, useLangOptions } from "./initData";
import { Lang } from "@/model";
import { useSite2Station } from "@/utils/language";
import { SvgSearch } from "../svgs";
import SellerCate from "./component/SellerCate/Index";

const CKBSearch = () => {
  const [nullTrigger, setNullTrigger] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [showHot, setShowHot] = useState(false);
  const [t] = useTranslation();
  const stationCode = useSite2Station();
  const options = useLangOptions(stationCode);
  const [lang] = useAtom(Lang);
  const [langType, setLangType] = useState(getSearchLangType(lang));
  const [tipsVisabled,setTipsVisabled]=useState(false);

  /** 开始搜索 */
  const handleSearch = () => {};
  return (
    <div id="search">
      <div className="flex viewport flex-center">
        <div className="fx-1 flex-end">
          <div className={classNames('mr-[30px] SellerCate',{'flash-trigget':tipsVisabled})}>
            <SellerCate/>
          </div>
        </div>
        <div className="rel search-input flex">
          <Select
            defaultValue={langType}
            onChange={(e) => {
              setLangType(e);
            }}
            options={options}
          ></Select>
          <Input
            className={classNames("rel", { "null-trigger": nullTrigger })}
            placeholder={t("请输入主营类目、品牌名称或风格")}
            maxLength={500}
            onChange={(e) => {
              setKeyword(e.target.value);
            }}
            value={keyword}
            onFocus={() => {
              setShowHot(true);
            }}
            onBlur={() => {
              setShowHot(false);
            }}
            suffix={
              <div
                className="flex-ter rel pl-10 searchIcon h-[10px]"
                onClick={handleSearch}
              >
                <SvgSearch className="btn rel font-[18px] text-white ml-[5px]" />
              </div>
            }
          ></Input>

          <span className="abs icon-down">
            <i className="fa fa-caret-down"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CKBSearch;
