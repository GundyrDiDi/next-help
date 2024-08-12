/*
 * @Author: shiguang
 * @Date: 2023-04-26 10:20:06
 * @LastEditors: shiguang
 * @LastEditTime: 2024-05-09 17:43:32
 * @Description: 全局变量
 */

declare module '*.scss'{
    const s:any
    export default s
}

declare module 'lexical'{
    const $getNodeByKey:any
    const $getSelection:any
    const COMMAND_PRIORITY_CRITICAL:any
    const SELECTION_CHANGE_COMMAND:any
    export {
        $getNodeByKey,
        $getSelection, COMMAND_PRIORITY_CRITICAL, SELECTION_CHANGE_COMMAND
    }
}
