/*
 * @Author: shiguang
 * @Date: 2023-02-23 15:13:00
 * @LastEditTime: 2023-07-04 21:47:27
 * @LastEditors: shiguang
 * @Description: react-i18next-config
 */

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { resources } from '@/i18n/locales';

i18n.use(initReactI18next)
    .use(LanguageDetector)
    // 初始化
    .init({
        // 本地多语言数据
        lng: 'zh-CN',
        resources,
        fallbackLng: 'en-US',
        detection: {
            caches: ['localStorage', 'sessionStorage', 'cookie']
        }
    });
export default i18n;
