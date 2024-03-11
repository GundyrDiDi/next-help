import { Local } from "@/i18n/settings";
import { getLangType } from "@/model/Lang";
import { getDefaultStore } from "jotai";

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



/** 获取国家站点code */
export const useSite2Station = ():Site => {
  const site = lang;
  return {
    [Local.JA]: Site.JA,
    [Local.KO]: Site.KO,
    [Local.EN]: Site.EN
  }[site]
}
