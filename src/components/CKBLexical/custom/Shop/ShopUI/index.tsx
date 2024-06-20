/* eslint-disable @next/next/no-img-element */
/*
 * @Author: shiguang
 * @Date: 2024-06-12 17:13:19
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-20 20:35:19
 * @Description: 
 */
import { useTranslation } from "react-i18next";
import RightArrow from "../../../Icon/components/RightArrow";
import { getTranslationText } from "../../LexicalTableOfContents/LexicalTableOfContentsInClient";
import { ListDataItem } from "../ShopDecorate";
import { Site, getSiteStationFromPath } from "../../../utils/fetch";

export interface ShopUIProps {
    urlList?: { code: string; url: string; }[];
    onClick?: () => void;
    listData?: ListDataItem[];
}



export interface ShopItemUI extends ListDataItem {
    shopName: string;
    iconUrl: string;
    className?: string;
}

const ShopItemUI = (props: ShopItemUI) => {
    const { iconUrl, shopName, productList, className = '', } = props
    const { t } = useTranslation();
    const isKO = getSiteStationFromPath()?.siteHeader === Site.KO;
    const isJA = getSiteStationFromPath()?.siteHeader === Site.JA;
    return <a
        href={props.originShopUrl}
        target="_blank"
        className={`p-[16px] rounded-[8px] border border-[#F0F0F0] box-border group cursor-pointer ${className}`}
    >
        <div className="mt-[8px] flex mb-[16px] items-center" >
            <img alt="" src={iconUrl} className="w-[24px] h-[24px]" />
            <div className="ml-[4px] line-clamp-1 text-[#1C2026] group-hover:text-[var(--fcolor,#008060)] font-[700]" >{shopName}</div>
            <RightArrow className="ml-[4px] relative top-[-2px]" />
        </div>
        <div className="flex" >
            {productList?.map((item, key) => {
                return <a key={key} className={`w-[calc((100%-16px)/3)] ${key === 0 ? '' : 'ml-[8px]'}`} href={item.originProductUrl} target="_blank" >
                    <div className="w-[100%] grid" >
                        <img
                            alt=""
                            referrerPolicy='no-referrer'
                            src={item.mainImgUrl}
                            className="rounded-[4px] object-cover"
                            style={{
                                gridArea: '1 / 1 / span 1 / span 1',
                                aspectRatio: '1 / 1'
                            }} />
                    </div>
                    <div className={`flex items-center ${isKO ? 'text-[#000]/[.88]' : 'text-[#FF5010]'} text-[16px] mt-[4px]`} >
                        <span className="text-[16px] shrink-0" >{item.cny} {getTranslationText('元', t)}</span>
                        {!isKO && <span className="text-[12px] ml-[4px] line-clamp-1">
                            {isJA && <span>{item.jpy}</span>}
                            {getTranslationText('円', t)}
                            {!isJA && <span>{item.jpy}</span>}
                        </span>}
                        {isKO && <span className="text-[12px] ml-[4px] line-clamp-1">({getTranslationText('円', t)}{item.jpy})</span>}
                    </div>
                </a>
            })}
        </div>

    </a>


}

const ShopUI = (props: ShopUIProps) => {
    const { onClick, listData } = props;
    const shopListData = listData;
    console.log('ShopUI', shopListData)
    if (!shopListData) return null;
    return <div className="pc:flex pc:flex-wrap pc:w-[810px]" onClick={onClick} >
        {/* pc 端 店铺 > 2 的情况 */}
        {shopListData.map((item, index) => {
            return <ShopItemUI
                {...item} key={index} className={`${index % 2 === 0 ? 'pc:mr-[4px]' : 'pc:ml-[4px]'} pc:w-[calc((100%-8px)/2)] mb-[8px]`}
            />
        })}
    </div>

}

export default ShopUI;