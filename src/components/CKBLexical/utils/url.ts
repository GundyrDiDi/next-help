/*
 * @Author: shiguang
 * @Date: 2024-06-20 13:55:10
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-20 13:57:20
 * @Description: 
 */
import { getHostEnv, getSubHostName } from "./fetch";

export const getLoginUrl = () => {
    const env = getHostEnv()
    if (env === 'test') {
        return 'https://master-s.theckb.com/login'
    }
    if (env === 'pre') {
        return 'https://pre-s.theckb.com/login'
    }
    return 'https://s.theckb.com/login'
}

export const wrapperProductAndShopUrlByLogin = (isLogin: boolean, url: string) => {
    const hostName = getSubHostName()
    const isSystem = hostName === 'system';
    if(isLogin || isSystem) return url;
    return getLoginUrl()
}
