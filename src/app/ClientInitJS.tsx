"use client";
import { routeInterceptor } from "@/utils/client/routeIterceptor";
import { setFirstViewUrl } from "@/utils/client/tinkingDataJumpQuery";
import Script from "next/script";

(() => {
  if (typeof window === "undefined") return;
  console.log("clientInitJS11");
  setFirstViewUrl();
  routeInterceptor();
})();

const ClientInitJS = () => {
  if (typeof window === "undefined") return null;
  console.log("我执行了");

  return (
    <>
      <Script
        src="https://static-s.theckb.com/BusinessMarket/Client/aes.js"
        onLoad={() => {
          window._join_name_used = "_echat";
          window._echatServer = ["e.echatsoft.com"];
          window._echat =
            window._echat ||
            function () {
              (window._echat.q = window._echat.q || []).push(arguments);
            };
          window._echat.l = +new Date();
          window._echat("initParam", { companyId: 533043 });
          (function () {
            var joinJs = document.createElement("script");
            joinJs.type = "text/javascript";
            joinJs.async = true;
            joinJs.id = "_echatmodulejs";
            joinJs.setAttribute("charset", "UTF-8");
            joinJs.src =
              ("https:" == document.location.protocol
                ? "https://"
                : "http://") + "www.echatsoft.com/visitor/join.js";
            var s = document.getElementsByTagName("script")[0];
            s!.parentNode!.insertBefore(joinJs, s);
          })();
          window.EchatMsgBubbleTipPluginParams = {
            /*样式设置*/
            bubbleColor: "#444", //气泡字体颜色
            bubbleMinWidth: "400px", //气泡显示最小宽度
            bubbleMaxWidth: "400px", //气泡显示最大宽度
            bubbleBackground: "#fff", //气泡背景
            bubbleRadius: "9px", //自定义 四个角的圆滑度
            bubbleLineCount: 1, //设置在客服发消息时的显示行数
            /*其他相关设置*/
            timeOut: 4, //（s）弹屏显示时间 若为0 则表示为一直显示
            // bubbleFlowDom: "echatButton",//气泡跟随的dom节点ID
            agentImgShow: true, //客服头像是否显示

            /*移动端的配置*/
            mobileparams: {
              color: "#555555", //字体颜色
              background: "#ffffff", //气泡背景
              timeOut: 8, //（s）弹屏显示时间 若为0 则表示为一直显示,且新消息每次叠加
              position: "bottom", // top代表气泡显示在屏幕上方  bottom表示气泡显示在屏幕下方
              showNum: 2, //显示条数 timeOut为0时有效
              transition: "1", //滚动时间设置（s）
              agentImgShow: true, //客服头像是否显示
            },
          };
          (function () {
            var echatMsgTipPlugin = document.createElement("script");
            echatMsgTipPlugin.type = "text/javascript";
            echatMsgTipPlugin.async = true;
            echatMsgTipPlugin.setAttribute("charset", "UTF-8");
            echatMsgTipPlugin.src =
              ("https:" == document.location.protocol
                ? "https://"
                : "http://") +
              "www.echatsoft.com/js/plugin/msgBubbleTipPlugin.js";
            var s = document.getElementsByTagName("script")[0];
            s!.parentNode!.insertBefore(echatMsgTipPlugin, s);
          })();
        }}
      ></Script>
    </>
  );
};
export default ClientInitJS;
