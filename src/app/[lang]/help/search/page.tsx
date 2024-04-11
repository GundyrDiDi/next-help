/*
 * @Author: shiguang
 * @Date: 2024-04-08 17:04:47
 * @LastEditors: shiguang
 * @LastEditTime: 2024-04-11 13:41:41
 * @Description:
 */
import { request } from '@/config/request';
import CatePage from '../[cate]/page'
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
    return <div>
        <CatePage serchResultList={ (res.data ?? []) } />
    </div>
}
export default Page