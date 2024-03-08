import classNames from "classnames"
import { NavItem } from "../configData"
import { useContext } from "react"
import { LocalContext ,useTranslation} from "@/i18n/client"

import "../index.scss"
 
 interface Props {
  navList:NavItem[],
  activeIndex?:number,
  changeType:(index:number)=>void;
 }

 const NavBar=({navList,activeIndex,changeType}:Props)=>{
  const lang=useContext(LocalContext)
  const {t}=useTranslation(lang)
  console.log(navList);
  
  return <div className="Nav">
    <div className="navmain">
    {
      navList?.map((nav)=><div onClick={()=>changeType(nav.value)} key={nav.value} className={classNames("navmain-item",{'active':activeIndex===nav.value})}>
        <div>{ t(nav.label) }</div>
      </div>)
    }
    </div>
  </div>
} 

export default NavBar