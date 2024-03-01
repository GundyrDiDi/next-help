/*
 * @Author: shiguang
 * @Date: 2023-04-28 11:51:00
 * @LastEditors: shiguang
 * @LastEditTime: 2023-08-02 10:53:55
 * @Description: interceptors
 */
import { message } from 'antd';
import { api, apiInstanceList } from '@/service';
import { ENUM_SYSTEM_SOURCE } from '@/const/enum';
import Code from '@/i18n/locales/code.json';
import { Site, getCountryByNavigatorLang } from '@/const';
import { Lang } from '@/i18n/init';
import { serviceConfig } from './swaggerServiceConfig';
import { InternalAxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie'

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

// 客户端获取 token
export const getToken = () => {
    const tokenStr = Cookies.get('production_route/token');
    if (!tokenStr) return;
    try {
        const token = JSON.parse(tokenStr).val as User;
        return token;
    } catch (e) {
        return undefined;
    }
};
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
export const togglePlat = (systemSource: number) => {
    const plat = systemSource === ENUM_SYSTEM_SOURCE.D2C ? 'D2C' : 'B2B';
    window.document.documentElement.setAttribute('theme', plat);
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

// const translateByRspCode = (msgCode: string) => {
//     /** 后端接口返回code,前端翻译 */
//     const stationCode =
//         localStorage.getItem('stationCode') || getCountryByNavigatorLang();
//     const stationCodeMapLocal =
//         {
//             [Site.JP]: Lang.ja_JP,
//             [Site.KR]: Lang.ko_KR,
//             [Site.UK]: Lang.en_GB
//         }[stationCode] || '';

//     return (
//         Code[stationCodeMapLocal][msgCode] ?? Code[stationCodeMapLocal].noMatch
//     );
// };

apiInstanceList.forEach((item) => {
    // 请求拦截
    item.instance.instance.interceptors.request.use(async function (config:InternalAxiosRequestConfig) {
        config.headers = config.headers ?? {};
        const token = getToken(config);
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
