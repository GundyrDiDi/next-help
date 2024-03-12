'use client'

import i18next from 'i18next'
import { createContext, useEffect, useState } from 'react'
import { UseTranslationOptions, initReactI18next, useTranslation as useTranslationOrg } from 'react-i18next'
import { useCookies } from 'react-cookie'
import resourcesToBackend from 'i18next-resources-to-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { getOptions, languages, cookieName, Local, fallbackLng } from '@/i18n/settings'
import { useAtom } from 'jotai'
import { Lang } from '@/model'

/** 判断是否是服务器 */
export const runsOnServerSide = typeof window === 'undefined'


export const LocalContext = createContext(fallbackLng);
 
// on client side the normal singleton is ok
i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(resourcesToBackend((language: any, namespace: any) => import(`@/i18n/locales/${language}.js`)))
  .init({
    ...getOptions(),
    lng: undefined, // let detect the language on client side
    detection: {
      order: ['path', 'htmlTag', 'cookie', 'navigator'],
    },
    preload: runsOnServerSide ? languages : []
  })

export function useTranslation() {
  const [lang]=useAtom(Lang)
  const [cookies, setCookie] = useCookies([cookieName])
  const ret = useTranslationOrg()
  const { i18n } = ret
  if (runsOnServerSide && lang && i18n.resolvedLanguage !== lang) {
    i18n.changeLanguage(lang)
  } else {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [activeLng, setActiveLng] = useState(i18n.resolvedLanguage)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (activeLng === i18n.resolvedLanguage) return
      setActiveLng(i18n.resolvedLanguage)
    }, [activeLng, i18n.resolvedLanguage])
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (!lang || i18n.resolvedLanguage === lang) return
      i18n.changeLanguage(lang)
    }, [lang, i18n])
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (cookies[cookieName] === lang) return
      setCookie(cookieName, lang, { path: '/' })
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lang, cookies[cookieName]])
  }
  return ret
}
