import { message } from 'antd';
import { api, apiInstanceList } from '@/service';
import { ENUM_PAGE, ENUM_SYSTEM_SOURCE } from '@/const/enum';
import Code from '@/i18n/locales/code.json';
import { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie'
import { getCookieShop, getCookieToken, setCookieShopId, setCookieToken } from '@/utils/index';
import { PlatCookie } from '@/config';
import { getSiteStation, useSite2Station } from '@/utils/language';
import { toTheCkb } from '@/utils/router';

const domain = '.theckb.com'

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
    const shopStr = getCookieShop();
    if (shopStr) return shopStr;
};

/** B2B/D2C 主题切换 */
export const togglePlat = (systemSource: number) => {
    const plat = systemSource === 1 ? 'D2C' : 'B2B';
    Cookies.set(PlatCookie, plat.toLocaleLowerCase(), { path: '/', domain, expires: 3 })
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

const getIsServer = () => typeof window === 'undefined';

async function requestInterceptorOnClient(config: InternalAxiosRequestConfig) {
    config.headers = config.headers ?? {};
    let token = getCookieToken;
    const shopId = getShopId();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const stationCode = useSite2Station()
    if (token) {
        config.headers['X-Authtoken'] = token;
    }
    if (shopId && !config.url?.includes('getCustomerDetails') && token) {
        config.headers['X-Authshopid'] = shopId;
    }
    if (stationCode) {
        config.headers['X-Stationcode'] = stationCode;
    }
    if (process.env.X_GRAY_TAG) {
        config.headers['X-GRAY-TAG'] = process.env.X_GRAY_TAG;
    }
    return config;
}
async function requestInterceptorOnServer(config: InternalAxiosRequestConfig) {
    console.log('------------------接口请求------------------>')
    console.log('------------------接口请求------------------>')
    console.log(config.url, config.baseURL, 88888888)
    console.log('------------------接口请求------------------>')
    console.log('------------------接口请求------------------>')
    config.headers = config.headers ?? {};
    const siteStation = getSiteStation()
    if (siteStation) {
        config.headers['X-Stationcode'] = siteStation;
    }
    if (process.env.NEXT_PUBLIC_X_GRAY_TAG) {
        config.headers['X-GRAY-TAG'] = process.env.NEXT_PUBLIC_X_GRAY_TAG;
    }
    return config;
}

function responseInterceptorOnClient(response: AxiosResponse<any, any>) {
    const data = response.data;
    if (response.data?.code === '0' && response.data.success === true) {
        return response;
    }
    if (data.code === '24010062' || data.code === '10000000' || data.code === '24010061') {
        setCookieToken('')
        setCookieShopId('')
        toTheCkb(ENUM_PAGE.LOGIN, false)
    }
    message.error(response.data.code);
    return Promise.reject(response.data.code);
}

function responseInterceptorOnServer(response: AxiosResponse<any, any>) {
    return response;
}

apiInstanceList.forEach((item) => {
    // 请求拦截
    item.instance.instance.interceptors.request.use(
        // getIsServer() ? requestInterceptorOnClient : requestInterceptorOnClient,
        getIsServer() ? requestInterceptorOnServer : requestInterceptorOnClient,
        (error) => {
            return Promise.reject(error);
        }
    );
    // 返回拦截
    item.instance.instance.interceptors.response.use(
        getIsServer() ? responseInterceptorOnServer : responseInterceptorOnClient,
        // getIsServer() ? responseInterceptorOnServer : responseInterceptorOnClient,
        getIsServer() ? (error) => {
            return Promise.reject(error)
        } : function (error) {
            message.error(String(error));
            return Promise.reject(error);
        }
        
    );
});

export const request = api;
