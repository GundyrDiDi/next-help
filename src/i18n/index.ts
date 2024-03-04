import { createInstance } from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { initReactI18next } from 'react-i18next/initReactI18next'
import { Local, getOptions } from './settings'

/** 初始化翻译 */
const initI18next = async (lng:Local, ns:string) => {
  const i18nInstance = createInstance()
  await i18nInstance
    .use(initReactI18next)
    .use(resourcesToBackend((language: any, namespace: any) => import(`@/i18n/locales/${language}.js`)))
    .init(getOptions(lng, ns))
  return i18nInstance
}

/** hook使用翻译 */
export async function useTranslation(lng:Local, ns:string, options = {keyPrefix:''}) {
  const i18nextInstance = await initI18next(lng, ns)
  return {
    t: i18nextInstance.getFixedT(lng, Array.isArray(ns) ? ns[0] : ns, options.keyPrefix),
    i18n: i18nextInstance
  }
}

// TODO:待完成
export const  getLang=()=>{
  return ''
}