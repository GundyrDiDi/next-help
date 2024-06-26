/*
 * @Author: shiguang
 * @Date: 2024-05-15 23:10:55
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-18 17:49:01
 * @Description: 
 */
'use client'

import { request } from "@/config/request";
import { getSiteStation } from "@/utils/language";
import { useRequest } from "ahooks";
import { useParams } from "next/navigation";
import { useTranslation } from "react-i18next";
import IconFlame from "./IconFlame";

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
interface HotArticalListProps {
    isShowHeaderIcon: boolean;
}
const HotArticalList = (props: HotArticalListProps) => {
    const { isShowHeaderIcon } = props;
    const { lang } = useParams();
    const stationCode = getSiteStation(lang as any)
    const { data } = useRequest(
        request.customer.frog.articleHotPage,
        {
            defaultParams: [{ pageNum: 1, pageSize: 12, stationCode }]
        }
    );
    const { t } = useTranslation()
    return <div className="bg-[#fff] rounded-[8px] pc:rounded-[8px] overflow-hidden" >
        <div
            className="bg-[--fcolor] !text-[16px] text-[#fff] leading-[40px] h-[40px] px-[8px] flex items-center"
        >
            {isShowHeaderIcon && <IconFlame className="mr-[8px]" />}
            {t('热门文章')}
        </div>
        {data?.data?.records?.map((item, idx) => <a
            key={idx}
            className="flex text-[#666] text-[14px] px-[8px] py-[10px] cursor-pointer"
            href={`/${lang}/article/${item.frogArticleId}`}
            style={idx !== list.length - 1 ? { borderBottom: '1px dashed #E3E3E3 ' } : {}}
        >
            <div className="line-clamp-2" >{item.frogArticleTitle}</div>
        </a>)}
    </div>
}
export default HotArticalList