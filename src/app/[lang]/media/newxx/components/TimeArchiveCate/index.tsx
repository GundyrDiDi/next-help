/*
 * @Author: shiguang
 * @Date: 2024-05-16 15:02:12
 * @LastEditors: shiguang
 * @LastEditTime: 2024-05-21 10:03:27
 * @Description: 
 */
/*
 * @Author: shiguang
 * @Date: 2024-05-16 15:02:12
 * @LastEditors: shiguang
 * @LastEditTime: 2024-05-16 21:06:28
 * @Description: 时间归档分类列表
 */
'use client'
import { useRequest } from "ahooks";
import { request } from "@/config/request";
import { useState } from "react";
import { useParams } from "next/navigation";
import { getSiteStation } from "@/utils/language";
import { useTranslation } from "react-i18next";

// const { runAsync: articlePage, loading } = useRequest(
//     request.customer.frog.articleArchive,
//     { manual: true }
//   );
const list = [
    {
        title: '中国輸入ヤフオク販売のメリットと儲かる商品のリサーチ方法に…いて中国輸入ヤフオク販売のメリットと儲かる商品のリサーチ方法に…いて中国輸入ヤフオク販売のメリットと儲かる商品のリサーチ方法に…いて',
    },
    {
        title: '中国輸入ヤフオク販売のメリットと儲かる商品のリサーチ方法に…いて中国輸入ヤフオク販売のメリットと儲かる商品のリサーチ方法に…いて中国輸入ヤフオク販売のメリットと儲かる商品のリサーチ方法に…いて',
    },
    {
        title: '中国輸入ヤフオク販売のメリットと儲かる商品のリサーチ方法に…いて中国輸入ヤフオク販売のメリットと儲かる商品のリサーチ方法に…いて中国輸入ヤフオク販売のメリットと儲かる商品のリサーチ方法に…いて',
    },
    {
        title: '中国輸入ヤフオク販売のメリットと儲かる商品のリサーチ方法に…いて中国輸入ヤフオク販売のメリットと儲かる商品のリサーチ方法に…いて中国輸入ヤフオク販売のメリットと儲かる商品のリサーチ方法に…いて',
    },

]
export interface TimeArchiveCateValue {
    frogArticleMonth: number;
    frogArticleYear: number;
}
interface TimeArchiveCateProps {
    value?: TimeArchiveCateValue;
    onChange?: (value?: TimeArchiveCateValue) => void;
}

const TimeArchiveCate = (props: TimeArchiveCateProps) => {
    const { value, onChange } = props;
    const { lang } = useParams();
    const stationCode = getSiteStation(lang as any)
    const { t } = useTranslation()

    const { data } = useRequest(request.customer.frog.articleArchive, { defaultParams: [{ stationCode }] });
    const list = data?.data ?? [];
    const [isExpand, setIsExpand] = useState(false);

    // const 
    
    return <div className="bg-[#fff] pc:rounded-[8px] overflow-hidden text-[#666] text-[14px] " >
        <div
            className="bg-[--pcolor] font-[16px] text-[#fff] leading-[40px] h-[40px] px-[8px]"
            // style={{ borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }}
        >
            {t('分类')}
        </div>
        {(isExpand ? list: list.slice(0,8)).map((item, idx) => {
            const isChoose = item.frogArticleMonth === value?.frogArticleMonth && item.frogArticleYear === value?.frogArticleYear
            return (
                <div
            onClick={() => {
                onChange?.({
                    frogArticleMonth: item.frogArticleMonth!,
                    frogArticleYear: item.frogArticleYear!,
                })
            }}
            key={idx}
            className={`flex px-[8px] py-[10px] cursor-pointer group`}
            style={idx !== list.length - 1 ? { borderBottom: '1px dashed #E3E3E3 ' } : {}}
        >
            <div className={`w-[210px] line-clamp-1 group-hover:text-[--hfccolor] ${isChoose ? 'text-[--hfccolor]' : '' }`} >{item.frogArticleYear}-{item.frogArticleMonth}</div>
            <div className={`group-hover:text-[--hfccolor] ${isChoose ? 'text-[--hfccolor]' : '' }`} >{item.articleNum}</div>
        </div>
            )
        })}
        {list.length > 8 && <div className="bg-[#D6D6D6] h-[20px] flex justify-center items-center cursor-pointer" onClick={() => setIsExpand(!isExpand)} >
            <img src="https://static-s.theckb.com/BusinessMarket/Client/kaerumedia/aw-rt.png" alt="" className={`${isExpand ? '-rotate-90' : 'rotate-90'} w-[16px] h-[16px]`} />
        </div>}
        
    </div>
}

export default TimeArchiveCate