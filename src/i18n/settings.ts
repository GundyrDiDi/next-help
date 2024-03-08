/** 语言 */
export enum Local {
  /** 日文 */
  JA = 'ja',
  /** 韩文 */
  KO = 'ko',
  /** 英文 */
  EN = 'en'
}

/** */
export enum Lang {
  /** 日文 */
  ja_JP = 'ja_JP',
  /** 韩文 */
  ko_KR = 'ko_KR',
  /** 英文 */
  en_GB = 'en_GB'
}


export const fallbackLng = Local.JA
export const languages = [fallbackLng, Local.KO, Local.EN]
export const defaultNS = 'translation'
export const cookieName = 'i18nextLng'

/** 获取翻译配置 */
export function getOptions (lng:Local = fallbackLng, ns:string = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    // preload: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
    detection: {
      caches: ['localStorage', 'sessionStorage', 'cookie']
    },
  }
}



