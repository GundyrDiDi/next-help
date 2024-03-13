import classNames from "classnames";
import "./index.scss";
import { isJA, lang, useSite2Station } from "@/utils/language";
import { Button, Dropdown, MenuProps } from "antd";
import { useAsyncEffect, useRequest, useToggle } from "ahooks";
import { useTranslation } from "@/i18n/client";
import { useMemo, useState } from "react";
import { api } from "@/service";
import { Site } from "@/const";
import { ProductCategoryFrontendShortRespDTO } from "@/service/goods";

interface exProductCategoryFrontendShortRespDTO
  extends ProductCategoryFrontendShortRespDTO {
  label?: string;
}

interface SellerProps {
  label?: string;
  key?:string
}

function traverse<T extends { children?: T[] }>(
  arr: T[],
  callback: (v: T) => void
) {
  return arr.map((v) => {
    callback(v);
    if (Array.isArray(v.children)) {
      v.children = traverse(v.children, callback);
    }
    return v;
  });
}

const SellerCate = () => {
  const [rotate1, { toggle: rotate1Toggle }] = useToggle();
  const [rotate2, { toggle: rotate2Toggle }] = useToggle();
  const { t } = useTranslation();
  const stationCode = useSite2Station();
  // 渠道选择
  const [seller, setSeller] = useState<SellerProps>();
  

  const { runAsync: productCategoryFrontendTree } = useRequest(
    api.goods.productCategoryFrontend.tree,
    { manual: true }
  );
  // 分类列表
  const [categoryList, setcCategoryList] = useState<
    exProductCategoryFrontendShortRespDTO[]
  >([]);
  // 分类ID
  const [productCategoryFrontendId, setProductCategoryFrontendId] =
    useState<number>();

  useAsyncEffect(async () => {
    const res = await productCategoryFrontendTree({ stationCode });
    const treeData = res.data;
    if (treeData) {
      treeData.sort((a, b) => (a?.channel ?? 0) - (b?.channel ?? 0));
      const category: any = {};
      treeData.forEach((v) => {
        category[v.channel!] = [
          {
            cateNameJp: t("类目"),
            cateNameKr: t("类目"),
            cateNameEn: t("类目"),
            productCategoryFrontendId: "",
          } as any
        ].concat(v.productCategoryFrontendShortRespDTOList?.map((i) => {
          return {
            ...i,
            label:
              {
                [Site.JA]: i?.cateNameJp,
                [Site.KO]: i?.cateNameKr,
                [Site.EN]: i?.cateNameEn,
              }[stationCode] || i?.cateNameJp,
          };
        }));
      });
      console.log(category[2],'category[2]');
      
      // 暂时写死(透明购)
      setcCategoryList(category[2]);
    }
  }, []);

  const menu1Items = [
    { label: t("采购来源"), key: "" },
    { label:isJA()? t('1688国家货盘') : t('1688严选'), key: "AM" },
    { label: t("淘宝"), key: "TB" },
    { label: "Tmall", key: "TM" },
  ];

  const showDrapText2 = useMemo(() => {
    const cate = categoryList?.find(
      (i) => i.productCategoryFrontendId === productCategoryFrontendId
    );
    return (
      {
        [Site.JA]: cate?.cateNameJp,
        [Site.KO]: cate?.cateNameKr,
        [Site.EN]: cate?.cateNameEn,
      }[stationCode] || cate?.cateNameJp
    );
  }, [categoryList, productCategoryFrontendId, stationCode]);

  return (
    <div className={classNames("rel custom-plain", lang)}>
      <Dropdown
        className={classNames({ dropdown_categroy: isJA() })}
        placement="bottom"
        menu={{
          items: menu1Items.map((i) => {
            return {
              label: <div onClick={() => {
              setSeller(i);
            }} 
            className="drop-item">{i?.label}</div>,
            key: i?.key,
            };
          }),
        }}
        onOpenChange={rotate1Toggle}
      >
        <Button className="xl-btn lf-btn v-line">
        <img
        hidden={seller?.key !== 'AM'}
        src={`https://static-s.theckb.com/BusinessMarket/icon/1688selected/home-selected-tips-${lang}.png`}
        alt="" className={classNames('regularTagImg',lang)} />
          {seller?.label}
          <i
            className="fa fa-caret-down"
            style={{ transform: `scaleY(${rotate1 ? -1 : 1})` }}
          ></i>
        </Button>
      </Dropdown>
      <Dropdown
        onOpenChange={rotate2Toggle}
        placement="bottom"
        menu={{
          items: categoryList.map((i) => {
            return { label: <div  className="drop-item">{i.label}</div>, key: i.productCategoryFrontendId! };
          })!,
        }}
      >
        <Button className="xl-btn rt-btn">
          {showDrapText2}
          <i
            className="fa fa-caret-down"
            style={{ transform: `scaleY(${rotate2 ? -1 : 1})` }}
          ></i>
        </Button>
      </Dropdown>
    </div>
  );
};

export default SellerCate;
