/*
 * @Author: shiguang
 * @Date: 2024-04-10 22:25:44
 * @LastEditors: shiguang
 * @LastEditTime: 2024-04-11 14:59:57
 * @Description: 
 */
import { SupportCenterContentDTO } from "@/service/customer";
import { SecondCate } from "../CateList";
import LeftArrowIcon from "../LeftArrowIcon";
import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
interface SearchResultProps {
    onCloseSearch?: () => void;
    searchResList: SupportCenterContentDTO[];
    searchKeywords?: string;
}

const SearchResult = (props: SearchResultProps) => {
    const { onCloseSearch, searchResList, searchKeywords } = props;
    const [activeIdx, setActiveIdx] = useState(0);
    const { lang } = useParams()

    return (
        <div className="px-[32px] mo:px-[12px] pt-[0px] text-[20px] mo:text-[14px] bg-white mb-[16px]" >
            <div className="flex mo:mb-[4px]" >
                <div className="flex items-center py-[32px] mo:py-[8px]  cursor-pointer">
                    <LeftArrowIcon />
                    <span className="pl-[8px] font-bold mo:pl-[4px]" onClick={() => onCloseSearch?.()} >返回首页</span>
                </div>
            </div>
            <div className="mo:hidden" >
                <div className="px-[32px]" style={{ borderTop: '1px solid #f0f0f0' }} >
                    <div className="min-h-[400px]" >
                        <div className="flex flex-wrap pb-[-16px] mt-[32px]" >
                            {searchResList.map((item, key) => {
                                return <SecondCate contentType="search" label={item.title!} value={searchKeywords!} key={key} className="mb-[16px] w-[33%] grow-0" />
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden mo:block" >
                <div className="bg-white w-[100%]" >
                    <div className="bg-white mb-[8px]" >
                        {searchResList.map((item, index) => {
                            return <div
                                className={`font-bold rounded-[4px] h-[40px] box-border px-[16px] leading-[40px] hover:text-[var(--fcolor)] hover:bg-[rgba(var(--fcolor-rgb),0.10)] line-clamp-1 hover:cursor-pointer ${activeIdx === index ? 'text-[var(--fcolor)] bg-[rgba(var(--fcolor-rgb),0.10)]' : ''}`}
                                key={index}
                                onClick={() => {
                                    setActiveIdx(index)
                                }}
                            >
                                <Link href={`/${lang}/help/search?keywords=${searchKeywords}`} >
                                    {item.title}
                                </Link>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SearchResult;