/*
 * @Author: shiguang
 * @Date: 2023-04-26 10:23:54
 * @LastEditors: shiguang
 * @LastEditTime: 2023-04-27 14:37:35
 * @Description: 工具类型的定义
 */
export type GetKeyByMap<M extends Map<any, any>> = M extends Map<infer K, any>
    ? K
    : unknown;
export type GetValueByMap<M extends Map<any, any>> = M extends Map<any, infer V>
    ? V
    : unknown;
export type GetPromiseValue<T extends Promise<any>> = T extends Promise<infer V>
    ? V
    : unknown;
export type AsyncReturnType<T extends (...params: any) => Promise<any>> =
    T extends (...params: any) => Promise<infer V> ? V : unknown;
