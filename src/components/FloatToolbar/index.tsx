import React, { useCallback, useContext, useEffect, useState } from "react";
import { useAtom } from "jotai";
import { CDN_HOST } from "@/const/staticURL/index";
import { atomCustomerDetail } from "@/model/CustomerDetail";
import { useTranslation } from "@/i18n/client";
import { useParams } from "next/navigation";
import { NEXT_PUBLIC_HELP_CENTER_URL } from "@/config";
import "./index.scss";

const FloatToolbar = () => {
  const { t } = useTranslation();
  const { lang } = useParams();

  const [isExpand, setIsExpand] = useState(true);
  const [msgCount, setMsgCount] = useState<number>(0);
  const [useInfo] = useAtom(atomCustomerDetail);
  const showEchart = () => {
    const metaData = useInfo?.customerId
      ? window.WECHAT.wxEncrypt(
          "<xml>" +
            "<uid><![CDATA[" +
            useInfo.customerId +
            "]]></uid>" +
            "<vip><![CDATA[" +
            ((useInfo.membership?.templateLevel ?? 0) > 0 ? 1 : 2) +
            "]]></vip>" +
            "<category><![CDATA[" +
            useInfo.membership?.membershipTemplateName +
            "]]></category>" +
            "<name><![CDATA[" +
            useInfo.loginName +
            "]]></name>" +
            "<email><![CDATA[" +
            useInfo.customerEmail +
            "]]></email>" +
            "</xml>",
          "M2Y2ZGZjOTkyMWIyNGYzNjlhOTNmZGU3M2E1ZGE4YWM",
          "117081BF84079DE8244D1368AE578F9D"
        ).toString()
      : "";
    const customMiniChatData = {
      companyId: 533043,
      lan: lang,
      echatTag: `web_${lang}`,
      metaData,
    };
    console.log(customMiniChatData, "customMiniChat");
    window.ECHAT.customMiniChat(customMiniChatData);
  };
  return (
    <aside className={`m-tool-bar ${isExpand ? "tool-bar-show" : ""}`}>
      <ul>
        <li className="tool-bar-helpCenter">
          <a
            className={isExpand ? "bg-white" : ""}
            href={`${NEXT_PUBLIC_HELP_CENTER_URL}/${lang}`}
          >
            <img
              src={`${CDN_HOST}/BusinessMarket/icon/icon_help%402x.png`}
              alt=""
            />
            <span>{t("帮助")}</span>
          </a>
        </li>
        <li className="tool-bar-service">
          <a
            className={isExpand ? "bg-white" : ""}
            onClick={() => showEchart()}
          >
            <img
              referrerPolicy="no-referrer"
              draggable="false"
              src={`${CDN_HOST}/BusinessMarket/icon/icon_serve%402x.png`}
              alt=""
            />
            <span>{t("客服")}</span>
            {msgCount ? <div className="msg-count">{msgCount} </div> : null}
          </a>
        </li>
        {useInfo?.isKO && (
          <li className="tool-bar-line">
            <a
              target="_blank"
              className={isExpand ? "bg-white" : ""}
              style={{
                textDecoration: "none",
              }}
              href="https://pf.kakao.com/_uzWxoxj"
            >
              <img
                referrerPolicy="no-referrer"
                draggable="false"
                src={`${CDN_HOST}/BusinessMarket/icon/kakao_footer.png`}
                alt=""
              />
              <span>Kakao</span>
            </a>
          </li>
        )}
        {useInfo?.isJA && (
          <li className="tool-bar-line">
            <a
              target="_blank"
              className={isExpand ? "bg-white" : ""}
              style={{
                textDecoration: "none",
              }}
              href="https://line.me/R/ti/p/@962puoaf?oat_content=url"
            >
              <img
                referrerPolicy="no-referrer"
                draggable="false"
                src={`${CDN_HOST}/BusinessMarket/icon/line_logo@2x.png`}
                alt=""
              />
              <span>LINE</span>
            </a>
          </li>
        )}
        <li className="tool-bar-menu">
          {isExpand ? (
            <img
              className="tool-bar-icon-menu"
              draggable="false"
              src={`${CDN_HOST}/BusinessMarket/icon/icon_close%402x.png`}
              alt=""
              onClick={() => setIsExpand(false)}
            />
          ) : (
            <img
              className="tool-bar-icon-menu"
              draggable="false"
              src={`${CDN_HOST}/BusinessMarket/icon/icon_open%402x.png`}
              alt=""
              onClick={() => setIsExpand(true)}
            />
          )}
        </li>
      </ul>
    </aside>
  );
};
export default FloatToolbar;
