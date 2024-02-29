"use client"
// import type { Metadata } from "next";
import "./globals.css";
import CKBLayout, { atomRequestCustomerDetail } from "@/components/CKBLayout";
import { getLang, LocalContext } from '@/i18n/init';
import '@/styles/theme/b2b-css-variable.scss';
import '@/styles/theme/d2c-css-variable.scss';
import { useCallback, useEffect, useState } from "react";
import ja_JP from 'antd/locale/ja_JP';
import ko_KR from 'antd/locale/ko_KR';
import en_GB from 'antd/locale/en_GB';
import { Locale } from 'antd/lib/locale';
import { CustomerDetail, Local } from '@/model';
import { useAtom } from "jotai";
import { ConfigProvider } from 'antd';
import { ThemeConfig } from 'antd/lib/config-provider';


const { langType } = Local;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [locale, setLocale] = useState<Locale>();
  const [customerDetail, requestCustomerDetail] = useAtom(
    atomRequestCustomerDetail
);
const [local] = useAtom(langType);
const systemSource = customerDetail?.systemSource;

useEffect(() => {
  requestCustomerDetail();
}, [requestCustomerDetail]);

useEffect(() => {
  const lang = getLang();

  const locale = {
      ja_JP,
      ko_KR,
      en_GB
  }[lang];
  setLocale(locale);
}, []);

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
    <html lang="en">
      <script type="text/javascript" src="https://cdn.channel.io/plugin/ch-plugin-web.js" async></script>
      <body >
        <div id="J_B2B" className="App">
        <LocalContext.Provider value={local}>
                <ConfigProvider locale={locale} theme={getThemeStyle()}>
                <CKBLayout>
                  {children}
               </CKBLayout>
                </ConfigProvider>
                </LocalContext.Provider>
       
          </div>
        </body>
    </html>
  );
}
