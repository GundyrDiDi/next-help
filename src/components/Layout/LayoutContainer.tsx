"use client";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import ja_JP from "antd/locale/ja_JP";
import ko_KR from "antd/locale/ko_KR";
import en_GB from "antd/locale/en_GB";
import { CustomerDetail, Lang, LoadAtom, MessageAtom, Plat } from "@/model";
import { useAtom, useSetAtom } from "jotai";
import { ConfigProvider, Spin } from "antd";
import { ThemeConfig } from "antd/lib/config-provider";
import CKBFooter from "@/components/CKBFooter";
import CKBHeader from "@/components/CKBHeader";
import FloatToolbar from "@/components/FloatToolbar";
import { Local } from "@/i18n/settings";
import { LocalContext, runsOnServerSide } from "@/i18n/client";
import { getCookiePlat, getCookieToken } from "@/utils";
import { getShopId, togglePlat } from "@/config/request/interceptors";
import { ENUM_SYSTEM_SOURCE } from "@/const/enum";
import CKBSearch from "@/components/CKBSearch";
import { useAsyncEffect, useRequest } from "ahooks";
import { api } from "@/service";
import CKBCategory from "@/components/CKBCategory/Index";
import { useRouter, usePathname } from "next/navigation";
import { ENUM_PLATE } from "@/model/Plat";
import { ReadonlyHeaders } from "next/dist/server/web/spec-extension/adapters/headers";

interface Props {
  children: React.ReactNode;
  params: {
    lang: Local;
    initPlat: ENUM_PLATE;
    token?: string;
    serverHeaders: {
      host: string;
    };
  };
}

export default function Layout({ children, params }: Props) {
  const { lang, initPlat, token, serverHeaders } = params;

  const [customerDetail, requestCustomerDetail] = useAtom(CustomerDetail);
  const setMessages = useSetAtom(MessageAtom);
  const [_, setPlat] = useAtom(Plat);
  const setCurLang = useSetAtom(Lang);
  setCurLang(lang);
  const { runAsync: getCurrentCartList } = useRequest(
    api.order.cart.getCurrentCartList,
    { manual: true }
  );
  const currentPath = usePathname();
  useAsyncEffect(async () => {
    if (!runsOnServerSide) {
      // 初始化语言
      document.documentElement.lang = lang;
      document.documentElement.classList.add(lang);
      if (getCookieToken) {
        await requestCustomerDetail();
        if (getShopId()) {
          const res = await getCurrentCartList();
          setMessages((val) => {
            return {
              ...val,
              carNum: res.data?.cartSummary?.sumCartProductQuantity ?? 0,
            };
          });
        }
      }
      setPlat(initPlat);
      // setPlat(getCookiePlat);
      togglePlat(
        initPlat === "d2c" ? ENUM_SYSTEM_SOURCE.D2C : ENUM_SYSTEM_SOURCE.B2B
      );
    }
  }, [lang, requestCustomerDetail]);

  useEffect(() => {
    // 语言对不上时刷新页面
    if (
      customerDetail?.langcode !== lang &&
      !runsOnServerSide &&
      customerDetail?.langcode
    ) {
      const originHref = (() => {
        if (window.location.href.endsWith(`/${lang}`)) {
          return window.location.href + "/";
        }
        return window.location.href;
      })();
      const newHref = originHref.replace(
        `/${lang}/`,
        `/${customerDetail?.langcode}/`
      );
      window.location.href = newHref;
    }
  }, [customerDetail, lang]);

  const locale = {
    [Local.JA]: ja_JP,
    [Local.KO]: ko_KR,
    [Local.EN]: en_GB,
  }[lang];

  // 通过系统来源获取主题色
  const getThemeStyle = useCallback(() => {
    let obj: ThemeConfig = {
      token: {
        colorPrimary: "#008060",
        borderRadius: 4,
        controlOutlineWidth: 0,
        fontSize: 12,
      },
      components: {
        Badge: {
          boxShadow: "0",
          boxShadowSecondary: "0",
          boxShadowTertiary: "0",
          lineWidth: 0,
        },
        Modal: {
          colorPrimary: "#31c8a2",
        },
        Menu: {
          // 默认的背景和颜色
          itemBg: "#008060",
          itemColor: "#fff",
          // 选中的背景
          colorItemBgSelected: "#e5f6f2",
          itemHoverBg: "#e5f6f2",
          itemHoverColor: "#008060",
          itemBorderRadius: 4,
        },
        Button: {
          controlOutlineWidth: 0,
          motionEaseInOutCirc: "cubic-dezier(0,0,0,0)",
          defaultActiveColor: "transparent",
          fontSize: 12,
        },
        Select: {
          fontSize: 12,
        },
        Wave: {
          motionEaseInOutCirc: "cubic-dezier(0,0,0,0)",
          colorPrimary: "#fff",
        },
        Input: {
          controlOutlineWidth: 0,
        },
      },
    };
    if (initPlat === "b2b") {
      obj = {
        token: {
          colorPrimary: "#2e4968",
          borderRadius: 4,
          controlOutlineWidth: 0,
          fontSize: 12,
        },
        components: {
          Badge: {
            boxShadow: "0",
            boxShadowSecondary: "0",
            boxShadowTertiary: "0",
            lineWidth: 0,
          },
          Modal: {
            colorPrimary: "#1890ff",
          },
          Menu: {
            // 默认的背景和颜色
            itemBg: "#2e4968",
            itemColor: "#fff",
            // 选中的背景
            colorItemBgSelected: "#e5eff9",
            itemHoverBg: "#e5eff9",
            itemHoverColor: "#2e4968",
          },
          Button: {
            controlOutlineWidth: 0,
            motionEaseInOutCirc: "cubic-dezier(0,0,0,0)",
            defaultActiveColor: "transparent",
          },
          Wave: {
            motionEaseInOutCirc: "cubic-dezier(0,0,0,0)",
            colorPrimary: "#fff",
          },
          Input: {
            controlOutlineWidth: 0,
          },
        },
      };
    }
    return obj;
  }, [initPlat]);
  console.log(initPlat, "initPlat");

  const isHelpPage = serverHeaders.host.includes("help");
  const isVideoPage = currentPath.includes("/video/");
  return (
    <ConfigProvider locale={locale} theme={getThemeStyle()}>
      <CKBHeader plat={initPlat} />
      {isHelpPage ? null : (
        <>
          <CKBSearch />
          <CKBCategory />
        </>
      )}
      <FloatToolbar />
      {children}
      {!isVideoPage && <CKBFooter lang={lang} plat={initPlat} />}
    </ConfigProvider>
  );
}
