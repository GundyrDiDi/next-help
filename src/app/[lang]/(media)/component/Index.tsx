/*
 * @Author: shiguang
 * @Date: 2024-05-10 14:43:54
 * @LastEditors: shiguang
 * @LastEditTime: 2024-05-16 00:09:31
 * @Description: 
 */
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
import { Button, Input, Space } from "antd";

interface Props {
  initListArticle: FrogArticleRespDTO[]
}

const Search = () => {
  return (
    <div className="bg-[#ccc] text-center" >
      <div className="text-[#FAAD14] pc:text-[38px] font-[700] pc:mb-[8px]" >KAERU MEDIA</div>
      <div className="text-[#fff] pc:mt-[8px] pc:mb-[16px] pc:text-[16px]" >ECビジネスの成功に役立つ業界情報を発信</div>
      <div className="flex pc:h-[64px] justify-center mb-[56px]" >
        <div className="flex pc:w-[640px] rounded-[6px] h-[100%] " >
          {/* <Input placeholder="キーワード検索" className="h-[100%]" style={{  flexGrow: 2 }} />
          <div className="pc:w-[96px] h-[100%] bg-[#FAAD14] text-[#fff] flex flex-col justify-center" >检索</div> */}
          {/* <Input.Search
            placeholder="input search text"
            allowClear
            enterButton="Search"
            className="h-[100%]"
            
            size="large"
          // onSearch={onSearch}
          /> */}
          <Space.Compact style={{ width: '100%' }}>
            <Input defaultValue="キーワード検索" />
            <Button type="primary" className="!h-[100%] !bg-[#FAAD14] !text-[16px]" >Submit</Button>
          </Space.Compact>
        </div>
        <div className="h-[100%] flex flex-col justify-center font-[700] pc:text-[16px] text-[#fff] pc:ml-[16px]" >閲覧履歴</div>
      </div>
    </div>
  );
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
    console.log(index, 'index');

    setQuerys((value) => {
      return {
        ...value,
        tab: index,
      };
    });
  };

  return (
    <>
      <div className="Kaerumedia-banner relative">
        <img src={banner} alt="" />
        <div className="absolute top-0 left-0 bottom-0 right-0" >
          <Search />
        </div>
      </div>
      <div className="Kaerumedia-mainBox">
        <NavBar navList={navList} changeType={changeNav} />
        <div className="Kaerumedia-main viewport">
          <div className="Kaerumedia-main-list">
            <ArticleList initListArticle={initListArticle} />
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
