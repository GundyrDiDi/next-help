/*
 * @Author: shiguang
 * @Date: 2024-04-15 19:32:50
 * @LastEditors: shiguang
 * @LastEditTime: 2024-04-15 19:47:39
 * @Description: 
 */
"use client"
import Link from "next/link";
import { useParams } from "next/navigation";
import { useTranslation } from "react-i18next";

// 280 + 30 = 310
const Empty = () => {
    const { lang } = useParams()
    const { t } = useTranslation();
    
    const getHref = () => {
        return `/${lang}/help`
    }
    return <div>
        <div className="text-[#000]/[.65] text-[14px] font-bold flex items-center justify-center !h-[calc(100vh-310px)]" >
            <div>
                <span>{t('暂无信息')}</span>
                <span>，</span>
                <Link className=" cursor-pointer text-[--fcolor]" href={getHref()} >{t('回到帮助中心')}</Link>
            </div>
        </div>
    </div>
}

export default Empty;