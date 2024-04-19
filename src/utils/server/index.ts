import { PlatCookie, TokenSignCookie } from "@/config";
import { cookies } from "next/headers";

/**
 * 通过 cookies 获得页面数据
 * @returns 
 */
export const getCommonDataByCookie = () => {
    const cookieStore = cookies();
    // 'd2c' | 'b2b'
    const plat = cookieStore.get(encodeURIComponent(PlatCookie))?.value || "d2c";
    const token = cookieStore.get(encodeURIComponent(TokenSignCookie))?.value;
    return {
      plat,
      token,
    } as {
        /** 平台类型 d2c b2b */
        plat: 'd2c' | 'b2b',
        /** 用户 token */
        token: string,
    };
}
