/*
 * @Author: shiguang
 * @Date: 2024-05-16 18:23:25
 * @LastEditors: shiguang
 * @LastEditTime: 2024-05-16 18:33:57
 * @Description: 
 */
import { request } from "@/config/request";
import { useRequest } from "ahooks";
import { useState } from "react";

const FixedBanner = () => {
    const { data } = useRequest(request.customer.banner.show, { defaultParams: [{ bannerType: 3, systemSource: 1, stationCode: 'JapanStation' }] })
    const [isCloseBanner, setIsCloseBanner] = useState(false);
    const imageUrl = data?.data?.[0]?.bannerImgUrl;
    if (!imageUrl || isCloseBanner) return null;
    
    return (<div className="pc:w-[370px] pc:h-[208px] bg-[#ccc] mo:fixed mo:left-0 mo:right-0 bottom-[8px] mo:h-[120px] relative " >
        <div className="absolute right-0 top-0 cursor-pointer" onClick={() => setIsCloseBanner(true) } >关闭</div>
        <img alt="" src={imageUrl} className="block h-[100%]" />
        我是飘窗
    </div>)
}

export default FixedBanner;