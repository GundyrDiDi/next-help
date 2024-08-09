/*
 * @Author: shiguang
 * @Date: 2024-04-25 11:09:28
 * @LastEditors: shiguang
 * @LastEditTime: 2024-05-09 16:41:43
 * @Description:
 */
"use server";
import { switchDifferentHost } from "@/utils/server/host";
import { permanentRedirect } from "next/navigation";

// 作者：晨霜
// 链接：https://juejin.cn/post/7111041232922476551
// 来源：稀土掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
const APPRoot = async () => {
  //  switchDifferentHost({
  //     helpCenter: function () {
  //         permanentRedirect(`/ja`)
  //     },
  //     media: function () {
  //         permanentRedirect(`/ja`)
  //     }
  // })
};

export default APPRoot;
