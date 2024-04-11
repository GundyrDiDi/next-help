/*
 * @Author: shiguang
 * @Date: 2024-04-08 17:04:47
 * @LastEditors: shiguang
 * @LastEditTime: 2024-04-11 15:35:12
 * @Description: 
 */
import { request } from "@/config/request"
import Container from "./Index"
import axios from "axios";

interface HelpCatePageProps{
    params?: {
        cate: string
    }    
}

/**
 * 查询页面和分类页面公用的页面
 * @param props 
 * @returns 
 */
async function Page(props: HelpCatePageProps) {
    const { params } = props;
    const _ = await request.customer.base.supportCenterSubjectContentList({
        subjectId: params?.cate as unknown as number
    })
    const resList =  _?.data ?? [];

    let contentList = resList.map((item) => {
        return {
            label: item.title!,
            value: '',
        }
    });

    const data = await Promise.all(
        resList.map(item => axios({
            url: item.contentUrl,
            method: 'get'
        }))
    )

    contentList = contentList.map((item, index) => {
        const textRes = data[index];
        return {
            label: item.label!,
            value: textRes.data.replaceAll('&nbsp;', ' '),
        }
    })

    return contentList.length ? <Container contentList={contentList} isSearchPage={false} /> : null;
}

export default Page;