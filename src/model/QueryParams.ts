import { atom } from "jotai";

// 页面的所有的参数
interface QueryAtom {
  tab?: number;
  year?:number;
  month?:number;
}
export const QueryParams=atom<QueryAtom>({tab:-1});