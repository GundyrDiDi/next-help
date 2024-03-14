import { Form, Input, Popover, Select, Space, Spin } from "antd";
import "./Index.scss";
import classNames from "classnames";
import { ChangeEvent, useRef, useState } from "react";
import { useAtom } from "jotai";
import { useTranslation } from "@/i18n/client";
import { SearchLangType, getSearchLangType, useLangOptions } from "./initData";
import { Lang } from "@/model";
import { useSite2Station } from "@/utils/language";
import { SvgSearch } from "../svgs";
import SellerCate from "./component/SellerCate/Index";
import { Site } from "@/const";
import { isLogin } from "@/utils";
import { toLogin, toTheCkb } from "@/utils/router";
import { isImage, transImgToBase64 } from "@/utils/file";
import { upFileToAliOss } from "@/utils/useUpload";
import { api } from "@/service";
import Particular from "./component/Particular/Index";

const CKBSearch = () => {
  const [t] = useTranslation();
  const [lang] = useAtom(Lang);
  const stationCode = useSite2Station();

  // 空词输入框触发效果
  const [nullTrigger, setNullTrigger] = useState(false);
  // 关键词
  const [keyword, setKeyword] = useState("");
  // 热词展示
  const [showHot, setShowHot] = useState(false);
  // 语言搜索
  const [langType, setLangType] = useState(getSearchLangType(lang));
  // 上传input-dom
  const fileInputRef = useRef<HTMLInputElement>(null);
  // 全局loadin
  const [loading, setLoading] = useState(false);

  // 获取语言下拉
  const options = [
    {
      value: {
        [Site.JA]: SearchLangType.JA, // 日语
        [Site.KO]: SearchLangType.KR, // 韩语
        [Site.EN]: SearchLangType.EN, // 英语
      }[stationCode],
      label: {
        [Site.JA]: "日本语入力",
        [Site.KO]: "한국어 입력",
        [Site.EN]: "English",
      }[stationCode],
    },
    {
      value: SearchLangType.ZH,
      label: t("请输入中文"),
    },
  ];

  /** 照片搜素 */
  const choosePic = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    // TODO：简化原逻辑
    if (!isLogin()) return toLogin();
    if ((file && !isImage(file)) || !file) return;
    setLoading(true);
    const searchRes = await transImgToBase64(file);
    let urlData: any = await upFileToAliOss(file);
    let res1: any = null;
    if (searchRes.data) {
      res1 = await api.goods.image.searchUpload({
        imageBase64: searchRes.data.split(",")[1],
      });
    }
    if (!searchRes.data || !(res1.success && res1.data !== "0")) {
      res1 = await api.goods.image.searchUpload({ imageUrl: urlData?.url });
    }
    setLoading(false);
    if (res1.success)
      toTheCkb(`${lang}/list?imageId=${res1.data}&&imageUrl=${urlData?.url}`);
  };

  // 搜索跳转
  const handleJump=()=>{

  }

  /** 开始搜索 */
  const handleSearch = () => {};
  return (
    <div id="search">
      <div className="flex viewport flex-center">
        <div className="fx-1 flex-end">
          <div className={classNames("mr-[30px] SellerCate")}>
            <SellerCate />
          </div>
        </div>
        <div className="rel search-input flex">
          <Select
            variant="borderless"
            defaultValue={langType}
            onChange={(e) => {
              setLangType(e);
            }}
            options={options}
          ></Select>
          <Input
            variant="borderless"
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
              <>
                <label htmlFor="upload_image" className="flex-ter">
                  <i className="iconfont icon-search_camera1 ico-btn text-[14px] cursor-pointer"></i>
                  <input
                    ref={fileInputRef}
                    hidden
                    id="upload_image"
                    type="file"
                    key="mutate"
                    accept="image/gif,image/png,image/jpeg,image/bmp,image/jpg"
                    onChange={choosePic}
                  />
                </label>
                <Popover open placement="bottom"  content={
                  <Particular setKeyword={setKeyword} keyword={keyword} handleSearch={handleSearch} handleJump={handleJump}/>
                }>
                <div className="pl-[10px] pr-[10px]">
                  <i className="iconfont icon-search_filter1 ico-btn text-[14px] cursor-pointer" ></i>
                </div>
                </Popover>
                <div
                  className="flex-ter rel pl-10 searchIcon h-[10px]"
                  onClick={handleSearch}
                >
                  <SvgSearch className="btn rel font-[18px] text-white ml-[5px]" />
                </div>
              </>
            }
          ></Input>
          <span className="abs icon-down">
            <i className="fa fa-caret-down"></i>
          </span>
        </div>
      </div>
      <Spin spinning={loading} fullscreen />
    </div>
  );
};

export default CKBSearch;
