type env = 'dev' | 'prod' | 'pre';

export const TokenSignCookie: string = process.env.NEXT_PUBLIC_ENV + '_route/token';
export const PlatCookie: string = process.env.NEXT_PUBLIC_ENV  + '_route/plat';
