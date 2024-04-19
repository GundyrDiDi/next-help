/*
 * @Author: shiguang
 * @Date: 2024-03-21 16:38:31
 * @LastEditors: shiguang
 * @LastEditTime: 2024-04-09 15:10:46
 * @Description: 
 */
import { atom, useAtom } from 'jotai';
import { Local } from '@/i18n/settings';

const langType = atom<Local>(Local.JA);


 export const getLangType =atom((get)=>get(langType))

export default  langType;
