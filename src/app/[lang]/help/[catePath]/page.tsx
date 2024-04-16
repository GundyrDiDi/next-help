/*
 * @Author: shiguang
 * @Date: 2024-04-08 17:04:47
 * @LastEditors: shiguang
 * @LastEditTime: 2024-04-16 19:22:00
 * @Description: 
 */
import axios from "axios";
import { Metadata } from "next";
import { request } from "@/config/request"
import { Local } from "@/i18n/settings";
import Container from "./Index"
import Empty from "./components/Empty";


interface HelpCatePageProps{
    params?: {
        catePath: string;
        lang: Local;
    }    
}

const getMetaConf = async (params: Required<HelpCatePageProps>['params']) => {
    const { lang } = params;
    const _ = await request.customer.base.supportCenterQueryByPath({
        // subjectId: params?.catePath as unknown as number
        path: params?.catePath
        
    })
    
    const description = _.data?.description ?? '';
    const conf: Record<Local, Metadata> = {
        [Local.JA]: {
            title: "二级目录标题 |中国輸入代行・THE CKBなら丸投げOK！",
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
    { params }: { params: Required<HelpCatePageProps>['params'] },

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


/**
 * 查询页面和分类页面公用的页面
 * @param props 
 * @returns 
 */
async function Page(props: HelpCatePageProps) {
    const { params } = props;
    // const _ = await request.customer.base.supportCenterSubjectContentList({
    //     subjectId: params?.catePath as unknown as number
    // })
    // /customer/base/supportCenter/query/byPath
    console.log(11111111)
    console.log(11111111)
    console.log(11111111)
    let errmsg: string = '';
    const _ = await (async () => {
        try {
            const res = await request.customer.base.supportCenterQueryByPath({
                // subjectId: params?.catePath as unknown as number
                path: params?.catePath
                
            })
            return res
        } catch (error) {
            console.log(error);
            errmsg = String(error);
            return undefined;
        }
    })()
    console.log(22222222)
    console.log(22222222)
    console.log('errmsg', errmsg)
    console.log(22222222)
    console.log(22222222)

    const resList =  _?.data?.contentList ?? [];

    let contentList = resList.map((item) => {
        return {
            label: item.title!,
            value: '',
        }
    });

    const _data = await Promise.all(
        resList.map(item => request.customer.base.supportCenterQueryGetSupportCenterContentById({
            contentId: item.supportCenterContentId
        }))
    )
    const data = _data.map((item: any) => {
        return item.data.content
    })

    contentList = contentList.map((item, index) => {
        const textRes = data[index];
        return {
            label: item.label!,
            value: (textRes ?? '').replaceAll('&nbsp;', ' '),
        }
    })

    if(errmsg){
        return <div>request.customer.base.supportCenterQueryByPath {errmsg}</div>
    }
    return contentList.length ? <Container title={_?.data?.subject} contentList={contentList} isSearchPage={false} /> : <Empty/>;
}

export default Page;