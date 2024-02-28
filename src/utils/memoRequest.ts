/*
 * @Author: shiguang
 * @Date: 2023-05-19 17:05:44
 * @LastEditors: shiguang
 * @LastEditTime: 2023-05-19 17:13:27
 * @Description: 使用缓存请求 减少请求次数
 */
import { request } from '@/config/request';

export const memoAsync = <T extends (...p: any[]) => Promise<any>>(
    asyncFn: T
) => {
    let res: ReturnType<T> | undefined;
    /** 有缓存就获取缓存中的数据，没有缓存就请求 */
    const wrapAsyncFn = async (...param: Parameters<T>) => {
        if (!res) {
            res = asyncFn(...param) as ReturnType<T>;
        }
        return res;
    };
    /** 新的请求 */
    const forceRun = async (...param: Parameters<T>) => {
        res = asyncFn(...param) as ReturnType<T>;
        return res;
    };
    wrapAsyncFn.forceRun = forceRun;
    /** 危险操作，确保结果已经存在 */
    const __getExpectExistPromiseValue = () => {
        return res as Exclude<typeof res, undefined>;
    };
    wrapAsyncFn.__getExpectExistPromiseValue = __getExpectExistPromiseValue;
    return wrapAsyncFn;
};

/** 获取用户列表详情 */
export const reqMemoGetCustomerDetails = memoAsync(
    request.customer.getCustomerDetails.getCustomerDetails
);
