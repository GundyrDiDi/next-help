import { createInstance } from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { initReactI18next } from 'react-i18next/initReactI18next'
import { Local, getOptions } from './settings'

/** 初始化翻译 */
const initI18next = async (lng:Local) => {
  const i18nInstance = createInstance()
  await i18nInstance
    .use(initReactI18next)
    .use(resourcesToBackend((language: any, namespace: any) => import(`@/i18n/locales/${language}.js`)))
    .init(getOptions(lng))
  return i18nInstance
}

/** hook使用翻译 */
export async function serveTranslation(lng:Local) {
  const i18nextInstance = await initI18next(lng)
  return {
    t: i18nextInstance.getFixedT(lng),
    i18n: i18nextInstance
  }
}

// TODO:待完成
export const  getLang=()=>{
  return ''
}