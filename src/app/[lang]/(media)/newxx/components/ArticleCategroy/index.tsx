/*
 * @Author: shiguang
 * @Date: 2024-05-16 15:03:15
 * @LastEditors: shiguang
 * @LastEditTime: 2024-05-16 17:27:24
 * @Description: 
 */
"use client"
import { request } from "@/config/request";
import { FrogArticleType } from "@/service/customer";
import { useRequest } from "ahooks";

interface ArticleCategroyProps{
    value?: string;
    onChange?: (num?: number) => void;
}

const ArticleCategroy = (props: ArticleCategroyProps) => {
    const { onChange, value: _value } = props;
    const value = _value ?? -99;
    const { data } = useRequest(request.customer.frog.articleTypeList, {
        defaultParams: [{
            stationCode: 'JapanStation'
        }]
    });
    const list = data?.data ?? [];
    const renderItem = (item: FrogArticleType, isAll: boolean = false) => {
        return (
            <div
                key={item.id}
                className=""
                onClick={() => {
                    onChange?.(item.id === -99 ? undefined : item.id! )
                }}
                style={{ borderLeft: isAll ? '1px solid rgba(255,255,255,0.4)' : undefined, borderRight: '1px solid rgba(255,255,255,0.4)' }}
            >
                {item.name}
            </div>
        );
    }
    return <div className="flex bg-[#4D7460] text-[#FFF] pc:text-[18px] justify-center" >
        {renderItem({ name: '全部', id: -99 }, true)}
        {list.map((item, idx) => renderItem(item))}
    </div>
}

export default ArticleCategroy