import { useAtom, useAtomValue } from "jotai";
import SecondDrop from "./components/SecondDrop/Index";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import {
  SellerProps,
  fastCatesAtom,
  widthCheckProductCategoryFrontendShortRespDTO,
} from "../CKBSearch/component/SellerCate/Index";
import "./Index.scss";
import { createRef, useMemo } from "react";
import { externalLinks, menu1Items } from "../CKBSearch/initData";
import { searchParamsAtom } from "../CKBSearch";
import ThirdDrop from "./components/ThirdDrop/Index";
import { t } from "i18next";
import { useTranslation } from "@/i18n/client";
import { toTheCkb } from "@/utils/router";
import { useToggle } from "ahooks";
import { Switch } from "antd";
import MyPopover from "./components/MyPopover/Index";
import gbk from "gbk-encode";
import { message } from "antd";

const { encode } = gbk;

const CKBCategory = () => {
  const [fastCates, setFastCates] = useAtom(fastCatesAtom);
  const [seletParams, setSelectParams] = useAtom(searchParamsAtom);
  const selectParams = useAtomValue(searchParamsAtom);
  const { t } = useTranslation();
  // 站内站外搜素
  const [state, { toggle }] = useToggle(false);

  const firstList: SellerProps[] = useMemo(() => {
    return menu1Items.map((i) => {
      return {
        ...i,
        label: t(i.label),
      };
    });
  }, [t]);
  const firstValue = useMemo(() => {
    return firstList?.find((i) => i.key === seletParams.platformType) || {};
  }, [firstList, seletParams.platformType]);

  const nfastCates = fastCates
    .map((i) => {
      return {
        ...i,
        nodeRef: createRef<HTMLDivElement>(),
      };
    })
    .filter((i) => i.check);

  const changeParams = (i: SellerProps) => {
    setSelectParams((val) => {
      return {
        ...val,
        platformType: i.key ?? "",
      };
    });
  };

  // 跳转外链
  const jumpLinks = (key: string = "") => {
    const url = externalLinks[selectParams.platformType];
    const keyword =
      selectParams.platformType === "AM"
        ? "keywords=" + encode(key)
        : "q=" + key;
    window.open(url + keyword);
  };
  //跳转列表
  const jump = (i: widthCheckProductCategoryFrontendShortRespDTO) => {
    // 插件安装不判断
    if (state) {
      jumpLinks(i.cateNameZh);
    }
    toTheCkb(
      `/list?productCategoryFrontendId=${i.productCategoryFrontendId}&schannel=2&platformType=${selectParams.platformType}`
    );
  };

  const toggleFastCates = (
    v: widthCheckProductCategoryFrontendShortRespDTO
  ) => {
    const reverse = !v.check;
    const item = fastCates.find(
      (i) => i.productCategoryFrontendId === v.productCategoryFrontendId
    );
    console.log(item, fastCates);

    if (item) {
      item.check = reverse;
    }
    if (reverse) {
      const len = fastCates.filter((val) => val.check).length;
      if (len >= 8) {
        return t("最多可选择X个", { X: 8 });
      }
    }
    setFastCates(fastCates);
  };

  return (
    <div id="category" className="flex-cen category bt-lg-shadow">
      <div className="flex viewport">
        <SecondDrop
          onChange={changeParams}
          value={firstValue}
          options={firstList}
        />
        <div className="flex-ter fx-1 cate-list">
          {nfastCates.map((i, idx) => {
            return (
              <SecondDrop
                key={i.productCategoryFrontendId}
                className="second-drop flex-1"
                options={i.children}
                itemChilren={(
                  j: widthCheckProductCategoryFrontendShortRespDTO
                ) => {
                  if (j.children?.length) {
                    return (
                      <ThirdDrop
                        value={j}
                        options={j.children}
                        itemChilren={(third) => (
                          <div
                            className="flex line--only third-item cursor-pointer"
                            onClick={() => jump(third)}
                          >
                            {third.label}
                          </div>
                        )}
                      ></ThirdDrop>
                    );
                  }

                  return (
                    <div
                      className="flex line--only btn option-item cursor-pointer"
                      onClick={() => jump(j)}
                    >
                      {j?.label}
                    </div>
                  );
                }}
              >
                <div className="line--only">{i.label}</div>
              </SecondDrop>
            );
          })}
        </div>
        <div className="btn rel toggle line--only flex items-center ">
          <span className="mr-[4px]">{t("站外搜索")}</span>
          <Switch
            value={state}
            onChange={toggle}
            checkedChildren="I"
            unCheckedChildren="O"
          />
        </div>
        <MyPopover toggle={toggleFastCates} />
      </div>
    </div>
  );
};

export default CKBCategory;
