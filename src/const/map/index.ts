/*
 * @Author: shiguang
 * @Date: 2023-04-26 10:22:09
 * @LastEditors: liangliang
 * @LastEditTime: 2023-06-06 17:58:54
 * @Description: 676
 */

import { ENUM_SYSTEM_SOURCE } from '../enum';

export const MAP_SYSTEM_SOURCE = new Map([
    [
        ENUM_SYSTEM_SOURCE.D2C,
        {
            pathPrefix: '/d2c'
        }
    ],
    [
        ENUM_SYSTEM_SOURCE.B2B,
        {
            pathPrefix: '/b2b'
        }
    ]
]);

export {};
