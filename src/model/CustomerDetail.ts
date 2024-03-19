import { atom } from 'jotai';
import { request } from '@/config/request';
import { CustomerDetailRespDTO, CustomerMembershipResDTO } from '@/service/customer';
import {  Site } from '@/const';
import { getCookieShop, getCookieToken, setCookieShopId } from '@/utils';
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
    {}
);


const atomRequestCustomerDetail = atom(
    (get) => get(atomCustomerDetail),
    async (_get, set) => {
        try {
            if(getCookieToken){
                const response =await request.customer.getCustomerDetails.getCustomerDetails();
            const res = {
                ...response.data,
                isJA: response.data?.stationCode === Site.JA,
                isKO: response.data?.stationCode === Site.KO,
                isEN: response.data?.stationCode === Site.EN
            };
            set(atomCustomerDetail, res as CustomerDetailRespDTO2);
            const fistShopId = response.data?.customerShopList?.[0].customerShopId||'';
           const shopId=  getCookieShop()||'';
           const index =response.data?.customerShopList?.findIndex(i=>String(i?.customerShopId)===shopId)||-1;
           if(index>-1){
            setCookieShopId(shopId!)
           }else{
            setCookieShopId(String(fistShopId))
           }
        }
        } catch {
            cookie.remove(TokenSignCookie)
        }
    }
);

export default atomRequestCustomerDetail;
