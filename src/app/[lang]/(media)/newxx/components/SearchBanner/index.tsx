/*
 * @Author: shiguang
 * @Date: 2024-05-16 14:59:21
 * @LastEditors: shiguang
 * @LastEditTime: 2024-05-17 10:31:11
 * @Description: 
 */

'use client'

import { Plat } from "@/model";
import { ENUM_PLATE } from "@/model/Plat";
import { Button, Input, Space } from "antd";
import { useAtom } from "jotai";
import { ChangeEventHandler } from "react";


interface SearchProps {
    onSearch?: (keywords: string) => void;
    onClickReadRecord?: () => void;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}

const SearchBanner = (props: SearchProps) => {
    const { onSearch, onClickReadRecord, onChange } = props;
    const onSearchClick = () => {
        const dom = document.querySelector('#JS_media-search-keywords') as HTMLInputElement
        console.log(dom.value, 333)
        onSearch?.(dom.value)
    }
    const [plat] = useAtom(Plat);
    const isD2C = ENUM_PLATE.d2c === plat;
    return (
        <div className={`pc:h-[270px] pc:pt-[56px] mo:h-[140px] ${
            isD2C ? `bg-[url('https://static-s.theckb.com/kaerumedia/media_search_bg2.png')]` :
            `bg-[url('https://static-s.theckb.com/kaerumedia/media_search_bg1.png')]`
        }`} >
            <div className="text-center mo:pt-[20px]" >
                <div className="text-[#FAAD14] pc:text-[38px] mo:text-[24px] mo:h-[30px] font-[700] pc:my-[8px]" >KAERU MEDIA</div>
                <div className="text-[#fff] pc:mt-[8px] pc:mb-[16px] pc:text-[16px] mo:text-[14px] mo:mb-[8px]" >ECビジネスの成功に役立つ業界情報を発信</div>
                <div className="flex pc:h-[64px] mo:h-[40px] justify-center pc:mb-[56px]" >
                    <div className="flex pc:w-[640px] rounded-[6px] h-[100%] " >
                        <Space.Compact style={{ width: '100%' }}>
                            <Input placeholder="キーワード検索" id="JS_media-search-keywords" onPressEnter={onSearchClick} onChange={onChange} />
                            <Button type="primary" className="!h-[100%] !bg-[#FAAD14] !text-[16px]" onClick={onSearchClick} >搜索</Button>
                        </Space.Compact>
                    </div>
                    <div className="h-[100%] flex flex-col justify-center font-[700] pc:text-[16px] text-[#fff] pc:ml-[16px] cursor-pointer hover:text-[#FAAD14] mo:!hidden" onClick={onClickReadRecord} >閲覧履歴</div>
                </div>
            </div>
        </div>
    );
}


export default SearchBanner