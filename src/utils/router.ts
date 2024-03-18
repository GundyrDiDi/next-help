import { useAtom } from "jotai";
import { Lang } from "@/model";
import { THE_CKB_LINK } from "@/config";
import { getLang } from "./language";

/**
 * 去登录
 */
export const toLogin=()=>{
  toTheCkb('login',false)
}



export const queryString=(params:Record<string,string>) => Object.keys(params).map(function(key) {
  return key + '=' + params[key]
}).join('&');


/** 跳转外展链接 */
export const useLink=(path:string,params:Record<string,any>|null=null)=>{
  const lang=getLang()
  let href=`/${lang}/${path}`
  if(params){
    href+= `?${queryString(params)}`
  }
  return href;
}


export const toTheCkb=(path:string,needLang:boolean=true)=>{
  const lang=needLang?`/${getLang()}`:''
  location.href=`${THE_CKB_LINK}${lang}${path}`
}