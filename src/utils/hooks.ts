/*
 * @Author: shiguang
 * @Date: 2023-04-27 15:41:49
 * @LastEditors: shiguang
 * @LastEditTime: 2024-05-16 19:33:13
 * @Description: react hooks
 */
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { ROUTER_BASENAME } from '@/config/base';

type PathnameChangeCallback = (pathname: string, fullPathName: string) => void;

export const usePathnameChange = (
    pathnameChangeCallback: PathnameChangeCallback
) => {
    const pathnameChangeCallbackRef = useRef(pathnameChangeCallback);
    pathnameChangeCallbackRef.current = pathnameChangeCallback;
    const location = useLocation();
    const { pathname } = location;
    useEffect(() => {
        pathnameChangeCallbackRef.current(
            pathname,
            `/${ROUTER_BASENAME}${pathname}`
        );
    }, [pathname]);
};
