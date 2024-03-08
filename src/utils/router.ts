import { lang } from "./language";

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
export const gotoLink=(path:string,params:Record<string,string>|null=null)=>{
  let href=`${process.env.THE_CKB_LINK}${lang}/${path}`
  if(params){
    href+= `${queryString(params)}`
  }
  return href;
}