"use client";
import { Local } from "@/i18n/settings";
import { useEffect, useState } from "react";
import { bannerData, navList } from "./configData";
import NavBar from "./NavBar/Index";
import ArticleList from "./ArticleList/Index";
import { atom, useAtom, useSetAtom } from "jotai";
import HotArticlesList from "./HotArticlesList/Index";
import ArticleDateFilter from "./ArticleDateFilter/Index";
import { Lang, Plat, QueryParams } from "@/model";
import "./index.scss";
import { FrogArticleRespDTO } from "@/service/customer";

interface Props {
  initListArticle:FrogArticleRespDTO[]
}

// 顶部navbar
export default function Page({ initListArticle }: Props) {
  const [lang] = useAtom(Lang);
  const [plat] = useAtom(Plat);
  const [banner, setBaner] = useState<string>("");
  const setQuerys = useSetAtom(QueryParams);

  useEffect(() => {
    setBaner(bannerData[lang][plat.toUpperCase() as "B2B" | "D2C"]);
  }, [lang, plat]);

  const changeNav = (index: number) => {
    console.log(index,'index');
    
    setQuerys((value) => {
      return {
        ...value,
        tab: index,
      };
    });
  };

  return (
    <>
      <div className="Kaerumedia-banner">
        <img src={banner} alt="" />
      </div>
      <div className="Kaerumedia-mainBox">
        <NavBar navList={navList} changeType={changeNav} />
        <div className="Kaerumedia-main viewport">
          <div className="Kaerumedia-main-list">
            <ArticleList initListArticle={initListArticle}/>
          </div>
          <div className="Kaerumedia-main-recom">
            <HotArticlesList />
            <ArticleDateFilter />
          </div>
        </div>
      </div>
    </>
  );
}
