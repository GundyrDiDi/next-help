/*
 * @Author: yusha
 * @Date: 2023-07-13 15:32:30
 * @LastEditors: yusha
 * @LastEditTime: 2023-07-13 16:07:14
 * @Description:
 */
import axios from 'axios';
import { serviceConfig } from '../swaggerServiceConfig';

export interface User {
    loginInfo: {
        userId: string;
        username: string;
    };
    userInfo: {};
    auth: never[];
    token: string;
}
/** 接口前缀 */
const newConfig = { ...serviceConfig };
/** 获取token */
export const getToken = () => {
    const tokenStr = window.localStorage.getItem('production_route/token');
    if (!tokenStr) return;
    try {
        const token = JSON.parse(tokenStr).val;
        return token;
    } catch (e) {
        return undefined;
    }
};
const token = getToken();
const axiosOemPurchase = axios.create({
    baseURL: newConfig.baseURL,
    headers: {
        'X-Authtoken': token,
        'X-GRAY-TAG': process.env.REACT_APP_X_GRAY_TAG
    }
});
/** 浮动汇率 */
export const getFloatExchange = (params) => {
    return axiosOemPurchase({
        url: '/settlement/exchangeRate/cnyToJpyExchangeRateAfterConfigFloat',
        method: 'GET',
        params
    });
};
/** 获取汇率 */
export const getExchange = (params) => {
    return axiosOemPurchase({
        url: '/settlement/exchangeRate/getLatestExchangeRate',
        method: 'GET',
        params
    });
};
