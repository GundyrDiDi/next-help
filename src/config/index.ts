type env = 'dev' | 'prod' | 'pre';

export const TokenSignCookie: string = process.env.NEXT_PUBLIC_ENV + '_route/token';
export const PlatCookie: string = process.env.NEXT_PUBLIC_ENV  + '_route/plat';
export const ShopCookie: string = process.env.NEXT_PUBLIC_ENV  + '_route/curShop';


export const THE_CKB_LINK=process.env.NEXT_PUBLIC_THE_CKB_LINK
export const NEXT_PUBLIC_HELP_CENTER_URL=process.env.NEXT_PUBLIC_HELP_CENTER_URL
