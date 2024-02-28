/*
 * @Author: shiguang
 * @Date: 2023-07-07 18:02:47
 * @LastEditors: lihwang_wf@126.com
 * @LastEditTime: 2023-12-06 18:28:02
 * @Description: x
 */
// export const ROUTER_BASENAME = '/oem';
export const zz = 123;

type env = 'dev' | 'prod' | 'pre';
// eslint-disable-next-line
const m = window.location.host.match(/(^[^\-]+)-/);
let env = m ? m[1] : 'prod';
if (window.location.port === '3666') {
    env = 'dev';
}

export const TokenSignCookie: string = env + '_route/token';
