/*
 * @Author: shiguang
 * @Date: 2024-03-21 16:38:31
 * @LastEditors: shiguang
 * @LastEditTime: 2024-05-16 12:06:32
 * @Description: 
 */
import { atom } from "jotai";

// 文章列表页面查询条件
interface QueryAtom {
  tab?: number;
  year?:number;
  month?:number;
  /** 搜索关键字 */
  keyword?:string;
  /** 查看历史记录 */
  isShowReadRecord?: boolean;
}
export const QueryParams=atom<QueryAtom>({tab:-1});