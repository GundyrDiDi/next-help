/*
 * @Author: shiguang
 * @Date: 2024-05-09 16:43:56
 * @LastEditors: shiguang
 * @LastEditTime: 2024-05-10 22:18:21
 * @Description: 
 */
'use client'
// import { create } from "route-interceptor";

// (() => {
//   console.log(11111)
//   if(typeof window === 'undefined') return;
//   console.log(2222)
//   const interceptor = create({
//     way: ["a", "window.open", "history", "hash", "location"],
//     intercept: (path) => {
//       console.log(999);
//       console.log(path);
//       return path;
//       // return false
//       // return path.replace("/bbb", "/ccc");
//     },
//   });
//   interceptor.start();
// })();
;
import { routeInterceptor } from "@/utils/client/routeIterceptor";
import { setFirstViewUrl } from "@/utils/client/tinkingDataJumpQuery";

(() => {
  if (typeof window === "undefined") return;
  console.log("clientInitJS11");
  setFirstViewUrl();
  routeInterceptor();
})();

const ClientInitJS = () => {
    return null
}
export default ClientInitJS