/* eslint-disable @next/next/no-img-element */
/*
 * @Author: shiguang
 * @Date: 2024-06-12 15:06:29
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-20 23:45:29
 * @Description: 
 */
import { ListDataItem } from "../ProductDecorate";
import { getTranslationText } from "../../LexicalTableOfContents/LexicalTableOfContentsInClient";
import { useTranslation } from "react-i18next";
import { Site, getSiteStationFromPath, getSubHostName } from "../../../utils/fetch";

// post 请求 入参 productCode
// https://gateway-prod.theckb.com/goods/product/detail

// POST 入参 detailUrl from=index
// https://gateway-prod.theckb.com/goods/search/url

export interface ProductUIProps {
    urlList?: { url: string; code: string }[];
    onClick?: (urlList?: string[]) => void;
    listData?: ListDataItem[];
}

interface ProductColItemUI extends ListDataItem {
    href?: string;
    className?: string;
}

const ProductVerticalUI = (props: ProductColItemUI) => {
    const { t } = useTranslation();
    const { mainImgUrl, iconUrl, title, cny, jpy, className = '', href } = props
    const isKO = getSiteStationFromPath()?.siteHeader === Site.KO;
    const isJA = getSiteStationFromPath()?.siteHeader === Site.JA || getSubHostName() === 'system';

    return <a
        href={href}
        target="_blank"
        className={`ProductVerticalUI p-[8px] rounded-[8px] border border-[#ffffff] hover:border-[#F0F0F0] box-border group cursor-pointer ${className}`}
    >
        <div className="w-[100%] grid" >
            <img
                alt=""
                src={mainImgUrl}
                referrerPolicy='no-referrer'
                className="rounded-[4px] object-cover"
                style={{
                    gridArea: '1 / 1 / span 1 / span 1',
                    aspectRatio: '1 / 1'
                }}
            />
        </div>
        {/* <img alt="" src={mainImgUrl} className="w-[100%] h-auto rounded-[4px] object-cover" /> */}
        <div className="mt-[8px] flex  " >
            <img alt="" src={iconUrl} className="w-[24px] h-[24px]" />
            <div
                className="ml-[4px] line-clamp-1 text-[#1C2026] group-hover:text-[#008060] leading-[24px]"
                style={{ wordBreak: 'break-all' }}
            >
                {title}
            </div>
        </div>
        <div className={`flex items-center ${isKO ? 'text-[#000]/[.88]' : 'text-[#FF5010]'} text-[16px] mt-[4px]`} >
            <span className="text-[16px] font-[700] shrink-0" >{cny} 元</span>
            {!isKO && <span className="text-[12px] ml-[4px] line-clamp-1">
                {/* {jpy} {getTranslationText('円', t)} */}
                {isJA && <span>{jpy}</span>}
                {getTranslationText('円', t)}
                {!isJA && <span>{jpy}</span>}
            </span>}
            {isKO && <span className="text-[12px] ml-[4px] line-clamp-1">({getTranslationText('円', t)}{jpy})</span>}

        </div>
    </a>
}

const ProductHorizontalUI = (props: ProductColItemUI) => {
    const { mainImgUrl, title, cny, jpy, className = '', href } = props
    const { t } = useTranslation();
    const isKO = getSiteStationFromPath()?.siteHeader === Site.KO;
    const isJA = getSiteStationFromPath()?.siteHeader === Site.JA || getSubHostName() === 'system';


    // const getSiteStationFromPath
    return <a
        href={href} target="_blank"
        className={`ProductHorizontalUI flex !items-stretch border border-[#ffffff] hover:border-[#F0F0F0] rounded-[8px] p-[8px] cursor-pointer group box-border ${className}`} >
        <img src={mainImgUrl} alt="" className="w-[120px] h-[120px] rounded-[4px] shrink-0" />
        <div className="grow flex flex-col ml-[8px] justify-between" >
            <div className="group-hover:text-[var(--fcolor,#008060)] line-clamp-2 !break-all" >{title}</div>
            <div className={`flex items-center ${isKO ? 'text-[#000]/[.88]' : 'text-[#FF5010]'}`} >
                <span className="text-[16px] font-[700] shrink-0" >{cny} 元</span>
                {!isKO && <span className="text-[12px] ml-[4px] line-clamp-1">
                    {isJA && <span>{jpy}</span>}
                    {getTranslationText('円', t)}
                    {!isJA && <span>{jpy}</span>}
                    {/* {jpy} {getTranslationText('円', t)} */}
                </span>}
                {isKO && <span className="text-[12px] ml-[4px] line-clamp-1">({getTranslationText('円', t)}{jpy})</span>}
            </div>
        </div>
    </a>
}
const testCase = [
    {
        url: 'https://s.theckb.com/ja/goods/AM-610878291823',
        code: 'AM-103574988'
    },
    {
        url: 'https://detail.1688.com/offer/733882229114.html?spm=a260k.dacugeneral.0.0.663335e4Pkv2QG&resultType=normal',
        code: 'AM-1043676263'
    },
    // {
    //     url: 'https://detail.tmall.com/item.htm?id=545199877176&spm=a21bo.jianhua/b.201876.d10.5af92a89Xa0lEm&scm=1007.40986.369799.0&pvid=be07d886-d61b-4c98-8d69-879aa82d9031',
    //     code: 'AM-1043678304'
    // },
    // {
    //     url: 'https://detail.tmall.com/item.htm?spm=875.7931836.0.0.66144265lWFLDW&scm=1007.12710.81708.111&id=777498332862&pvid=399fcd07-2570-4e70-a700-1dd45b82855f',
    //     code: 'AM-1106175048'
    // },
    // {
    //     url: 'https://s.theckb.com/ja/goods/AM-1255752551',
    //     code: 'AM-1108851844'
    // },
]

const ProductUI = (props: ProductUIProps) => {
    const { listData } = props;
    const productListData = listData
    // const productListData = useProductListData(testCase)
    if (!productListData) return;
    return <>
        <div className={`flex flex-wrap w-[810px] mo:!hidden pad:!hidden ${productListData.length > 2 ? '' : '!hidden'} zzz`}>
            {/* pc 端 商品 > 2 的情况 */}
            {productListData.map((item, index) => {
                return <ProductVerticalUI
                    href={item.originProductUrl}
                    {...item}
                    key={index}
                    className={`${index % 4 === 3 ? '' : 'mr-[8px]'} w-[196px] leading-[24px]`}
                />
            })}
        </div>
        <div className={`flex ${productListData.length <= 2 ? '' : '!hidden'} mo:!hidden pad:!hidden xxx jus`} >
            {/* pc 端 商品 <= 2 的情况 */}
            {productListData.slice(0, 2).map((item, index) => {
                return <ProductHorizontalUI
                    {...item} href={item.originProductUrl}
                    key={index}
                    className={`${index === 0 ? 'mr-[4px]' : 'ml-[4px]'} w-[50%]`}
                />
            })}
        </div>
        {/* h5 pad 商品 */}
        <div className="flex flex-wrap pc:!hidden www" >
            {productListData.map((item, index) => {
                return <ProductVerticalUI
                    {...item}
                    key={index}
                    href={item.originProductUrl}
                    className={`${index % 2 === 0 ? 'mr-[4px]' : 'ml-[4px]'} w-[calc(50%-4px)]`}
                />
            })}
        </div>
    </>

}

export default ProductUI;