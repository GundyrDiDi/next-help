/*
 * @Author: shiguang
 * @Date: 2023-04-26 10:23:12
 * @LastEditors: shiguang
 * @LastEditTime: 2023-07-07 18:51:38
 * @Description: utils
 */

import qs from 'qs';
import { ENUM_PAGE, ENUM_SYSTEM_SOURCE, PageConfig } from '@/const/enum';
import { MAP_SYSTEM_SOURCE } from '@/const/map';
import { ROUTER_BASENAME } from '@/config/base';
// import { getRouter } from '@/App';
import { GetKeyByMap, GetValueByMap } from './type';
import { reqMemoGetCustomerDetails } from './memoRequest';
import bwCookie from "js-cookie"

export const getEnv = () => {
    let _env: 'local' | 'prod' | 'master' | 'test01' | 'test02' | 'test03' =
        'prod';
    const [env, host] = window.location.host.split('-');
    if (window.location.port) {
        _env = 'local';
    } else if (host) {
        _env = env as typeof _env;
    }
    return _env as typeof _env;
};
type PageParams = PageConfig[keyof PageConfig];

/**
 * 优先通过接口获取 当前是 D2C 还是 B2B
 * 其次从 path 路径中获取
 */
export const getCurSystemType = async () => {
    const { pathname } = window.location;
    // 如果 pathname 不存在 通过 localstr
    const [err, tokenObj] = getLocalStorageByKey(ENUM_LOCAL_STORAGE_KEY.TOKEN);
    if (!err && tokenObj?.val) {
        const res = await reqMemoGetCustomerDetails();
        if (res.data?.systemSource !== undefined) {
            return res.data?.systemSource as ENUM_SYSTEM_SOURCE;
        }
        return ENUM_SYSTEM_SOURCE.D2C;
    }
    // 如果 pathname 存在通过 pathname 判断
    if (pathname) {
        if (pathname.startsWith('/d2c')) {
            return ENUM_SYSTEM_SOURCE.D2C;
        }
        if (pathname.startsWith('/b2b')) {
            return ENUM_SYSTEM_SOURCE.B2B;
        }
        // 意外逻辑走D2C
        return ENUM_SYSTEM_SOURCE.D2C;
    }
    return ENUM_SYSTEM_SOURCE.D2C;
};
// getCurSystemType();

interface JumpPageDefaultOptions {
    /** 其他系统 */
    isOtherSystem?: boolean;
    /** 是否新开页面 */
    isNewPage?: boolean;
    /** navigate replace */
    replace?: boolean;
}
/**
 * 跳转页面
 */
export const jumpPage = async <T extends ENUM_PAGE>(
    path: T,
    options: PageConfig[ENUM_PAGE] & JumpPageDefaultOptions = {}
) => {
    const islocalDev = Boolean(window.location.port);
    const isCurProject = path.startsWith(`/${ROUTER_BASENAME}`);
    const { replace = false } = options;
    const locationOrigin = window.location.origin;
    // 当前单页跳转
    if (isCurProject) {
        let _path = path.replace(`/${ROUTER_BASENAME}`, '');
        if ('query' in options && options.query) {
            _path = `${_path}?${qs.stringify(options.query)}`;
        }
        if (options.isNewPage === true) {
            return window.open(`/${ROUTER_BASENAME}${_path}`);
        }
        // getRouter().navigate(_path, { replace });
        return;
    }
    const pathPrefix =
        MAP_SYSTEM_SOURCE.get(await getCurSystemType())?.pathPrefix ?? '';
    let _path = `${pathPrefix ?? ''}${path}`;
    if ('query' in options) {
        _path = `${_path}?${qs.stringify(options.query)}`;
    }
    if (options.isNewPage) {
        if (islocalDev) {
            return window.open(_path);
        }
        return window.open(`${locationOrigin}${_path}`);
    }
    if (islocalDev) {
        window.location.href = _path;
    }
    window.location.href = `${locationOrigin}${_path}`;
};

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
    'production_route/token'?: {
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
    const jsonString = window.sessionStorage.getItem(key);
    return secureJSONParse(jsonString, defaultValue);
};

export const getLocalStorageByKey = <K extends keyof LocalStorageData, T>(
    key: string,
    defaultValue?: LocalStorageData[K]
) => {
    const jsonString = window.localStorage.getItem(key);
    return secureJSONParse(jsonString, defaultValue);
};

const aa = getLocalStorageByKey(ENUM_LOCAL_STORAGE_KEY.TOKEN);


/** 通过 cookie 获取登录信息 */
export const getCookieToken=bwCookie.get(ENUM_LOCAL_STORAGE_KEY.TOKEN);

/** 通过 cookie 获取登录信息 */
export const getCookiePlat=bwCookie.get(ENUM_LOCAL_STORAGE_KEY.PLAT);


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