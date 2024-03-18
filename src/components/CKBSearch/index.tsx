import {
  Button,
  Form,
  Input,
  InputProps,
  Popover,
  Select,
  Space,
  Spin,
} from "antd";
import "./Index.scss";
import classNames from "classnames";
import { ChangeEvent, MutableRefObject, useRef, useState } from "react";
import { atom, useAtom, useAtomValue, useSetAtom } from "jotai";
import { useTranslation } from "@/i18n/client";
import {
  SearchLangType,
  externalLinks,
  getSearchLangType,
  useLangOptions,
} from "./initData";
import { Lang, MessageAtom } from "@/model";
import { useSite2Station } from "@/utils/language";
import { SvgOutLink, SvgSearch } from "../svgs";
import SellerCate, { cateListAtom } from "./component/SellerCate/Index";
import { Site } from "@/const";
import { isLogin } from "@/utils";
import { toLogin, toTheCkb } from "@/utils/router";
import { isImage, transImgToBase64 } from "@/utils/file";
import { upFileToAliOss } from "@/utils/useUpload";
import { api } from "@/service";
import Particular, { SearchParams } from "./component/Particular/Index";
import { isUrl } from "@/utils/util";
import queryString from "query-string";
import HotSearch from "./component/HotSearch/Index";
import { CustomerSearchKeywordHotRespDTO } from "@/service/goods";
import { CSSTransition } from "react-transition-group";
import gbk from "gbk-encode";

const { encode } = gbk;
export interface SelectParams {
  // 频道
  platformType: string;
  // 分类
  productCategoryFrontendId: string;
  productCategoryFrontendIdNameZh?: string;
}

export const searchParamsAtom = atom<SelectParams>({
  platformType: "",
  productCategoryFrontendId: "",
  productCategoryFrontendIdNameZh: "",
});
let timer: string | number | NodeJS.Timeout | null | undefined = null;

const CKBSearch = () => {
  const [t] = useTranslation();
  const [lang] = useAtom(Lang);
  const stationCode = useSite2Station();
  const seletParams = useAtomValue(searchParamsAtom);
  const messages = useAtomValue(MessageAtom);
  const PopoverRef1 = useRef<any>(null);
  const InputRef = useRef<any>(null);
  const setSelectParams = useSetAtom(searchParamsAtom);
  const [categoryList] = useAtom(cateListAtom);
  const nodeRef = useRef(null);

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

  const encodeKeyword = (text: any) => {
    if (seletParams.platformType === "AM") {
      return encode(
        text + " " + seletParams.productCategoryFrontendIdNameZh ?? ""
      );
    } else {
      return text + " " + seletParams.productCategoryFrontendIdNameZh ?? "";
    }
  };

  // 搜索跳转
  const handleJump = async (formData: SearchParams = {}) => {
    // TODO:省略插件安装逻辑
    const arr: any = [];
    const { platformType, sortType, sellPrice, other = [] } = formData;
    const startPrice = sellPrice?.min ?? "";
    const endPrice = sellPrice?.max ?? "";
    const url = externalLinks[platformType ?? ""];
    const key = platformType === "AM" ? "keywords=" : "q=";
    if (platformType === "TB") {
      arr.push(
        "sort=" + sortType,
        "filter=" + `reserve_price[${startPrice},${endPrice}]`,
        ...other
      );
    } else if (platformType === "TM") {
      arr.push(
        "sort=" + sortType,
        "start_price=" + startPrice,
        "end_price=" + endPrice,
        ...other
      );
    } else if (platformType === "AM") {
      arr.push(
        "sortType=" + sortType,
        "priceStart=" + startPrice,
        "priceEnd=" + endPrice,
        ...other
      );
    }
    debugger;
    if (["1", "3", "4"].includes(langType) && keyword.trim()) {
      const formData = {
        from: lang,
        to: "zh",
        text: keyword || "",
      };
      const res = await api.goods.translate.common(formData);
      if (res.code === "0") {
        if (res.data === "") {
          arr.unshift(key + encodeKeyword(keyword));
        } else {
          arr.unshift(key + encodeKeyword(res.data));
        }
      } else {
        arr.unshift(key + encodeKeyword(keyword));
      }
      window.open(url + arr.join("&"));
    } else {
      arr.unshift(key + encodeKeyword(keyword));
      window.open(url + arr.join("&"));
    }
  };

  /** 开始搜索 */
  const handleSearch = async (formData: SearchParams = {}) => {
    const kw = keyword.trim();
    if (kw) {
      let query: any = { schannel: 2 };
      if (isUrl(kw)) {
        query.detailUrl = encodeURIComponent(kw);
        setKeyword("");
        toTheCkb(`${lang}/index/pure?detailUrl=${query.detailUrl}`);
      } else {
        if (/[a-zA-Z0-9]{28,36}/.test(kw) && isLogin()) {
          const data = {
            pageSize: 50,
            pageNum: 1,
            keyword: kw,
            stationCode,
          };
          const res = await api.goods.search.products(data);
          const records = res?.data?.records;
          if (records?.length === 1) {
            const productCode = records[0].productCode;
            toTheCkb(`${lang}/goods/${productCode}`);
            return;
          }
        }
        // 传递参数默认化
        const params = {
          descendOrder: true,
          keyword: kw,
          platformType: seletParams.platformType,
          productCategoryFrontendId: seletParams.productCategoryFrontendId,
          langType,
          schannel: 2,
          sortType: formData.sortType,
          sellPriceStart: formData.sellPrice?.min,
          sellPriceEnd: formData.sellPrice?.max,
          _t: Date.now(),
        };
        toTheCkb(`${lang}/list?${queryString.stringify(params)}`);
      }
    }
    // TODO:没有单词的光效
    // else {
    //   setNullTrigger(true)
    //   timer&&clearTimeout(timer)
    //   timer= setTimeout(() => {
    //     InputRef.current&&InputRef.current?.focus()
    //     PopoverRef1.current&&PopoverRef1.current?.close()
    //     setNullTrigger(false)
    //   }, 1500)
    // }
  };

  // 去购物车
  const gotoCar = () => {
    if (isLogin()) return toLogin();
    toTheCkb(`${lang}/shopcart`);
  };

  // 热词选择
  const hotSearchSelected = (
    keyword: string,
    item?: CustomerSearchKeywordHotRespDTO
  ) => {
    console.log(keyword, "keyword");

    setKeyword(keyword);
    if (!item) {
      handleSearch();
    } else {
      const cate = categoryList.find((v) => v.cateNameZh === item.cateNameZh);
      setSelectParams((val) => {
        return {
          ...val,
          productCategoryFrontendId: cate?.productCategoryFrontendId
            ? String(cate?.productCategoryFrontendId)
            : "",
          productCategoryFrontendIdNameZh: cate?.cateNameZh ?? "",
        };
      });
    }
    setShowHot(false);
  };
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
            height={32}
            ref={InputRef}
            onChange={(e) => {
              setKeyword(e.target.value);
            }}
            value={keyword}
            onFocus={() => {
              setShowHot(true);
            }}
            onBlur={() => {
              // setTimeout(() => {
              // }, 100);
              setShowHot(false);
            }}
            addonAfter={
              <div className="flex items-center">
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
                <Popover
                  ref={PopoverRef1}
                  placement="bottom"
                  content={
                    <Particular
                      setKeyword={setKeyword}
                      keyword={keyword}
                      handleSearch={handleSearch}
                      handleJump={handleJump}
                    />
                  }
                >
                  <div className="pl-[10px] pr-[10px]">
                    <i className="iconfont icon-search_filter1 ico-btn text-[14px] cursor-pointer"></i>
                  </div>
                </Popover>
                <div
                  className="flex justify-center items-center searchIcon h-[32px]"
                  onClick={(e) => {
                    handleSearch();
                    setShowHot(false);
                  }}
                >
                  <SvgSearch className="icon rel text-[18px] text-white ml-[5px]" />
                </div>
              </div>
            }
          ></Input>
          <span className="abs icon-down">
            <i className="fa fa-caret-down"></i>
          </span>
          <CSSTransition
            nodeRef={nodeRef}
            in={showHot}
            timeout={200}
            classNames="HotSearchTrans"
          >
            <div ref={nodeRef}>
              {showHot && (
                <HotSearch
                  hotSearchSelected={hotSearchSelected}
                  keyword={keyword}
                />
              )}
            </div>
          </CSSTransition>
          {/* { && (
            
          )} */}
        </div>
        <div className="fx-1 search-btn flex">
          <Button
            className="ml-10 ico-btn guide-btn"
            id="guideBtn"
            disabled={!seletParams.platformType}
            onClick={() => {
              handleJump();
            }}
          >
            <div>
              <SvgOutLink className="icon text-[16px] outline-none	mr-[6px]" />
              <span id="guideText">{t("站外搜索")}</span>
            </div>
          </Button>
          <Button
            className="rel ml-[30px] custom-plain flex items-center"
            onClick={gotoCar}
          >
            <span className="iconfont icon-gouwuche text-[15px] mr-[4px] inline-block align-bottom"></span>
            {t("购物车")}
            {!!messages?.carNum && (
              <span className="abs cart-num " v-show="num !== 0">
                {messages?.carNum > 99 ? "99+" : messages?.carNum}
              </span>
            )}
          </Button>
        </div>
      </div>
      <Spin spinning={loading} fullscreen />
    </div>
  );
};

export default CKBSearch;
