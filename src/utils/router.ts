import { useAtom } from "jotai";
import { Lang } from "@/model";

/**
 * 去登录
 */
export const toLogin=()=>{
  // TODO 登录逻辑实现
}


export const queryString=(params:Record<string,string>) => Object.keys(params).map(function(key) {
  return key + '=' + params[key]
}).join('&');


/** 跳转外展链接 */
export const useLink=(path:string,params:Record<string,any>|null=null)=>{
  const [lang]=useAtom(Lang)
  let href=`/${lang}/${path}`
  if(params){
    href+= `?${queryString(params)}`
  }
  return href;
}