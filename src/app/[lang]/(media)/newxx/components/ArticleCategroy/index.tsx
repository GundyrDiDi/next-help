/*
 * @Author: shiguang
 * @Date: 2024-05-16 15:03:15
 * @LastEditors: shiguang
 * @LastEditTime: 2024-05-21 14:42:20
 * @Description: 
 */
"use client"
import { request } from "@/config/request";
import { FrogArticleType } from "@/service/customer";
import { getSiteStation } from "@/utils/language";
import { useRequest } from "ahooks";
import { useParams } from "next/navigation";
import { useTranslation } from "react-i18next";

interface ArticleCategroyProps{
    value?: string;
    onChange?: (num?: number) => void;
}
// -1 是全部 
// -99 是不展示
const ArticleCategroy = (props: ArticleCategroyProps) => {
    const { onChange, value: _value } = props;
    const { lang } = useParams()
    const value = _value ?? -99;
    const { data } = useRequest(request.customer.frog.articleTypeListCustomer, {
        defaultParams: [{
            stationCode: getSiteStation(lang as any)
        }]
    });
    console.log(_value, 'wwwwww', data);

    const { t } = useTranslation();
    

    const list = data?.data ?? [];

    const renderItem = (item: FrogArticleType, isAll: boolean = false) => {
        return (
            <div
                key={item.id}
                className={`pc:w-[170px] pad:w-[124px] h-[100%] flex items-center justify-center cursor-pointer hover:bg-[--dcolor)] line-clamp-1 ${
                    item.id === value ? 'bg-[--dcolor]' : ''
                } mo:!px-[16px] mo:!shrink-0 mo:!h-[50px]`}
                onClick={() => {
                    onChange?.(item.id!)
                }}
                style={{ borderLeft: isAll ? '1px solid rgba(255,255,255,0.4)' : undefined, borderRight: '1px solid rgba(255,255,255,0.4)' }}
            >
                <span className="line-clamp-1" >{item.name}</span>
            </div>
        );
    }
    return <div className="flex bg-[--pcolor] text-[#FFF] pc:text-[18px] pc:h-[50px] pad:h-[50px] pc:justify-center mo:overflow-x-auto" >
        {/* <div>11222222222222222222222222222222</div>
        <div>111</div>
        <div>111</div>
        <div>111</div>
        <div>111</div>
        <div>111</div>
        <div>111</div>
        <div>111</div>
        <div>111</div>
        <div>111</div>
        <div>111</div>
        <div>111</div>
        <div>111</div>
        <div>111</div>
        <div>111</div>
        <div>33333322</div> */}
        {renderItem({ name: t('全部'), id: -1 }, true)}
        {list.map((item, idx) => renderItem(item))}
    </div>
}

export default ArticleCategroy