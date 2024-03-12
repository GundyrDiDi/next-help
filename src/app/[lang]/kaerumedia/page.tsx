'use client'
import { Local } from "@/i18n/settings";
import { useEffect, useState } from "react";
import {bannerData, navList} from "./configData"
import "./index.scss"
import NavBar from "./component/NavBar/Index";
import ArticleList from "./component/ArticleList/Index";
import { atom, useAtom } from "jotai";
import HotArticlesList from "./component/HotArticlesList/Index";
import ArticleDateFilter from "./component/ArticleDateFilter/Index";
import { Lang,Plat } from "@/model";
import { api } from "@/service";

interface Props{
  params: {
    lang: Local;
  }
}

// 页面的所有的参数
interface QueryAtom {
  tab?: number;
  year?:number;
  month?:number;
}
export const QueryParams=atom<QueryAtom>({tab:-1});

// 顶部navbar
export default function Page({params: {}}: Props){
  const [lang]=useAtom(Lang);
  const [plat]=useAtom(Plat) 
  const [banner,setBaner]=useState<string>('')
  const [querys,setQuerys]=useAtom(QueryParams)

  useEffect(()=>{
    setBaner(bannerData[lang][plat.toUpperCase() as 'B2B'| 'D2C'])
  },[lang, plat])

  const changeNav=(index:number)=>{
    setQuerys((value)=>{
      return {
        ...value,
        tab:index
      }
    })
  }



  return <div className="Kaerumedia">
    <div className="Kaerumedia-banner">
      <img src={banner} alt="" />
    </div>
    <NavBar navList={navList} changeType={changeNav}/>
    <div className="Kaerumedia-main viewport">
      <div className="Kaerumedia-main-list">
      <ArticleList />
      </div>
      <div className="Kaerumedia-main-recom">
        <HotArticlesList/>
        <ArticleDateFilter/>
      </div>
    </div>
  </div>
}


