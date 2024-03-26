import classNames from "classnames";
import "./index.scss";
import { isJA, useSite2Station } from "@/utils/language";
import { Button, Dropdown, MenuProps } from "antd";
import { useAsyncEffect, useRequest, useToggle } from "ahooks";
import { useTranslation } from "@/i18n/client";
import { useEffect, useMemo, useState } from "react";
import { api } from "@/service";
import { Site } from "@/const";
import {
  ProductCategoryFrontendGroupChannelRespDTO,
  ProductCategoryFrontendShortRespDTO,
} from "@/service/goods";
import { atom, useAtom, useAtomValue, useSetAtom } from "jotai";
import { searchParamsAtom } from "../..";
import { atomWithStorage } from "jotai/utils";
import { Local } from "@/i18n/settings";
import { Lang } from "@/model";

interface exProductCategoryFrontendShortRespDTO
  extends ProductCategoryFrontendShortRespDTO {
  label?: string;
}

export interface SellerProps {
  label?: string;
  key?: string;
}

export interface widthCheckProductCategoryFrontendShortRespDTO
  extends ProductCategoryFrontendShortRespDTO {
  check?: boolean;
  label?: string;
  id?: number;
}

export type mergeDataSell =
  | SellerProps
  | widthCheckProductCategoryFrontendShortRespDTO;

export const cateListAtom = atom<exProductCategoryFrontendShortRespDTO[]>([]);
export const fastCatesAtom = atomWithStorage<
  widthCheckProductCategoryFrontendShortRespDTO[]
>("fastCates", []);

interface Props {
  onChange: ({}) => void;
}

const SellerCate = () => {
  const [rotate1, { toggle: rotate1Toggle }] = useToggle();
  const [rotate2, { toggle: rotate2Toggle }] = useToggle();
  const [categoryList, setCateAtom] = useAtom(cateListAtom);
  const [fastCates, setFastCates] = useAtom(fastCatesAtom);
  const lang = useAtomValue(Lang);

  const [seletParams, setSelectParams] = useAtom(searchParamsAtom);
  const { t } = useTranslation();
  const stationCode = useSite2Station();
  // 渠道选择
  // const [seller, setSeller] = useState<SellerProps>();

  const { runAsync: productCategoryFrontendTree } = useRequest(
    api.goods.productCategoryFrontend.tree,
    { manual: true }
  );
  // 渠道列表
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const menu1Items = [
    { label: t("采购来源"), key: "" },
    { label: isJA() ? t("1688国家货盘") : t("1688严选"), key: "AM" },
    { label: t("淘宝"), key: "TB" },
    { label: "Tmall", key: "TM" },
  ];

  // 分类列表显示
  const showDrapText2 = useMemo(() => {
    const cate = categoryList?.find(
      (i) =>
        String(i.productCategoryFrontendId) ===
        seletParams.productCategoryFrontendId
    );

    return (
      {
        [Local.JA]: cate?.cateNameJp,
        [Local.KO]: cate?.cateNameKr,
        [Local.EN]: cate?.cateNameEn,
      }[lang] || cate?.cateNameJp
    );
  }, [categoryList, lang, seletParams.productCategoryFrontendId]);

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
            label: t("类目"),
            productCategoryFrontendId: "",
          } as any,
        ].concat(
          v.productCategoryFrontendShortRespDTOList?.map((i) => {
            return {
              ...i,
              label:
                {
                  [Local.JA]: i?.cateNameJp,
                  [Local.KO]: i?.cateNameKr,
                  [Local.EN]: i?.cateNameEn,
                }[lang] || i?.cateNameJp,
            };
          })
        );
      });
      const v: widthCheckProductCategoryFrontendShortRespDTO[] =
        treeData.find((i) => i.channel === 2)
          ?.productCategoryFrontendShortRespDTOList || [];
      let cate: widthCheckProductCategoryFrontendShortRespDTO[] =
        fastCates || [];
      if (cate.length) {
        const cateSet: Map<number, boolean> = new Map(
          cate.map((v) => [v.productCategoryFrontendId!, v.check!])
        );
        cate = v?.filter((item) => {
          if (cateSet.has(item.productCategoryFrontendId!)) {
            item.check = cateSet.get(item.productCategoryFrontendId!);
            return v;
          }
        });
        const newCate = v.filter((item) => {
          return !cateSet.has(item.productCategoryFrontendId!);
        });
        if (newCate.length) {
          cate = cate.concat(newCate);
        }
      } else {
        let count = 0;
        cate = v.map((item) => {
          if (count < 8) {
            item.check = true;
          }
          count += 1;
          return item;
        });
      }

      const transformData = (
        data: widthCheckProductCategoryFrontendShortRespDTO[] = []
      ): widthCheckProductCategoryFrontendShortRespDTO[] => {
        if (!data.length) {
          return [];
        } else {
          return data.map((item) => {
            return {
              ...item,
              id: item.productCategoryFrontendId,
              label:
                {
                  [Local.JA]: item?.cateNameJp,
                  [Local.KO]: item?.cateNameKr,
                  [Local.EN]: item?.cateNameEn,
                }[lang] || item?.cateNameJp,
              children: transformData(item.children ?? []),
            };
          });
        }
      };

      // TODO:特定channal=2的渠道数据
      setFastCates(transformData(cate));
      setCateAtom(category[2]);
    }
  }, []);

  const seller = useMemo(() => {
    return (
      menu1Items.find((i) => i.key === seletParams.platformType) ||
      menu1Items[0]
    );
  }, [menu1Items, seletParams.platformType]);

  return (
    <div className={classNames("rel custom-plain flex", lang)}>
      <Dropdown
        className={classNames({ dropdown_categroy: isJA() })}
        placement="bottom"
        menu={{
          items: menu1Items.map((i) => {
            return {
              label: (
                <div
                  onClick={() => {
                    setSelectParams((val) => {
                      return {
                        ...val,
                        platformType: i.key,
                      };
                    });
                  }}
                  className="drop-item"
                >
                  {i?.label}
                </div>
              ),
              key: i?.key,
            };
          }),
        }}
        onOpenChange={rotate1Toggle}
      >
        <Button style={{border:'none'}} shape="round" className="xl-btn lf-btn v-line w-[150px] border-none">
          <img
            hidden={seller?.key !== "AM"}
            src={`https://static-s.theckb.com/BusinessMarket/icon/1688selected/home-selected-tips-${lang}.png`}
            alt=""
            className={classNames("regularTagImg", lang)}
          />
          <span className="text-[12px] color: rgba(0, 0, 0, 0.88);">
            {seller?.label}
          </span>
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
            return {
              label: (
                <div
                  onClick={() => {
                    setSelectParams((val) => {
                      return {
                        ...val,
                        productCategoryFrontendId: i.productCategoryFrontendId
                          ? String(i.productCategoryFrontendId)
                          : "",
                        productCategoryFrontendIdNameZh: i.label ?? "",
                      };
                    });
                  }}
                  className="drop-item"
                >
                  <span className="text-[12px] color: rgba(0, 0, 0, 0.88);">
                    {i?.label}
                  </span>
                </div>
              ),
              key: i.productCategoryFrontendId!,
            };
          })!,
        }}
      >
        <Button style={{border:'none'}} shape="round" className="xl-btn rt-btn">
          <div className="line--only text-[12px] w-[60px] align-bottom">
            {showDrapText2}
          </div>
          <i
            className="fa fa-caret-down"
            style={{
              transform: `scaleY(${rotate2 ? -1 : 1})`,
              transformOrigin: "center",
              marginTop: "3px",
            }}
          ></i>
        </Button>
      </Dropdown>
    </div>
  );
};

export default SellerCate;
