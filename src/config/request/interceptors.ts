import { message } from 'antd';
import { api, apiInstanceList } from '@/service';
import { ENUM_SYSTEM_SOURCE } from '@/const/enum';
import Code from '@/i18n/locales/code.json';
import { InternalAxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie'
import {  getCookieToken } from '@/utils/index';
import { PlatCookie } from '@/config';
import { useSite2Station } from '@/utils/language';
const domain =  '.theckb.com'
// 用户信息
export interface User {
    loginInfo: {
        userId: string;
        username: string;
    };
    userInfo: {};
    auth: never[];
    token: string;
}

// 获取店铺id
export const getShopId = () => {
    const shopStr = window.localStorage.getItem('production_route/curShop');
    if (shopStr) return shopStr;
};

/** B2B/D2C 主题切换 */
export const togglePlat = (systemSource: number=ENUM_SYSTEM_SOURCE.D2C) => {
    const plat = systemSource === ENUM_SYSTEM_SOURCE.D2C ? 'D2C' : 'B2B';
    Cookies.set(PlatCookie,plat.toLocaleLowerCase(),{ path: '/', domain,expires:3 })
    window.document.documentElement.setAttribute('data-theme', plat);
};

/**
 * admin 端
 */
export const getUserInLocal = () => {
    const usrStr = window.localStorage.getItem('user');
    if (!usrStr) return;
    try {
        const user = JSON.parse(usrStr).user as User;
        return user;
    } catch (e) {
        return undefined;
    }
};



apiInstanceList.forEach((item) => {
    // 请求拦截
    item.instance.instance.interceptors.request.use(async function (config:InternalAxiosRequestConfig) {
        config.headers = config.headers ?? {};
        let token = getCookieToken;
        const shopId = getShopId();
        const stationCode=useSite2Station()
        if (token) {
            config.headers['X-Authtoken'] = token;
        }
        if (shopId&&!config.url?.includes('getCustomerDetails')&&token) {
            config.headers['X-Authshopid'] = shopId;
        }
        if(stationCode){
            config.headers['X-Stationcode'] = stationCode;
        }
        if (process.env.X_GRAY_TAG) {
            config.headers['X-GRAY-TAG'] = process.env.X_GRAY_TAG;
        }
        return config;
    });
    // 返回拦截
    item.instance.instance.interceptors.response.use(
        function (response) {
            if (response.data?.code === '0' && response.data.success === true) {
                return response;
            }
            message.error(response.data.code);
            return Promise.reject(response.data.code);
        },
        function (error) {
            message.error(String(error));
            return Promise.reject(error);
        }
    );
});

export const request = api;
