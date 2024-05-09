/*
 * @Author: shiguang
 * @Date: 2024-04-25 11:09:28
 * @LastEditors: shiguang
 * @LastEditTime: 2024-04-25 15:32:13
 * @Description: 
 */
'use server'
import { switchDifferentHost } from "@/utils/server/host";
import { permanentRedirect } from "next/navigation";


const APPRoot = async () => {
     switchDifferentHost({
        helpCenter: function () {
            permanentRedirect(`/ja`)
        },
        media: function () {
            permanentRedirect(`/ja`)
        }
    })
}

export default APPRoot;