import { message } from 'antd';
import { api, apiInstanceList } from '@/service';
import { ENUM_SYSTEM_SOURCE } from '@/const/enum';
import Code from '@/i18n/locales/code.json';
import { InternalAxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie'
import {  getCookieToken } from '@/utils/index';
import { PlatCookie } from '@/config';
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

// // 客户端获取 token
// export const getToken = (config: InternalAxiosRequestConfig) => {
//     const tokenStr = TokenSignCookie
//     if (!tokenStr) return;
//     try {
//         const token = JSON.parse().val as User;
//         return token;
//     } catch (e) {
//         return undefined;
//     }
// };
// 获取店铺id
export const getShopId = () => {
    const shopStr = window.localStorage.getItem('production_route/curShop');
    if (!shopStr) return;
    try {
        const token = JSON.parse(shopStr).val as User;
        return token;
    } catch (e) {
        return undefined;
    }
};

/** B2B/D2C 主题切换 */
export const togglePlat = (systemSource: number=ENUM_SYSTEM_SOURCE.D2C) => {
    const plat = systemSource === ENUM_SYSTEM_SOURCE.D2C ? 'D2C' : 'B2B';
    Cookies.set(PlatCookie,plat.toLocaleLowerCase(),{ path: '/', domain })
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
        const token = getCookieToken;
        const shopId = getShopId();
        if (token) {
            config.headers['X-Authtoken'] = token;
        }
        if (shopId) {
            config.headers['X-Authshopid'] = shopId;
        }
        if (process.env.X_GRAY_TAG) {
            config.headers['X-GRAY-TAG'] = process.env.X_GRAY_TAG;
        }
        return config;
    });
    // https://test01-s.theckb.com/login
    // 返回拦截
    item.instance.instance.interceptors.response.use(
        function (response) {
            if (response.data?.code === '0' && response.data.success === true) {
                return response;
            }
            // if (response.data?.code === '10000000') {
            //     if (!window.location.pathname.endsWith('/login')) {
            //         window.location.pathname =
            //         process.env.DB_HOST === 'local' ? '/dev/login' : '/login';
            //     }
            // }
            // if (response.data.code === 401) {
            //     if (!window.location.pathname.endsWith('/login')) {
            //         // 跳转登陆
            //         window.location.pathname = `/user/login`;
            //     }
            //     return Promise.reject(response.data.msg);
            // }
            // message.error(String(response.data.msg));

            // const errorMsg = translateByRspCode(response.data.code);
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
