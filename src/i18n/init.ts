/*
 * @Author: shiguang
 * @Date: 2023-07-04 22:27:10
 * @LastEditors: shiguang
 * @LastEditTime: 2023-07-18 22:57:53
 * @Description: Description
 */

import qs from 'query-string';
import { createContext } from 'react';
import extractConfig from '@/i18n/locales/extractConfig.json';
import jp from '@/i18n/locales/ja_JP.json';
import kr from './locales/ko_KR.json';
import en from './locales/en_GB.json';

/** */
export enum Local {
    ZH = 'zh',
    /** 日文 */
    JA = 'ja',
    /** 韩文 */
    KO = 'ko',
    /** 英文 */
    EN = 'en'
}

/** */
export enum Lang {
    zh_CN = 'zh_CN',

    /** 日文 */
    ja_JP = 'ja_JP',
    /** 韩文 */
    ko_KR = 'ko_KR',
    /** 英文 */
    en_GB = 'en_GB'
}

const getQuerylang = (): Lang => {
    const query = qs.parse(window.location.search) as { lang: Local };

    return {
        [Local.ZH]: Lang.zh_CN,

        [Local.JA]: Lang.ja_JP,

        [Local.KO]: Lang.ko_KR,

        [Local.EN]: Lang.en_GB
    }[query.lang];
};

const getOldLocalLang = () => {
    const lang = localStorage.getItem('__lang__') || Local.EN;
    return (
        {
            [Local.ZH]: Lang.zh_CN,

            [Local.JA]: Lang.ja_JP,

            [Local.KO]: Lang.ko_KR,

            [Local.EN]: Lang.en_GB
        }[lang] || Lang.en_GB
    );
};
export const getLang = () => {
    // const langs = ['zh', 'ja', 'ko', 'en', 'ko', 'th']
    const queryLang = getQuerylang();
    if (queryLang) {
        localStorage.setItem('lang', queryLang);
        const _queryLang = {
            [Lang.zh_CN]: Local.ZH,
            [Lang.ja_JP]: Local.JA,
            [Lang.ko_KR]: Local.KO,
            [Lang.en_GB]: Local.EN
        }[queryLang];

        localStorage.setItem('__lang__', _queryLang);
        return queryLang;
    }

    const oldLocalLang = getOldLocalLang();
    if (oldLocalLang) {
        localStorage.setItem('lang', oldLocalLang);
        return oldLocalLang;
    }
    const lang = localStorage.getItem('lang');
    if (lang) {
        return lang;
    }
    localStorage.setItem('lang', Lang.ja_JP);
    return Lang.ja_JP;
};
const initLang = getLang();

export const LocalContext = createContext(initLang);

window._$m = {
    t: (text: string) => {
        const { pages, common } = extractConfig;
        const urlPathname = window.location.pathname;

        const item = pages
            .map((item) => {
                return {
                    ...item,
                    linkTo: [...(item.linkTo ?? []), item.path]
                };
            })
            .find((item) => item.urlPathname === urlPathname)!;

        const linkTo = item?.linkTo ?? [];
        const ja_JP = window._$m[initLang] ?? {};
        const getConfig = linkTo.reduce((pre, cur) => {
            return {
                ...pre,
                ...ja_JP?.[cur],
                ...ja_JP?.['src/common'],
                ...ja_JP?.['src/components']
            };
        }, {} as any);
        const lang = localStorage.getItem('lang');
        // if(lang !== 'ja_JP'){
        //     return text;
        // }
        // if(text === '请选择本次采用的报价'){
        //     debugger
        // }
        return ['', undefined].includes(getConfig[text])
            ? text
            : getConfig[text];
    },
    [Lang.ja_JP]: jp,
    [Lang.ko_KR]: kr,
    [Lang.en_GB]: en
};

export const getUnTranslateData = (data) => {
    return Object.entries(data).reduce((pre, cur: any) => {
        const [key, config] = cur;
        pre[key] = Object.entries(config).reduce((_pre, _cur) => {
            const [_key, _value] = _cur;
            if ('' === _value) {
                _pre[_key] = '';
            }
            return _pre;
        }, {});
        return pre;
    }, {});
};

export const mergeDataByOtherConfig = (data, otherConfig) => {
    return Object.entries(data).reduce((pre, cur: any) => {
        const [key, config] = cur;
        pre[key] = Object.entries(config).reduce((_pre, _cur) => {
            const [_key, _value] = _cur;
            if (_value === '' && otherConfig[_key]) {
                _pre[_key] = otherConfig[_key];
            } else {
                _pre[_key] = _value;
            }
            return _pre;
        }, {});
        return pre;
    }, {});
};
