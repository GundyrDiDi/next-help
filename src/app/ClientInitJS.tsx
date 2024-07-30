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
        }}
      ></Script>
    </>
  );
};
export default ClientInitJS;
