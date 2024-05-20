/*
 * @Author: shiguang
 * @Date: 2024-05-16 18:23:25
 * @LastEditors: shiguang
 * @LastEditTime: 2024-05-20 14:08:58
 * @Description: 
 */
import { request } from "@/config/request";
import { getSiteStation } from "@/utils/language";
import { useRequest } from "ahooks";
import { useParams } from "next/navigation";
import { useState } from "react";

const FixedBanner = () => {
    const { lang } = useParams();
    const stationCode = getSiteStation(lang as any)

    const { data } = useRequest(request.customer.banner.show, { defaultParams: [{ 
        bannerType: 3, systemSource: 1, stationCode
    }] })
    const [isCloseBanner, setIsCloseBanner] = useState(false);
    const imageUrl = data?.data?.[0]?.bannerImgUrl;
    const bannerImgMobileUrl = data?.data?.[0]?.bannerImgMobileUrl;
    const bannerJumpLink = data?.data?.[0]?.bannerJumpLink
    if (!imageUrl || !bannerImgMobileUrl || isCloseBanner) return null;
    
    return (<div 
        className="pc:w-[370px] pc:h-[208px] bg-[#ccc] mo:fixed mo:left-0 mo:right-0 bottom-[8px] mo:h-[120px] relative " 
        onClick={() => {
            bannerJumpLink && window.open(bannerJumpLink)
        }}
    >
        <div className="absolute right-0 top-0 cursor-pointer" onClick={() => setIsCloseBanner(true) } >关闭</div>
        <img alt="" src={imageUrl} className="block h-[100%] w-[100%] mo:hidden" />
        <img alt="" src={bannerImgMobileUrl} className="block h-[100%] w-[100%] pc:hidden pad:hidden" />
    </div>)
}

export default FixedBanner;