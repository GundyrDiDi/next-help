"use client";
import { useCallback, useEffect, useState } from "react";
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
import platAtom from "@/model/Plat";
import { getCookiePlat, getCookieToken } from "@/utils";
import { getShopId, togglePlat } from "@/config/request/interceptors";
import { ENUM_SYSTEM_SOURCE } from "@/const/enum";
import CKBSearch from "@/components/CKBSearch";
import { TokenSignCookie } from "@/config";
import { useAsyncEffect, useRequest } from "ahooks";
import { api } from "@/service";
import CKBCategory from "@/components/CKBCategory/Index";

interface Props {
  children: React.ReactNode;
  params: {
    lang: Local;
    initPlat: string;
    token?: string;
  };
}

export default function Layout({
  children,
  params: { lang, initPlat, token },
}: Props) {
  const [customerDetail, requestCustomerDetail] = useAtom(CustomerDetail);
  const setMessages = useSetAtom(MessageAtom);
  const [plat, setPlat] = useAtom(Plat);
  const setCurLang = useSetAtom(Lang);
  setCurLang(lang);
  setPlat(initPlat);
  const systemSource = customerDetail?.systemSource;

  const { runAsync: getCurrentCartList } = useRequest(
    api.order.cart.getCurrentCartList,
    { manual: true }
  );

  useAsyncEffect(async () => {
    if (!runsOnServerSide) {
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
      setPlat(getCookiePlat);
      togglePlat(
        plat === "d2c" ? ENUM_SYSTEM_SOURCE.D2C : ENUM_SYSTEM_SOURCE.B2B
      );
    }
  }, [lang, requestCustomerDetail, setPlat]);

  useEffect(() => {
    console.log(customerDetail, "customerDetail");

    // 语言对不上时刷新页面
    if (
      customerDetail?.langcode !== lang &&
      !runsOnServerSide &&
      customerDetail?.langcode
    ) {
      location.href = location.href.replace(
        `/${lang}/`,
        `/${customerDetail?.langcode}/`
      );
    }
  }, [customerDetail, lang]);

  // useEffect(() => {
  //   togglePlat(
  //     plat === "d2c" ? ENUM_SYSTEM_SOURCE.D2C : ENUM_SYSTEM_SOURCE.B2B
  //   );
  //   console.log(plat, "plat");
  // }, [plat]);

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
    if (systemSource === ENUM_SYSTEM_SOURCE.B2B) {
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
  }, [systemSource]);

  return (
    <ConfigProvider locale={locale} theme={getThemeStyle()}>
      <CKBHeader plat={plat} />
      <CKBSearch />
      <CKBCategory />
      <FloatToolbar />
      {children}
      <CKBFooter lang={lang} plat={plat} />
    </ConfigProvider>
  );
}
