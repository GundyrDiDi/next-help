/*
 * @Author: shiguang
 * @Date: 2024-04-08 11:36:34
 * @LastEditors: shiguang
 * @LastEditTime: 2024-04-12 10:07:08
 * @Description: 
 */
import { request } from '@/config/request';
import { getSiteStation } from '@/utils/language';
import { getCommonDataByCookie } from '@/utils/server';
import Help from './Index';
import { SupportCenterbizType } from './utils';





const Page = async () => {
    const { plat } = getCommonDataByCookie()
    const siteStation = getSiteStation()
    const res = await request.customer.base.supportCenterTree({
        bizType: plat === 'b2b' ? SupportCenterbizType.B : SupportCenterbizType.C,
        stationCode: siteStation,
    });
    return (
        <Help
            supportCenterSubjectList={res.data ?? []}
            siteStation={siteStation}
        />

    )
}
export default Page;