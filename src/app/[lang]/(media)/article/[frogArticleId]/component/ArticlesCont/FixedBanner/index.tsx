/*
 * @Author: shiguang
 * @Date: 2024-05-16 18:23:25
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-20 15:34:20
 * @Description: 
 */
'use client'
import { request } from "@/config/request";
import { getSiteStation } from "@/utils/language";
import { useRequest } from "ahooks";
import { useParams } from "next/navigation";
import { useState } from "react";
import IconClose from "./IconClose";

const fixedBannerExpiredLocalStorageKey = 'fixedBannerExpired';


const FixedBanner = () => {
    const { lang } = useParams();
    const stationCode = getSiteStation(lang as any)
    const { data } = useRequest(request.customer.banner.show, {
        defaultParams: [{
            bannerType: 3, systemSource: 1, stationCode
        }]
    })
    const [isCloseBanner, setIsCloseBanner] = useState(() => {
        const curDate = String((new Date()).getDate())
        const localStorageDate = typeof window !== 'undefined' && window.localStorage.getItem(fixedBannerExpiredLocalStorageKey)
        if (curDate === localStorageDate) return true;
        return false
    });
    const imageUrl = data?.data?.[0]?.bannerImgUrl;
    const bannerImgMobileUrl = data?.data?.[0]?.bannerImgMobileUrl;
    const bannerJumpLink = data?.data?.[0]?.bannerJumpLink
    console.log('tttttttt', imageUrl, bannerImgMobileUrl, isCloseBanner)
    if (!imageUrl || !bannerImgMobileUrl || isCloseBanner) return null;
    console.log('zzzzzzzz', imageUrl)
    return (<div
        id="dewfwf"
        className=" pc:w-[370px] pc:h-[208px] bg-[#ccc] mo:fixed mo:left-0 mo:right-0 bottom-[8px] mo:h-[120px] relative mt-[20px]"
        onClick={() => {
            bannerJumpLink && window.open(bannerJumpLink)
        }}
    >
        <div className="h-[300px] w-[300px] bg-[red]" >fewf</div>
        <div
            className="absolute right-0 top-0 cursor-pointer bg-[#000]/[.25] flex items-center justify-center w-[24px] h-[24px]"
            onClick={(e) => {
                const curDate = String((new Date()).getDate())
                window.localStorage.setItem(fixedBannerExpiredLocalStorageKey, curDate)
                setIsCloseBanner(true)
                e.stopPropagation();
            }}
        >
            <IconClose width={12} height={12} />
        </div>
        <img alt="" src={imageUrl} className="block h-[100%] w-[100%] mo:hidden" />
        <img alt="" src={bannerImgMobileUrl} className="block h-[100%] w-[100%] pc:hidden pad:hidden" />
    </div>)
}

export default FixedBanner;