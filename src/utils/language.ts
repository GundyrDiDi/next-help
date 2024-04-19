/*
 * @Author: shiguang
 * @Date: 2024-03-28 15:21:28
 * @LastEditors: shiguang
 * @LastEditTime: 2024-04-09 15:22:04
 * @Description: 
 */
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


export const getLang=()=>getDefaultStore().get(Lang)


export const isEN=()=> {
  return getLang() === Local.EN;
}

export const isKO=()=> {
  return getLang() === Local.KO;
}

export const isJA=()=> {
  return getLang() === Local.JA;
}

export const isJK = () => {
  return ['ko', 'ja'].includes(getLang())
}


/** 获取国家站点code */
export const useSite2Station = (lang:Local =getLang()):Site => {
  return {
    [Local.JA]: Site.JA,
    [Local.KO]: Site.KO,
    [Local.EN]: Site.EN
  }[lang]
}

/** 获取国家站点code */
export const getSiteStation = useSite2Station;