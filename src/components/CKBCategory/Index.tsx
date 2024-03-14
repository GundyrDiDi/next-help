import { useAtom } from "jotai";
import SecondDrop from "./components/SecondDrop/Index";
import {CSSTransition} from "react-transition-group"
import { cateListAtom } from "../CKBSearch/component/SellerCate/Index";

const CKBCategory=()=>{
  const [categoryList] = useAtom(cateListAtom);

  
  return <div id="category" className="flex-cen category bt-lg-shadow">
    <div className="flex viewport">
      <SecondDrop/>
      {/* <CSSTransition timeout={200}>
        <div className="flex-ter fx-1 cate-list">
          <SecondDrop>
          </SecondDrop>
        </div>
      </CSSTransition> */}
    </div>
  </div>
}

export default CKBCategory;