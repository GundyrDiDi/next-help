/*
 * @Author: shiguang
 * @Date: 2024-04-09 16:28:24
 * @LastEditors: shiguang
 * @LastEditTime: 2024-04-15 21:07:10
 * @Description: 
 */
'use client'
import { Metadata } from "next";
import { useParams } from "next/navigation";
import { useTranslation } from "react-i18next";
import { Local } from "@/i18n/settings";
import { request } from "@/config/request";
import Breadcrumb from "../../component/Breadcrumb";

interface SupportCenterContentProps {
    videoUrl?: string;
}
const SupportCenterContent = (props: SupportCenterContentProps) => {
    const { videoUrl } = props;
    const { t } = useTranslation();
    const { lang } = useParams();

    return <div >
        {/* <div className="flex justify-center" >
            <div className="mo:bg-white pc:mt-[16px] pad:mt-[16px] pc:mb-[16px] pad:mb-[16px] mo:!py-[0px] pc:w-[1200px]" >
                <Breadcrumb
                    className="mo:py-[8px] mo:px-[12px]"
                    dataSource={[
                        { title: 'TOP', href: 'https://s.theckb.com' },
                        { title: t('帮助中心'), href: `/${lang}/help` },
                    ]}
                />
            </div>
        </div> */}

        <video controls className="h-[calc(100vh-32px)] w-[100%] bg-[#262626]" >
            {!!videoUrl && <source src={videoUrl} />}
        </video>
    </div>
}
export default SupportCenterContent;