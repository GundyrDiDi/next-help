/*
 * @Author: shiguang
 * @Date: 2024-04-08 17:04:47
 * @LastEditors: shiguang
 * @LastEditTime: 2024-04-16 19:24:49
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
            value: (textRes ?? '') .replaceAll('&nbsp;', ' '),
        }
    })
    return <div>
        <CatePage contentList={contentList} isSearchPage={true} />
    </div>
}
export default Page