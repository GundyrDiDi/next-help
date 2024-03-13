import { Site } from "@/const";
import { getLang } from "@/i18n";
import { useTranslation } from "@/i18n/client";
import { Lang, Local } from "@/i18n/settings";
/**
 * 商品搜索 语言枚举
 */
export enum SearchLangType {
  /** 日文 */
  JA = '1',
  /** 中文 */
  ZH = '2',
  /** 韩文 */
  KR = '3',
  /** 英文 */
  EN = '4',
}

/**
 * 获取语言选项
 */
export const  getSearchLangType=(lang:Local)=>{
  return {
    [Local.JA]: SearchLangType.JA, // 日语
    [Local.KO]: SearchLangType.KR, // 韩语
    [Local.EN]: SearchLangType.EN // 英语
  }[lang]
}


/** 获取语言选项 */
export  const useLangOptions=(site:Site)=>{
  const {t}=useTranslation()
  return [
    {
      value: {
        [Site.JA]: SearchLangType.JA, // 日语
        [Site.KO]: SearchLangType.KR, // 韩语
        [Site.EN]: SearchLangType.EN // 英语
      }[site],
      label: {
        [Site.JA]: '日本语入力',
        [Site.KO]: '한국어 입력',
        [Site.EN]: 'English'
      }[site]
    },
    {
      value: SearchLangType.ZH,
      label: t('请输入中文')
    }
  ]
}


const cates=[]