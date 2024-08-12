/*
 * @Author: shiguang
 * @Date: 2023-04-26 10:20:06
 * @LastEditors: shiguang
 * @LastEditTime: 2024-05-09 17:43:32
 * @Description: 全局变量
 */

declare global {
    export interface Window {
        curVersion: {
            time: number;
            version: string;
        };
        _$m: {
            t: (text: string) => string;
            ja_JP: Record<string, Record<string, string>>;
            ko_KR: Record<string, Record<string, string>>;
            en_GB: Record<string, Record<string, string>>;
        };
        $location: {
            href: string;
            replace: (url: string) => void;
        };
        ChannelIO: (
            init: string,
            params?: {
                pluginKey?: string;
                memberId?: string | number;
                profile?:
                    | {
                          systemName?: null | string;
                          systemEmail?: null | string;
                          templateName?: null | string;
                          systemMemberId?: null | number;
                          name?: null | string;
                          email?: null | string;
                      }
                    | ((msgNum: number) => void);
            }
        ) => void;
    }

}
declare module '*.scss'{
    const s:any
    export default s
}
