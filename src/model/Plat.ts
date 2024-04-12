/*
 * @Author: shiguang
 * @Date: 2024-03-21 16:38:31
 * @LastEditors: shiguang
 * @LastEditTime: 2024-04-12 10:08:50
 * @Description: 
 */
import { atom } from "jotai";

export enum ENUM_PLATE{
    d2c = 'd2c',
    b2b = 'b2b',
}
 const platAtom=atom<ENUM_PLATE>(ENUM_PLATE.d2c)

 export default platAtom;