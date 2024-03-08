import classNames from "classnames"
import { NavItem } from "../../configData"
import { useContext } from "react"
import { LocalContext ,useTranslation} from "@/i18n/client"
import "./Index.scss"
 
 interface Props {
  navList:NavItem[],
  navIndex?:number,
  changeType:(index:number)=>void;
 }

 const NavBar=({navList,navIndex,changeType}:Props)=>{
  const lang=useContext(LocalContext)
  const {t}=useTranslation(lang)
  return <div className="Nav">
    <div className="navmain">
    {
      navList?.map((nav)=><div onClick={()=>changeType(nav.value)} key={nav.value} className={classNames("navmain-item",{'active':navIndex===nav.value})}>
        <div>{ t(nav.label) }</div>
      </div>)
    }
    </div>
  </div>
} 

export default NavBar