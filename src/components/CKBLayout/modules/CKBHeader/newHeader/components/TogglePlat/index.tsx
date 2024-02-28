/*
 * @Author: liangliang
 * @Date: 2023-07-07 13:28:06
 * @LastEditors: liangliang
 * @LastEditTime: 2023-07-08 19:31:33
 * @Description: B2B/D2C切换
 */
import React from 'react';
import './index.scss';
import { request } from '@/config/request';
// import { togglePlat } from '@/config/request/interceptors';
import { ENUM_SYSTEM_SOURCE } from '@/const/enum';
interface PlatDTO {
    label: string;
    path: string;
    name: string;
}
const Plats = [
    {
        label: 'B2B',
        path: '/b2b',
        name: 'b2b',
        type: ENUM_SYSTEM_SOURCE.B2B
    },
    {
        label: 'D2C',
        path: '/d2c',
        name: 'd2c',
        type: ENUM_SYSTEM_SOURCE.D2C
    }
];
interface TogglePlatProps {
    systemSource: ENUM_SYSTEM_SOURCE;
}
const TogglePlat = (props: TogglePlatProps) => {
    const { systemSource } = props;
    /** B2B D2C切换 */
    const changePlat = async (item: PlatDTO) => {
        const res = await request.customer.changeLogin.changeLogin();
        if (res.data?.token) {
            window.localStorage.setItem(
                'production_route/token',
                JSON.stringify({
                    val: res.data?.token,
                    expire: undefined
                })
            );
            // localStorage.setItem('_reload_page_', Math.random().toString().slice(2));
            const fistShopId = res.data?.customerShopList?.[0].customerShopId;
            // window.localStorage.removeItem('production_route/curShop');
            window.localStorage.setItem(
                'production_route/curShop',
                JSON.stringify({
                    val: fistShopId,
                    expire: null
                })
            );
            const plat =
                res.data.customerRespDTO?.systemSource ===
                ENUM_SYSTEM_SOURCE.D2C
                    ? '/d2c/'
                    : '/b2b/';
            window.location.replace(
                window.location.origin + plat + 'index/pure'
            );
        }
    };
    return (
        <div id="toggle-plat" className="ml-[30px]">
            {Plats.map((item) => {
                return (
                    <div
                        onClick={() => changePlat(item)}
                        className={
                            systemSource === item.type
                                ? 'plat-btn active'
                                : 'plat-btn'
                        }
                        key={item.name}
                    >
                        {item.label}
                    </div>
                );
            })}
        </div>
    );
};
export default TogglePlat;
