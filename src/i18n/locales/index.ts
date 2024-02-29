/*
 * @Author: shiguang
 * @Date: 2023-05-05 10:49:54
 * @LastEditors: shiguang
 * @LastEditTime: 2023-05-05 13:26:05
 * @Description: locales index
 */
import locales from './locales';
import { configToResources, createConfig } from './utils';

export const config = createConfig(locales);
export const resources = configToResources(config);
