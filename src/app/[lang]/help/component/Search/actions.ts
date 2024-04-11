/*
 * @Author: shiguang
 * @Date: 2024-04-10 21:50:23
 * @LastEditors: shiguang
 * @LastEditTime: 2024-04-11 15:07:48
 * @Description: 
 */
"use server";

/**
 * 好处是什么呢? 可以请求后端接口，直接操作数据库??
 * @param prevState 
 * @param queryData 
 * @returns 
 */
export async function searchArticle(prevState: any, queryData: any) {
  const keywords = queryData.get('keywords');
  console.log(prevState, keywords, 66666)
  return {
      keywords,
  }
}