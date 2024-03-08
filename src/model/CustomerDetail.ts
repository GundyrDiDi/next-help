import { atom } from 'jotai';
import { request } from '@/config/request';
import { CustomerDetailRespDTO } from '@/service/customer';
import {  Site, simpleSite } from '@/const';
import { getCookieToken } from '@/utils';
import cookie from 'js-cookie'
import { TokenSignCookie } from '@/config';

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
        try {
            if(getCookieToken){
                const response =await request.customer.getCustomerDetails.getCustomerDetails();
            const res = {
                ...response.data,
                isJA: response.data?.stationCode === Site.JP,
                isKO: response.data?.stationCode === Site.KR,
                isEN: response.data?.stationCode === Site.UK
            };
            set(atomCustomerDetail, res);
            }
           
        } catch {
            cookie.remove(TokenSignCookie)
        }
    }
);

export default atomRequestCustomerDetail;
