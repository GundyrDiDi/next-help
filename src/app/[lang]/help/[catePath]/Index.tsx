/*
 * @Author: shiguang
 * @Date: 2024-04-08 19:54:03
 * @LastEditors: shiguang
 * @LastEditTime: 2024-04-16 14:55:39
 * @Description: 
 */
'use client'
import { useState } from "react"
import Breadcrumb from "../component/Breadcrumb";
import { useParams } from "next/navigation";
import { useTranslation } from "react-i18next";
import './index.scss';
import ScrollTop from "./components/ScrollTop";
// import { t } from "i18next";

interface Props {
    contentList: {
        label: string;
        value: string;
    }[];
    isSearchPage?: boolean;
    title?: string;
}

const Index = (props: Props) => {
    const { contentList, isSearchPage, title } = props
    const [activeIndex, setActiveIndex] = useState(0);
    const { lang } = useParams();
    const { t } = useTranslation();

    return <div className="flex justify-center pad:px-[20px] mo:px-[0px]" >
        <ScrollTop />
        {/* <div className="pc:w-[1200px]" > */}
        {/* pc:px-[12px] pad:px-[12px] */}
        <div className="mo:w-[100%] pc:w-[1200px]" >
            <div className="mo:bg-white pc:mt-[16px] pad:mt-[16px]" >
                <Breadcrumb
                    className="mo:py-[16px] mo:px-[12px]"
                    dataSource={[
                        { title: 'TOP', href: 'https://s.theckb.com' },
                        { title: t('帮助中心'), href: `/${lang}/help` },
                        { title:  isSearchPage ? t('搜索结果') : title ?? ''},
                    ]}
                />
            </div>
            {isSearchPage ? <div className="mt-[24px] mo:mt-0" /> :
            <div className="my-[24px] mo:my-[8px] flex items-center mo:px-[12px]" >
                <div className="mr-[8px] mo:mr-[4px] w-[4px] h-[24px] bg-[var(--fcolor)]" />
                <h1 className="font-bold text-[24px] mo:text-[16px] my-0" >{title}</h1>
            </div>}
            <div className="text-[14px] text-[#000] mb-[16px] overflow-hidden" >
                {/* 上边 */}
                <div className="mo:mx-[-16px] bg-white" >
                    <div className={`bg-white p-[20px] ${isSearchPage ? 'mo:py-[0px]' : 'mo:py-[12px]' }  mo:px-[12px] mb-[8px]`} >
                        {contentList.map((item, index) => {
                            return <div
                                className={`mo:mx-[12px] rounded-[4px] h-[40px] box-border px-[8px] leading-[40px] hover:text-[var(--fcolor)] text-[var(--fcolor)] hover:bg-[rgba(var(--fcolor-rgb),0.10)] line-clamp-1 hover:cursor-pointer ${index === activeIndex ? 'bg-[rgba(var(--fcolor-rgb),0.10)] font-bold' : ''}`}
                                key={index}
                                onClick={() => {
                                    window.location.hash = String(index+1)
                                    setActiveIndex(index)
                                }}
                            >
                                {item.label}
                            </div>
                        })}
                    </div>
                </div>
                {/* 下边 mo:px-[12px] box-border */}
                <div className="mo:px-[12px]" >
                    {contentList.map((item, index) => {
                        return (
                            <div className="help-artical-content grow bg-white p-[20px] relative mo:p-[0px] mo:bg-[#FAFAFA]" key={index}>
                                <div className="absolute top-[-40px]" id={String(index+1)}  />
                                <h2 className="m-0 p-0 font-bold pc:text-[20px] pad:text-[20px] mo:text-[16px] text-[#000] mo:py-[12px] mo:leading-normal break-all">
                                    {item.label}
                                </h2>
                                <div style={{ borderBottom: '1px solid #E6EAF0' }} className="mt-[20px] mb-[20px] mo:my-[0px]" />
                                <div className="text-[#000]/[.65]" dangerouslySetInnerHTML={{ __html: item.value ?? '' }} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    </div>
}
export default Index