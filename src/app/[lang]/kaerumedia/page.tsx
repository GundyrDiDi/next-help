'use client'
import { Local } from "@/i18n/settings";
import { useState } from "react";
import {bannerData, navList} from "./configData"
import "./index.scss"
import NavBar from "./component/NavBar";


interface Props{
  params: {
    lang: Local;
  }
}

export default function Page({params: {}}: Props){
  const [banner,setBaner]=useState<string>(bannerData.ja.D2C)
  // navIndex
  const [activeIndex,setActiveIndex]=useState<number>(-1)

  const changeNav=(index:number)=>{
    setActiveIndex
  }

  return <div className="Kaerumedia">
    <div className="Kaerumedia-banner">
      <img src={banner} alt="" />
    </div>
    <NavBar navList={navList} changeType={changeNav} activeIndex={activeIndex}/>
  </div>
}


