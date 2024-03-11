import { atom } from 'jotai';
import { request } from '@/config/request';
import { CustomerDetailRespDTO, CustomerMembershipResDTO } from '@/service/customer';
import {  Site, simpleSite } from '@/const';
import { getCookieToken } from '@/utils';
import cookie from 'js-cookie'
import { TokenSignCookie } from '@/config';


interface MembershipDTO extends CustomerMembershipResDTO {
    templateLevel:number;
}
interface CustomerDetailRespDTO2 extends CustomerDetailRespDTO {
    membership?: MembershipDTO;
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
        try {
            if(getCookieToken){
                const response =await request.customer.getCustomerDetails.getCustomerDetails();
            const res = {
                ...response.data,
                isJA: response.data?.stationCode === Site.JP,
                isKO: response.data?.stationCode === Site.KR,
                isEN: response.data?.stationCode === Site.UK
            };
            set(atomCustomerDetail, res as CustomerDetailRespDTO2);
            const fistShopId = response.data?.customerShopList?.[0].customerShopId||'';
            window.localStorage.setItem('production_route/curShop',String(fistShopId));
            }
           
        } catch {
            cookie.remove(TokenSignCookie)
        }
    }
);

export default atomRequestCustomerDetail;
