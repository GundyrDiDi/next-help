import { Local } from "@/i18n/settings";
import { Lang } from "@/model";
import { getLangType } from "@/model/Lang";
import { getDefaultStore, useAtom } from "jotai";

/**
 * 国家及货币单位
 */
enum Site {
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
  EN = 'UkStation',
}


export const lang=getDefaultStore().get(getLangType)


export const isEN=()=> {
  return lang === Local.EN;
}

export const isKO=()=> {
  return lang === Local.KO;
}

export const isJA=()=> {
  return lang === Local.JA;
}

export const isJK = () => {
  return ['ko', 'ja'].includes(lang)
}


/** 获取国家站点code */
export const useSite2Station = ():Site => {
  return {
    [Local.JA]: Site.JA,
    [Local.KO]: Site.KO,
    [Local.EN]: Site.EN
  }[lang]
}
