/*
 * @Author: shiguang
 * @Date: 2024-04-08 17:04:47
 * @LastEditors: shiguang
 * @LastEditTime: 2024-04-11 15:35:50
 * @Description:
 */
import axios from 'axios';
import { request } from '@/config/request';
import CatePage from '../[catePath]/Index'
import { getCommonDataByCookie } from '@/utils/server';
import { getSiteStation } from '@/utils/language';
import { SupportCenterbizType } from '../utils';

interface SearchProps{
    searchParams: {
        keywords: string;
    }
}
const Page = async (props: SearchProps) => {
    console.log(props, 123)
    const {plat}= getCommonDataByCookie()
    const res = await request.customer.base.supportCenterContentQuery({
        bizType: plat === 'b2b' ? SupportCenterbizType.B : SupportCenterbizType.C,
        contentType: 'text',
        keyword: props.searchParams.keywords,
        stationCode: getSiteStation()
    })
    const resList = res.data ?? [];
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
    return <div>
        <CatePage contentList={contentList} isSearchPage={true} />
    </div>
}
export default Page