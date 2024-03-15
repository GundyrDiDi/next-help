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
import { menu1Items } from "../CKBSearch/initData";
import { searchParamsAtom } from "../CKBSearch";
import { useSite2Station } from "@/utils/language";
import { Site } from "@/const";
import ThirdDrop from "./components/ThirdDrop/Index";
import { t } from "i18next";
import { useTranslation } from "@/i18n/client";

const CKBCategory = () => {
  const fastCates = useAtomValue(fastCatesAtom);
  const [seletParams, setSelectParams] = useAtom(searchParamsAtom);
  const { t } = useTranslation();
  const firstList: any = useMemo(() => {
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
    .filter((i) => i.check).slice(0,1);

  const changeParams = (i: SellerProps) => {
    setSelectParams((val) => {
      return {
        ...val,
        platformType: i.key ?? "",
      };
    });
  };

  const jump = (i: any) => {};

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
              <CSSTransition key={i.productCategoryFrontendId} timeout={200}>
                <SecondDrop
                  ref={i.nodeRef}
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
                              className="flex line--only third-item"
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
                        className="flex line--only btn option-item"
                        onClick={() => jump(j)}
                      >
                        {j?.label}
                      </div>
                    );
                  }}
                >
                  <div className="line--only">{i.label}</div>
                </SecondDrop>
              </CSSTransition>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CKBCategory;
