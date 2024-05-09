/*
 * @Author: shiguang
 * @Date: 2024-05-09 17:56:13
 * @LastEditors: shiguang
 * @LastEditTime: 2024-05-09 21:15:12
 * @Description: 
 */

import { addQueryWhenJumpStheckb } from './tinkingDataJumpQuery';

export const handleHref = (originUrl: string) => {
  return addQueryWhenJumpStheckb(originUrl)
};

/**
 * intercept route by location
 */
const interceptRouteByLocation = (handleHref: (originUrl: string) => string) => {
  const $location = {
    set href(_href: string) {
      debugger
      const to = handleHref(_href);
      location.href = to;
    },
    replace: (url: string) => {
      const to = url.toString();
      location.replace(to);
    },
  }
  window.$location = $location;
}

/**
 * intercept route by a tag
 * return remove listener
 */
const interceptRouteByLocationATag = (handleHref: (originUrl: string) => string) => {
  const eventListener = (event: MouseEvent) => {
    const path: EventTarget[] = (event as any).path || (event.composedPath && event.composedPath());
    if (event.defaultPrevented) {
      return;
    }
    for (const item of path) {
      if (item instanceof HTMLAnchorElement) {
        event.preventDefault();
        const to = handleHref(item.href);
        return window.open(to, item.target || "_self");
      }
    }
  }
  // 目前只有 ckick touch 呢 ?
  document.addEventListener("click", eventListener)
  return () => document.removeEventListener('click', eventListener)
}

export const routeInterceptor = () => {
  interceptRouteByLocation(handleHref);
  interceptRouteByLocationATag(handleHref);
}