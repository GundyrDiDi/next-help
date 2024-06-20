/*
 * @Author: shiguang
 * @Date: 2024-06-13 14:24:45
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-20 09:40:31
 * @Description: 
 */
/*
 * @Author: shiguang
 * @Date: 2024-06-13 14:24:45
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-17 02:50:21
 * @Description: 
 * 
 */

import { message } from 'antd';
import queryString from 'query-string';
import { CAN_USE_DOM } from './environment'


const getHostEnv = () => {
    const { query } = queryString.parseUrl(window.location.href)
    // return 'test';
    if (!CAN_USE_DOM) return 'prod';
    if (
        window.location.host.startsWith('pre-system.theckb.com') ||
        window.location.host.startsWith('pre-help.theckb.com') ||
        window.location.host.startsWith('pre-media.theckb.com') || 
        query.env === 'pre'
    ) {
        return 'pre'
    } else if (
        window.location.host === 'system.theckb.com' ||
        window.location.host === 'help.theckb.com' ||
        window.location.host === 'media.theckb.com' || 
        query.env === 'prod'
    ) {
        return 'prod'
    } else {
        return 'test'
    }
}


export const getSubHostName = () => {
    // if(window.location.host.includes('system.theckb.com')){
    //     return 'system'
    // }
    if(window.location.host.includes('media.theckb.com')){
        return 'media'
    }
    if(window.location.host.includes('help.theckb.com')){
        return 'help'
    }
    return 'system'
}

const getApiHost = () => {
    const env = getHostEnv()
    const queryEnv = window.location.search.split('env=')[1]
    if (env === 'pre' || queryEnv === 'pre') {
        return `https://pre-gateway.theckb.com`
    } else if (env === 'prod' || queryEnv === 'prod') {
        return `https://gateway-prod.theckb.com`
    } else {
        return `https://master-gateway.theckb.com`;
    }
}
interface CrossFetchOptions<Body = any>{
    body?: Body;
    method: 'POST' | 'GET';
    query?: Body
}

interface CrossFetchConfigOptions{
    requestInterceptor?: (config: RequestInit) => RequestInit;
    showError?: boolean;
    interceptErrorCode?: boolean;
}
export enum Site {
    /**
     * 日本站
     */
    JA = 'JapanStation',
    /**
     * 韩国站
     */
    KO = 'KoreaStation',
    /**
     * 英国站
     */
    EN = 'UkStation'
}

/**
 * 通过 path 获取站点
 * @returns 
 */
export const getSiteStationFromPath = () => {
    if(window.location.pathname.startsWith('/ja')){
        return {
            siteHeader: Site.JA
        }
    }
    if(window.location.pathname.startsWith('/en')){
        return {
            siteHeader: Site.EN
        }
    }
    if(window.location.pathname.startsWith('/ko')){
        return {
            siteHeader: Site.KO
        }
    }
    return undefined;
}

/**
 * 跨平台的fetch
 * @param url 
 * @param options 
 * @returns 
 */
export const crossFetch = async <Res>(url: string, options: CrossFetchOptions, config: CrossFetchConfigOptions = {}) => {
    const { body = {}, method, query,}  = options
    const  { showError = true, interceptErrorCode = true } = config;
    const requestInterceptor = config?.requestInterceptor;
    const newUrl = (() => {
        if(url.includes("?")){
            return url;
        }
        if(query){
            const queryStr = Object.entries(query).map(item => item.join('=')).join('&');
            return `${url}?${queryStr}`
        }
        return url;
    })();
    const fetchOptions: RequestInit = {
        headers: {
            accept: 'application/json, text/plain, */*',
            'content-type': 'application/json',
            // 'x-authtoken': 'eyJhbGciOiJIUzI1NiJ9.eyJuaWNrIjoiYWRtaW4iLCJleHAiOjE3MTg2MTQ4NDcsInVzZXJJZCI6IjE1NDIzMzk4Njc2ODY4OTE1MjIiLCJ1c2VybmFtZSI6ImFkbWluIn0.nmgc62KV0IVXDbClTYiy2R1J-sl18D2snbXcBc0XuDg',
            'x-stationcode': 'JapanStation'
        },
        ...['GET', 'HEAD'].includes(method) ? {} : { body: JSON.stringify(body) },
        method
    };
    
    const response = await fetch(`${getApiHost()}${newUrl}`, requestInterceptor ? requestInterceptor(fetchOptions) : fetchOptions);
    
    const data = await response.json();
    if(interceptErrorCode && data.code !== '0'){
        if(showError) message.error(data.message)
        throw new Error(data.message);
    }
    return data as Res;
};

export const getInputUrlIsJenkinsTestEnv = (host: string) => {
    if(host.includes('test-client-help.theckb.com')){
        return true;
    }
    return false
}

// export const getOssSign = async ({ path, overwrite, overseaType }: { path: string; overwrite: '0' | '1'; overseaType: OverSea }) => {
//     const re = await fetch(`${getHost()}/customer/oss/sign/another?bucketName=${getBucketName()[overseaType]}&path=${path}&type=${overwrite}`, {
//         'headers': {
//             'accept': 'application/json, text/plain, */*',
//             'content-type': 'application/json',
//             'x-authtoken': 'eyJhbGciOiJIUzI1NiJ9.eyJuaWNrIjoiYWRtaW4iLCJleHAiOjE3MTg2MTQ4NDcsInVzZXJJZCI6IjE1NDIzMzk4Njc2ODY4OTE1MjIiLCJ1c2VybmFtZSI6ImFkbWluIn0.nmgc62KV0IVXDbClTYiy2R1J-sl18D2snbXcBc0XuDg',
//             'x-gray-tag': '20240509-frog'
//         },
//         'referrer': 'https://pre-system.theckb.com/',
//         'referrerPolicy': 'strict-origin-when-cross-origin',
//         'body': '{}',
//         'method': 'POST',
//         'mode': 'cors',
//         'credentials': 'omit'
//     });
//     return await re.json();
// }