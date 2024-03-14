import { useAtom } from "jotai";
import SecondDrop from "./components/SecondDrop/Index";
import { CSSTransition } from "react-transition-group";
import {
  cateListAtom,
  fastCatesAtom,
} from "../CKBSearch/component/SellerCate/Index";

const CKBCategory = () => {
  const [categoryList] = useAtom(cateListAtom);
  const fastCates = useAtom(fastCatesAtom);

  return (
    <div id="category" className="flex-cen category bt-lg-shadow">
      <div className="flex viewport">
        <SecondDrop />
        <CSSTransition timeout={200}>
          {/* <div >
            {fastCates.map((i, idx) => {
              return (
                <div key={idx} className="flex-ter fx-1 cate-list">
                  <SecondDrop></SecondDrop>
                </div>
              );
            })}
          </div> */}
        </CSSTransition>
      </div>
    </div>
  );
};

export default CKBCategory;
