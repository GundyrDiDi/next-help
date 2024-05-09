/*
 * @Author: shiguang
 * @Date: 2024-05-09 20:02:18
 * @LastEditors: shiguang
 * @LastEditTime: 2024-05-09 21:31:59
 * @Description: 
 */

import queryString from "query-string";

const FIRST_VIEW_URL = 'FIRST_VIEW_URL';

const FIRST_VIEW_URL_REPORTED = 'REPORTED';

/**
 * 设置首次访问url
 */
export const setFirstViewUrl = () => {
    const url = window.location.href;
    if(window.localStorage.getItem(FIRST_VIEW_URL)) return;
    window.localStorage.setItem(FIRST_VIEW_URL, url);
};

/**
 * 判断是否是 stheckbUrl
 * @param originUrl 
 * @returns 
 */
export const getIsStheckbUrl = (originUrl: string) => {
    try {
        debugger
        const { url } = queryString.parseUrl(originUrl, {parseFragmentIdentifier: true})
        const host = url.split('//')[1].split('/')[0];
        const isStheckb = host.endsWith('s.theckb.com');
        debugger
        return isStheckb;
    } catch (error) {
        return false
    }
}

const getIsNeedTransformJumpUrl = (originUrl: string) => {
    // TODO 不能是 图片 或者 json 之类的非页面资源
    const isStheckb = getIsStheckbUrl(originUrl);
    const firstViewUrlHref = window.localStorage.getItem(FIRST_VIEW_URL)
    if(
        // 不存在url
        !firstViewUrlHref || 
        // 不是 s.theckb.com 直接 return false
        !isStheckb || 
        // 已上报 或者首次访问页面不存在 就不上报
        firstViewUrlHref === FIRST_VIEW_URL_REPORTED
    ){
        debugger
        return false
    }
    return true
}

/**
 * 跳转到 s.theckb 的时候添加参数
 */
export const addQueryWhenJumpStheckb = (originUrl: string) => {
    debugger
    if(!getIsNeedTransformJumpUrl(originUrl)) return originUrl;
    debugger
    const firstViewUrlHref = window.localStorage.getItem(FIRST_VIEW_URL);
    const { url: firstViewUrl, query: firstViewUrlQuery } = queryString.parseUrl(firstViewUrlHref!)
    debugger
    const { url, query, fragmentIdentifier } = queryString.parseUrl(originUrl, {parseFragmentIdentifier: true})
    // utm_source=google&utm_medium=display&utm_campaign=gd_common_all
    const newJumpHref = queryString.stringifyUrl({
        url, 
        query: {
            ...query,
            channel: 'seo',
            channel_group: firstViewUrl,
            /** 下面这几个参数是可能广告带过来的，这里也要带到 s.theckb.com 上 */
            utm_source: firstViewUrlQuery.utm_source,
            utm_medium: firstViewUrlQuery.utm_medium,
            utm_campaign: firstViewUrlQuery.utm_campaign
        }, 
        fragmentIdentifier
    }, 
    {
        skipEmptyString: true, 
        skipNull: true
    })
    debugger
    // 结束之后打上已经跳转过的标签
    window.localStorage.setItem(FIRST_VIEW_URL, FIRST_VIEW_URL_REPORTED);
    return newJumpHref;
}