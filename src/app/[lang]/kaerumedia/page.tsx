'use client'
import { Local } from "@/i18n/settings";
import { useState } from "react";
import {bannerData, navList} from "./configData"
import "./index.scss"
import NavBar from "./component/NavBar/Index";
import ArticleList from "./component/ArticleList/Index";
import { atom, useAtom } from "jotai";


interface Props{
  params: {
    lang: Local;
  }
}

// 顶部navbar
const navTab=atom<number>(0);

export default function Page({params: {}}: Props){
  const [banner,setBaner]=useState<string>(bannerData.ja.D2C)
  // navIndex
  const [navIndex,setActiveIndex]=useAtom(navTab)

  const changeNav=(index:number)=>{
    setActiveIndex(index)
  }

  return <div className="Kaerumedia">
    <div className="Kaerumedia-banner">
      <img src={banner} alt="" />
    </div>
    <NavBar navList={navList} changeType={changeNav} navIndex={navIndex}/>
    <div className="Kaerumedia-main viewport">
      <div className="Kaerumedia-main-list">
      <ArticleList navIndex={navIndex}/>
      </div>
      <div className="Kaerumedia-main-recom"></div>
    </div>
  </div>
}


