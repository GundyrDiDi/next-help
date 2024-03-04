import { atom } from 'jotai';
import { request } from '@/config/request';
import { CustomerDetailRespDTO } from '@/service/customer';
import { getCountryByNavigatorLang, Site, simpleSite } from '@/const';
import { getCookieToken } from '@/utils';
interface CustomerDetailRespDTO2 extends CustomerDetailRespDTO {
    site?: string;
    isKO?: boolean;
    isJA?: boolean;
    isEN?: boolean;
}

export const atomCustomerDetail = atom<CustomerDetailRespDTO2 | undefined>(
    undefined
);



const atomRequestCustomerDetail = atom(
    (get) => get(atomCustomerDetail),
    async (_get, set) => {
        const defaultStationCode = getCountryByNavigatorLang();
        try {
            if(getCookieToken){
                const response =
                await request.customer.getCustomerDetails.getCustomerDetails();
            localStorage.setItem(
                'stationCode',
                response.data?.stationCode as string
            );
            const res = {
                ...response.data,
                site: getSite(response.data?.stationCode ?? ''),
                isJA: response.data?.stationCode === Site.JP,
                isKO: response.data?.stationCode === Site.KR,
                isEN: response.data?.stationCode === Site.UK
            };
            set(atomCustomerDetail, res);
            }
           
        } catch {
            localStorage.setItem('stationCode', defaultStationCode);
        }
    }
);

export default atomRequestCustomerDetail;
