/*
 * @Author: shiguang
 * @Date: 2024-04-25 11:09:28
 * @LastEditors: shiguang
 * @LastEditTime: 2024-04-25 15:54:22
 * @Description: 
 */
import { headers } from "next/headers";

export enum ENUM_HOST {
    /** 帮助中心 */
    HELP_CENTER = 1,
    /** 青蛙频道 */
    KAERU_MEDIA = 2,
}

export const getHostType = () => {
    const host = headers().get('host')
    if (host?.includes('help.theckb.com')) {
        return ENUM_HOST.HELP_CENTER
    }
    return ENUM_HOST.KAERU_MEDIA
}
export const getHostTypeAsync = async () => {
    const host = await headers().get('host')
    if (host?.includes('help.theckb.com')) {
        return ENUM_HOST.HELP_CENTER
    }
    return ENUM_HOST.KAERU_MEDIA
}

interface processDifferentOperationSystemParams<T> {
    helpCenter: T;
    media: T;
    other?: T;
}

export const switchDifferentHost = <
    T extends (...params: any[]) => any
>(
    params: processDifferentOperationSystemParams<T>,
    _hostType?: ENUM_HOST
)=> {
    const hostType = _hostType ?? getHostType();
    if (hostType === ENUM_HOST.HELP_CENTER) {
        return params.helpCenter();
    }
    if (hostType === ENUM_HOST.KAERU_MEDIA) {
        return params.media();
    }
    if (params.other) {
        return params.other();
    }
    return params.media();
};

