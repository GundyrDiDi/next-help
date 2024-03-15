import { useAtom, useAtomValue } from "jotai";
import SecondDrop from "./components/SecondDrop/Index";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import {
  SellerProps,
  cateListAtom,
  fastCatesAtom,
} from "../CKBSearch/component/SellerCate/Index";
import "./Index.scss";
import { createRef, useMemo } from "react";
import { menu1Items } from "../CKBSearch/initData";
import { searchParamsAtom } from "../CKBSearch";
import { useSite2Station } from "@/utils/language";
import { Site } from "@/const";

const CKBCategory = () => {
  const [categoryList] = useAtom(cateListAtom);
  const fastCates = useAtomValue(fastCatesAtom);
  const [seletParams, setSelectParams] = useAtom(searchParamsAtom);
  const stationCode = useSite2Station();

  const firstValue = useMemo(() => {
    return menu1Items?.find((i) => i.key === seletParams.platformType) || {};
  }, [seletParams.platformType]);
  console.log(fastCates, "fastCates");

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

  return (
    <div id="category" className="flex-cen category bt-lg-shadow">
      <div className="flex viewport">
        <SecondDrop
          onChange={changeParams}
          value={firstValue}
          options={menu1Items}
        />
        <div className="flex-ter fx-1 cate-list">
          {nfastCates.map((i, idx) => {
            return (
              <CSSTransition key={i.productCategoryFrontendId} timeout={200}>
                <SecondDrop ref={i.nodeRef} itemChilren={
                  <>
                  </>
                }>
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
