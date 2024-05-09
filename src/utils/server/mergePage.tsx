/*
 * @Author: shiguang
 * @Date: 2024-04-25 11:55:19
 * @LastEditors: shiguang
 * @LastEditTime: 2024-04-25 16:49:49
 * @Description: 部分 API 需要在 服务器端渲染的环境（例如约定的 export default, export generateMetadata 等）当中
 * 如果不包装在执行环境中使用 headers 等 api，会导致报错
 */

import React from 'react';
import { switchDifferentHost } from '@/utils/server/host';

const mergePageComponentWithAsyncByGetServerComponent = (getServerComponent: () => Promise<React.FC>) => {
    return async (props: any) => {
        const ServerComponent = await getServerComponent()
        return <ServerComponent {...props} />;
    }
}

/**
 * 为 帮助中心 和 青蛙频道 创建不同分支的页面组件
 * @param switchDifferentHostConf 
 * @returns 
 */
export const createSwitchPageComponent = < T extends (...params: any[]) => any>(
    switchDifferentHostConf: Parameters<typeof switchDifferentHost<T>>[0], 
) => {
    return mergePageComponentWithAsyncByGetServerComponent(() => switchDifferentHost(switchDifferentHostConf))
}


/**
 * 为 帮助中心 和 青蛙频道 创建不同分支的 GenerateMetadata 函数
 * @param switchDifferentHostConf 
 * @returns 
 */
export const createSwitchGenerateMetadata = < T extends (...params: any[]) => any>(
    switchDifferentHostConf: Parameters<typeof switchDifferentHost<T>>[0], 
) => {
    return async function (this: any, ...nextInjectParams: any[]) {
        const fn = await switchDifferentHost(switchDifferentHostConf);
        if(!fn) return undefined;
        return await fn.call(this, ...nextInjectParams);
    }
};
