/*
 * @Author: shiguang
 * @Date: 2023-05-17 19:30:14
 * @LastEditors: lihwang_wf@126.com
 * @LastEditTime: 2023-12-06 18:29:34
 * @Description: UserDropDwon
 */
import { Popover } from 'antd';
import React from 'react';
import './index.scss';
import Cookie from 'js-cookie';
import IconHeadSculpture from '@/components/Icon/IconHeadSculpture';
import { ENUM_PAGE } from '@/const/enum';
import { jumpPage } from '@/utils';
import { CustomerDetailRespDTO } from '@/service/customer';
import { TokenSignCookie } from '@/config';
interface UserDropDwonProps {
    children?: React.ReactNode;
    className?: string | undefined;
    customerDetail?: CustomerDetailRespDTO;
}
const DROP_DWON_LIST = [
    [window._$m.t('登录账号管理'), ENUM_PAGE.SETUP_ACCOUNT],
    [window._$m.t('店铺采购管理'), ENUM_PAGE.SETUP_SHOP],
    [window._$m.t('我收藏的商品/店铺'), ENUM_PAGE.PRODUCT_COLLECT],
    [window._$m.t('我买过的商品/店铺'), ENUM_PAGE.PRODUCT_AFTER_PURCHASE],
    [window._$m.t('我看过的商品/店铺'), ENUM_PAGE.PRODUCT_FOOT_PRINT],
    [window._$m.t('我的钱包'), ENUM_PAGE.FUND_STORE_FUND],
    [
        window._$m.t('帮助'),
        ENUM_PAGE.HELP,
        {
            tab: 1,
            id: 1
        }
    ]
] as const;

// hover:text-[color:--color-primary-light]
const UserDropDwon: React.FC<UserDropDwonProps> = (props) => {
    const { children, className, customerDetail } = props;
    const content = (
        <div className="w-[300px] text-[color:--color-primary-text] py-[8px]">
            <div className="h-[60px] flex px-[16px] justify-between items-center">
                <div className="flex items-center">
                    <div className="cursor-pointer">
                        <IconHeadSculpture width={30} height={30} />
                    </div>
                    <div className="ml-[12px]">
                        <div className="text-[16px] font-[600] hover:underline cursor-pointer hover:[color:--color-primary]">
                            {' '}
                            {customerDetail?.loginName}
                            {window._$m.t('様')}
                        </div>
                        <div
                            className="cursor-pointer hover:underline hover:[color:--color-primary] font-medium"
                            style={{
                                fontSize: 12
                            }}
                        >
                            {customerDetail?.membership?.membershipTemplateName}
                        </div>
                    </div>
                </div>
                <div
                    className="w-[124px] bg-[--color-bg-header] text-[--color-white] leading-[30px] px-[4px] text-[12px] rounded-[18px] cursor-pointer text-center"
                    onClick={() => {
                        jumpPage(ENUM_PAGE.VIP_LEVEL);
                    }}
                >
                    {window._$m.t('升级会员')}
                </div>
            </div>
            <ul>
                {DROP_DWON_LIST.map(([title, path, query]) => {
                    return (
                        <li
                            onClick={() => {
                                jumpPage(path, {
                                    query,
                                    isOtherSystem: true
                                });
                            }}
                            key={path}
                            className="hover:text-[color:--color-primary] hover:bg-[color:--color-primary-light-bg] cursor-pointer px-[16px] leading-[40px]"
                        >
                            {title}
                        </li>
                    );
                })}
            </ul>
            <p
                className="px-[16px] leading-[16px] text-[color:#aaa] hover:[color:--color-primary]  cursor-pointer  text-[12px] right text-right"
                onClick={() => {
                    Cookie.remove(TokenSignCookie, {
                        domain: '.theckb.com'
                    });
                    window.localStorage.removeItem('production_route/token');
                    window.localStorage.removeItem('production_route/curShop');
                    window.location.href = `${window.location.origin}/d2c/index/pure`;
                }}
            >
                {window._$m.t('退出登录')}
            </p>
        </div>
    );
    return (
        <Popover
            content={content}
            trigger="hover"
            style={{
                padding: 0
            }}
            className="user-drop-dwon-popover"
            overlayInnerStyle={{
                padding: 0
            }}
        >
            {children}
        </Popover>
    );
};
export default UserDropDwon;
