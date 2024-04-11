/*
 * @Author: shiguang
 * @Date: 2024-04-08 17:04:47
 * @LastEditors: shiguang
 * @LastEditTime: 2024-04-11 15:10:01
 * @Description: 
 */
import { request } from "@/config/request"
import Container from "./Index"
import axios from "axios";
import { SupportCenterContentDTO } from "@/service/customer";



interface PageProps{
    params?: {
        cate: string
    }    
    /** 查询页面的返回值 */
    serchResultList?: SupportCenterContentDTO[]
}

/**
 * 查询页面和分类页面公用的页面
 * @param props 
 * @returns 
 */
export default async function Page(props: PageProps) {
    const { params, serchResultList } = props;
    /** 查询页面 */
    const isSearchPage = Boolean(serchResultList);
    // https://master-gateway.theckb.com/customer/base/supportCenter/subject/contentList?subjectId=108
    const resList = await (async () => {
        if(isSearchPage){
            return serchResultList!;
        }
        const _ = await request.customer.base.supportCenterSubjectContentList({
            subjectId: params?.cate as unknown as number
        })
        return _?.data ?? [];
    })();
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
    return contentList.length ? <Container contentList={contentList} isSearchPage={isSearchPage} /> : null;
}