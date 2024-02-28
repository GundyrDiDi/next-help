/*
 * @Author: shiguang
 * @Date: 2023-04-26 10:50:23
 * @LastEditors: shiguang
 * @LastEditTime: 2023-07-13 13:05:46
 * @Description: 路由页面
 */
import { ComponentType, LazyExoticComponent, lazy } from 'react';

export interface RouteItem {
    /**
     * 路由对应的页面
     */
    component?: LazyExoticComponent<ComponentType<any>> | ComponentType<any>;
    /**
     * 路由地址
     */
    path?: string;
    /**
     * 父级路由，用于menu的高亮判断，例如 detail 页面 要定位到 列表页面 菜单上
     */
    activePath?: string;
    /**
     * 默认false，如果为true时，需要和路由相同时才能匹配，但是如果有斜杠也是可以匹配上的。
     */
    exact?: boolean;
    /**
     * 是否严格匹配斜杠结尾
     */
    strict?: boolean;
    /**
     * 页面标题
     */
    title?: string;
    /**
     * 显示左侧菜单，默认为true
     */
    showMenu?: boolean;
    /**
     * 显示头部，默认为true，如果设为false，则无头部组件
     */
    showHeader?: boolean;
    /** 页面权限code */
    pagePermissionCode?: string;
    /** 操作权限code */
    actionPermissionCode?: string[];
}

const router: RouteItem[] = [
    {
        path: '/test/page1',
        title: 'test-page1',
        component: lazy(() => import('../container/test/Page1'))
    },
    {
        path: '/test/page2',
        title: 'test-page2',
        component: lazy(() => import('../container/test/Page2'))
    },
    {
        path: '/dev/login',
        title: 'dev-login',
        component: lazy(() => import('../container/dev/Login'))
    },
    {
        path: '/dev/demoI18n',
        title: 'dev-test',
        component: lazy(() => import('../container/dev/DemoI18n'))
    },
    {
        path: '/dev/cssTheme',
        title: 'dev-CssTheme',
        component: lazy(() => import('../container/dev/CssTheme'))
    },
    {
        showMenu: false,
        path: '/order/addFindSource',
        title: '添加寻源单',
        component: lazy(() => import('../container/findSource/AddFindSource'))
    },
    {
        // 寻源单详情,
        path: '/order/findSourceDetail',
        component: lazy(
            () => import('../container/findSource/FindSourceDetail')
        )
    },
    {
        // 编辑寻源单
        path: '/order/editFindSource',
        showMenu: false,
        component: lazy(() => import('../container/findSource/EditFindSource'))
    },
    {
        path: '/goods/list',
        title: 'OEM商品',
        component: lazy(() => import('../container/goods/List'))
    },
    {
        path: '/order/oemSourceList',
        title: '寻源列表',
        component: lazy(() => import('../container/order/OEMSourceList'))
    },
    {
        path: '/order/quotationInfo',
        title: 'OEM报价单详情',
        component: lazy(() => import('../container/order/QuotationInfo'))
    },
    {
        path: '/*',
        title: '迷失方向',
        component: lazy(() => import('../container/other/OtherPage'))
    }
];
export default router;
