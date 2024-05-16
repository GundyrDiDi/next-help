/*
 * @Author: shiguang
 * @Date: 2024-05-10 14:43:54
 * @LastEditors: shiguang
 * @LastEditTime: 2024-05-16 14:19:54
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
interface SearchProps {
  onSearch: (keywords: string) => void;
  onClickReadRecord?: () => void;
}

const SearchArticle = (props: SearchProps) => {
  const { onSearch, onClickReadRecord } = props;
  const onSearchClick = () => {
    const dom = document.querySelector('#JS_media-search-keywords') as HTMLInputElement
    console.log(dom.value, 333)
    onSearch(dom.value)
  }
  return (
    <div className="text-center pc:mt-[56px]" >
      <div className="text-[#FAAD14] pc:text-[38px] font-[700] pc:mb-[8px]" >KAERU MEDIA</div>
      <div className="text-[#fff] pc:mt-[8px] pc:mb-[16px] pc:text-[16px]" >ECビジネスの成功に役立つ業界情報を発信</div>
      <div className="flex pc:h-[64px] justify-center mb-[56px]" >
        <div className="flex pc:w-[640px] rounded-[6px] h-[100%] " >
          <Space.Compact style={{ width: '100%' }}>
            <Input placeholder="キーワード検索" id="JS_media-search-keywords" onPressEnter={onSearchClick} />
            <Button type="primary" className="!h-[100%] !bg-[#FAAD14] !text-[16px]" onClick={onSearchClick} >Submit</Button>
          </Space.Compact>
        </div>
        <div className="h-[100%] flex flex-col justify-center font-[700] pc:text-[16px] text-[#fff] pc:ml-[16px] cursor-pointer hover:text-[#FAAD14]" onClick={onClickReadRecord} >閲覧履歴</div>
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
  
  const onSearch = (keyword: string) => {
    setQuerys((value) => {
      return {
        ...value,
        // tab: undefined,
        keyword,
      };
    });
  }
  const changeNav = (index: number) => {
    console.log(index, 'index');
    setQuerys((value) => {
      return {
        ...value,
        tab: index,
        isShowReadRecord: false,
      };
    });
  };

  return (
    <>
      <div className="Kaerumedia-banner bg-[url('https://static-s.theckb.com/kaerumedia/media_search_bg1.png')] ">
        {/* <img src={banner} alt="" /> */}
        {/* <div className="absolute left-0 bottom-0 right-0" > */}
          <SearchArticle 
            onSearch={onSearch} 
            onClickReadRecord={() => {
              debugger
              setQuerys({
                isShowReadRecord: true,
              });
            }} 
          />
        {/* </div> */}
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
