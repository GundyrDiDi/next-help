'use client'

import i18next from 'i18next'
import { createContext, useEffect, useState } from 'react'
import { UseTranslationOptions, initReactI18next, useTranslation as useTranslationOrg } from 'react-i18next'
import { useCookies } from 'react-cookie'
import resourcesToBackend from 'i18next-resources-to-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { getOptions, languages, cookieName, Local, fallbackLng } from '@/i18n/settings'

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

export function useTranslation(lng: Local) {
  const [cookies, setCookie] = useCookies([cookieName])
  const ret = useTranslationOrg()
  const { i18n } = ret
  if (runsOnServerSide && lng && i18n.resolvedLanguage !== lng) {
    i18n.changeLanguage(lng)
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
      if (!lng || i18n.resolvedLanguage === lng) return
      i18n.changeLanguage(lng)
    }, [lng, i18n])
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (cookies[cookieName] === lng) return
      setCookie(cookieName, lng, { path: '/' })
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lng, cookies[cookieName]])
  }
  return ret
}
