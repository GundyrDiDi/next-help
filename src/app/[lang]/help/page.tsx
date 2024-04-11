import { request } from '@/config/request';
import { getSiteStation } from '@/utils/language';
import { getCommonDataByCookie } from '@/utils/server';
import Help from './Index';
import { SupportCenterbizType } from './utils';





const Page = async () => {
    const { plat } = getCommonDataByCookie()
    const siteStation  = getSiteStation()
    const res = await request.customer.base.supportCenterTree({
        bizType:  plat === 'b2b' ?  SupportCenterbizType.B : SupportCenterbizType.C,
        stationCode: siteStation,
    });
    console.log(res, 666111);
    return (
        <Help supportCenterSubjectList={res.data ?? []} />
       
    )
}
export default Page;