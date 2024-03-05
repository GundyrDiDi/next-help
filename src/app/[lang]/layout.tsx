"use client"
import "./globals.css";
// import { getLang, LocalContext ,Local} from '@/i18n/init';
import '@/styles/theme/b2b-css-variable.scss';
import '@/styles/theme/d2c-css-variable.scss';
import { useCallback, useEffect, useState } from "react";
import ja_JP from 'antd/locale/ja_JP';
import ko_KR from 'antd/locale/ko_KR';
import en_GB from 'antd/locale/en_GB';
import zh_CN from 'antd/locale/zh_CN';
import { CustomerDetail} from '@/model';
import { useAtom } from "jotai";
import { ConfigProvider } from 'antd';
import { ThemeConfig } from 'antd/lib/config-provider';
import CKBFooter from "@/components/CKBFooter";
import CKBHeader from "@/components/CKBHeader";
import FloatToolbar from "@/components/FloatToolbar";
import { Local } from "@/i18n/settings";
import { LocalContext } from "@/i18n/client";
import Providers from './providers'
import platAtom from "@/model/Plat";
import { PlatCookie } from "@/config";
import { getCookiePlat } from "@/utils";


export default function RootLayout({
  children,
  params:{lang}
}: Readonly<{
  children: React.ReactNode;
  params:{
    lang: Local;
  }
}>) {
  const [customerDetail, requestCustomerDetail] = useAtom(CustomerDetail);
  const [plat,setPlat]=useAtom(platAtom)

  const systemSource = customerDetail?.systemSource;

useEffect(() => {
  requestCustomerDetail();
  console.log(getCookiePlat,'getCookiePlat1');
  setPlat(getCookiePlat)
}, [requestCustomerDetail, setPlat]);

const locale = {
  [Local.JA]:ja_JP,
  [Local.ZH]:zh_CN,
  [Local.KO]:ko_KR,
  [Local.EN]:en_GB,
 }[lang];


// 通过系统来源获取主题色
const getThemeStyle = useCallback(() => {
  let obj: ThemeConfig = {
      token: {
          colorPrimary: '#008060',
          borderRadius: 4,
          controlOutlineWidth: 0
      },
      components: {
          Badge: {
              boxShadow: '0',
              boxShadowSecondary: '0',
              boxShadowTertiary: '0',
              lineWidth: 0
          },
          Modal: {
              colorPrimary: '#31c8a2'
          },
          Menu: {
              // 默认的背景和颜色
              itemBg: '#008060',
              itemColor: '#fff',
              // 选中的背景
              colorItemBgSelected: '#e5f6f2',
              itemHoverBg: '#e5f6f2',
              itemHoverColor: '#008060',
              itemBorderRadius: 4
          },
          Button: {
              controlOutlineWidth: 0,
              motionEaseInOutCirc: 'cubic-dezier(0,0,0,0)'
          },
          Wave: {
              motionEaseInOutCirc: 'cubic-dezier(0,0,0,0)',
              colorPrimary: '#fff'
          },
          Input: {
              controlOutlineWidth: 0
          }
      }
  };
  if (systemSource === 2) {
      obj = {
          token: {
              colorPrimary: '#2e4968',
              borderRadius: 4,
              controlOutlineWidth: 0
          },
          components: {
              Badge: {
                  boxShadow: '0',
                  boxShadowSecondary: '0',
                  boxShadowTertiary: '0',
                  lineWidth: 0
              },
              Modal: {
                  colorPrimary: '#1890ff'
              },
              Menu: {
                  // 默认的背景和颜色
                  itemBg: '#2e4968',
                  itemColor: '#fff',
                  // 选中的背景
                  colorItemBgSelected: '#e5eff9',
                  itemHoverBg: '#e5eff9',
                  itemHoverColor: '#2e4968'
              },
              Button: {
                  controlOutlineWidth: 0,
                  motionEaseInOutCirc: 'cubic-dezier(0,0,0,0)'
              },
              Wave: {
                  motionEaseInOutCirc: 'cubic-dezier(0,0,0,0)',
                  colorPrimary: '#fff'
              },
              Input: {
                  controlOutlineWidth: 0
              }
          }
      };
  }
  return obj;
}, [systemSource]);



  return (
    <html lang={lang} data-theme={plat.toLocaleUpperCase()}>
      <script type="text/javascript" src="https://cdn.channel.io/plugin/ch-plugin-web.js" async></script>
      <body >
          <Providers>
            <LocalContext.Provider value={lang}>
                  <ConfigProvider locale={locale} theme={getThemeStyle()}>
                    <CKBHeader plat={plat}/> 
                    <FloatToolbar/>
                      {children}
                  <CKBFooter/>
                  </ConfigProvider>
                  </LocalContext.Provider>
            </Providers>
        </body>
    </html>
  );
}

