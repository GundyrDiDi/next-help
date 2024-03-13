// import { getRouter } from '@/App';
import { GetKeyByMap, GetValueByMap } from './type';
import bwCookie from "js-cookie"
import { PlatCookie, TokenSignCookie } from '@/config';

import { CustomerDetail } from '@/model';
import { getUserFn } from './time';
import { getDefaultStore } from 'jotai';


interface JumpPageDefaultOptions {
    /** 其他系统 */
    isOtherSystem?: boolean;
    /** 是否新开页面 */
    isNewPage?: boolean;
    /** navigate replace */
    replace?: boolean;
}


enum ENUM_PICK_MAP_TYPE {
    /** 选择 map 中部分 key 映射到 options */
    PICK = 1,
    /** 剔除 map 中部分 key 映射到 options */
    OMIT = 2,
    /** 所有 map 中 key 映射到 options */
    ALL = 3
}
const originMapToOptions =
    <T extends Map<any, any>>(map: T) =>
    (type: ENUM_PICK_MAP_TYPE) =>
    (keys: GetKeyByMap<T>[]) =>
    <Fn extends (val: GetValueByMap<T>[0]) => any>(
        mapValue?: Fn
    ): {
        value: GetKeyByMap<T>;
        label: typeof mapValue extends undefined
            ? GetKeyByMap<T>
            : ReturnType<Fn>;
    }[] => {
        const list = Array.from(map.entries()).filter(([value]) => {
            if (type === ENUM_PICK_MAP_TYPE.OMIT && !keys.includes(value))
                return true;
            if (type === ENUM_PICK_MAP_TYPE.PICK && keys.includes(value))
                return true;
            if (type === ENUM_PICK_MAP_TYPE.ALL) return true;
            return false;
        });
        return list.map(([value, label]) => {
            const _label = mapValue ? mapValue(label) : label;
            return { value, label: _label };
        });
    };

/**
 * map options
 * @param map
 * @param mapValue
 * @returns
 */
export const mapToOptions = <
    T extends Map<any, any>,
    Fn extends (val: GetValueByMap<T>) => any
>(
    map: T,
    mapValue?: Fn
) => {
    return originMapToOptions(map)(ENUM_PICK_MAP_TYPE.ALL)([])(mapValue);
};

export const mapToOptionsByOmitKeys = <
    T extends Map<any, any>,
    Fn extends (val: GetValueByMap<T>[0]) => any
>(
    map: T,
    keys: GetKeyByMap<T>[],
    mapValue?: Fn
) => {
    return originMapToOptions(map)(ENUM_PICK_MAP_TYPE.OMIT)(keys)(mapValue);
};

export const mapToOptionsByPickKeys = <
    T extends Map<any, any>,
    Fn extends (val: GetValueByMap<T>[0]) => any
>(
    map: T,
    keys: GetKeyByMap<T>[],
    mapValue?: Fn
) => {
    return originMapToOptions(map)(ENUM_PICK_MAP_TYPE.PICK)(keys)(mapValue);
};

/**
 * 获取查询字符串中的值
 * @param name query string 的 key
 * @returns value
 */
export const getQueryStringValueByName = (name: string) => {
     // Client-side-only 
    return new URLSearchParams(window.location.search).get(name);
};

export const secureJSONParse = <T>(str: any, defaultValue?: T) => {
    type SecureJSONParseStore = [Error | undefined, T | undefined];
    const res: SecureJSONParseStore = [undefined, undefined];
    try {
        const obj = JSON.parse(str);
        res[1] = obj ?? defaultValue;
    } catch (e) {
        res[0] = e as Error;
        if (defaultValue) res[1] = defaultValue;
    }
    return res;
};

export interface LocalStorageData {
    /** 用户 token */
    key?: {
        /** 过期时间?? */
        expire: number;
        /** 用户 token，在切换店铺的时候 token 不会变化 */
        val: string;
    };
}



/** 本地Cookie 存储信息 */
export enum ENUM_LOCAL_STORAGE_KEY {
    /** 用户 token */
    TOKEN = 'production_route/token',
    /** 用户 平台 */
    PLAT='production_route/plat'
}

export const getSessionStorageByKey = <T>(key: string, defaultValue?: T) => {
    if(typeof window !== 'undefined'){
        const jsonString = window.sessionStorage.getItem(key);
        return secureJSONParse(jsonString, defaultValue);
    }
};

export const getLocalStorageByKey = <K extends keyof LocalStorageData, T>(
    key: string,
    defaultValue?: LocalStorageData[K]
) => {
    if(typeof window !== 'undefined'){
        const jsonString = window.localStorage.getItem(key);
        return secureJSONParse(jsonString, defaultValue);
    }
    return []
};



/** 通过 cookie 获取登录信息 */
export const getCookieToken=bwCookie.get(TokenSignCookie)||bwCookie.get(encodeURIComponent(TokenSignCookie));

/** 通过 cookie 获取登录信息 */
export const getCookiePlat=bwCookie.get(PlatCookie)||bwCookie.get(encodeURIComponent(PlatCookie))||'d2c';

export function formatTimeZone(time: any, offset: any) {
    // 创建一个Date对象 time时间 offset 时区  中国为  8
    const d = new Date(time);
    const localTime = d.getTime();
    // 获得当地时间偏移的毫秒数
    const localOffset = d.getTimezoneOffset() * 60000;
    // utc即GMT时间
    const utc = localTime + localOffset;
    const wishTime = utc + 3600000 * offset;
    return new Date(wishTime);
}

export const isB2B=()=>{
    return getCookiePlat==='b2b'
}

export const isD2C=()=>{
    return getCookiePlat==='d2c'
}





/** 判断是否登录 */
export const isLogin=()=>{
    return Boolean(getCookieToken && getUserFn()?.customerId)
}


export const userInfo=()=>getDefaultStore().get(CustomerDetail)