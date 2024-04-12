/*
 * @Author: shiguang
 * @Date: 2024-04-09 16:28:24
 * @LastEditors: shiguang
 * @LastEditTime: 2024-04-12 16:06:12
 * @Description: 
 */
import { request } from "@/config/request";
import { Local } from "@/i18n/settings";
import { Metadata } from "next";
interface PageProps {
    params: {
        supportCenterContentId: string;
        lang: Local;
    }
}

const getMetaConf = async ({supportCenterContentId, lang}: PageProps['params']) => {
    const res = await request.customer.base.supportCenterQueryGetSupportCenterContentById({
        contentId: supportCenterContentId as unknown as number
    })
    const description = res.data?.description;
    
    const conf: Record<Local, Metadata> = {
        [Local.JA]: {
            title: `THE CKBヘルプガイド |${res.data?.title}`,
            description,
        },
        [Local.KO]: {
            title: undefined,
            description,
        },
        [Local.EN]: {
            title: undefined,
            description,
        }
    };
    return conf[lang]
}

export async function generateMetadata(
    { params }: { params: PageProps['params'] },
): Promise<Metadata> {
    const metaConf = await getMetaConf(params)
    const title =  metaConf?.title ?? 'THE CKB';
    const description =  metaConf?.description ?? 'THE CKB';
    return {
        metadataBase: new URL("https://s.theckb.com/"),
        alternates: {
            canonical: "/",
            languages: {
                en: "/en",
                ko: "/ko",
                ja: "/ja",
            },
        },
        title: title,
        description,
        openGraph: {
            siteName: "THE CKB",
            images: "https://static-s.theckb.com/BusinessMarket/Client/favicon.ico",
            title,
            description,
        },
    };
}


// 通过 supportCenterContentId 查询内容

const Page = async (props: PageProps) => {
    const { params } = props;
    const res = await request.customer.base.supportCenterQueryGetSupportCenterContentById({
        contentId: params.supportCenterContentId as unknown as number
    })
    console.log(3333, res)

    const videoUrl = res.data?.contentUrl
    return <div>
        <h1 className="hidden" >{res.data?.title}</h1>
        <video controls className="h-[calc(100vh-32px)] w-[100%] bg-[#262626]" >
            {!!videoUrl && <source src={videoUrl} />}
        </video>
    </div>
}
export default Page;