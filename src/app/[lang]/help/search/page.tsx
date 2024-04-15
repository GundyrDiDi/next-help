/*
 * @Author: shiguang
 * @Date: 2024-04-08 17:04:47
 * @LastEditors: shiguang
 * @LastEditTime: 2024-04-15 14:49:08
 * @Description:
 */
import axios from 'axios';
import { request } from '@/config/request';
import CatePage from '../[catePath]/Index'
import { getCommonDataByCookie } from '@/utils/server';
import { getSiteStation } from '@/utils/language';
import { SupportCenterbizType } from '../utils';
import { Local } from '@/i18n/settings';

interface SearchProps {
    params: {
        lang: Local;
    };
    searchParams: {
        keywords: string;
    }
}
const Page = async (props: SearchProps) => {
    const { params } = props;
    const { lang } = params;
    const { plat } = getCommonDataByCookie()
    const siteStation = getSiteStation(lang as Local)
    const res = await request.customer.base.supportCenterContentQuery({
        bizType: plat === 'b2b' ? SupportCenterbizType.B : SupportCenterbizType.C,
        contentType: 'text',
        keyword: props.searchParams.keywords,
        stationCode: siteStation
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