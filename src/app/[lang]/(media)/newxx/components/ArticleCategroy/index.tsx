/*
 * @Author: shiguang
 * @Date: 2024-05-16 15:03:15
 * @LastEditors: shiguang
 * @LastEditTime: 2024-05-16 20:21:42
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
// -1 是全部 
// -99 是不展示
const ArticleCategroy = (props: ArticleCategroyProps) => {
    const { onChange, value: _value } = props;
    const value = _value ?? -99;
    const { data } = useRequest(request.customer.frog.articleTypeList, {
        defaultParams: [{
            stationCode: 'JapanStation'
        }]
    });
    console.log(_value, 'wwwwww', data);

    const list = data?.data ?? [];

    const renderItem = (item: FrogArticleType, isAll: boolean = false) => {
        return (
            <div
                key={item.id}
                className={`pc:w-[170px] h-[100%] flex items-center justify-center cursor-pointer hover:bg-[#004C3F] ${
                    item.id === value ? 'bg-[#004C3F]' : ''
                }`}
                onClick={() => {
                    debugger
                    onChange?.(item.id === -1 ? undefined : item.id!)
                }}
                style={{ borderLeft: isAll ? '1px solid rgba(255,255,255,0.4)' : undefined, borderRight: '1px solid rgba(255,255,255,0.4)' }}
            >
                {item.name}--{item.id}
            </div>
        );
    }
    return <div className="flex bg-[#4D7460] text-[#FFF] pc:text-[18px] pc:h-[50px] justify-center" >
        {renderItem({ name: '全部', id: -1 }, true)}
        {list.map((item, idx) => renderItem(item))}
    </div>
}

export default ArticleCategroy