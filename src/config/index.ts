type env = 'dev' | 'prod' | 'pre';
// eslint-disable-next-line
const m = window.location.host.match(/(^[^\-]+)-/);
let env = m ? m[1] : 'prod';
if (window.location.port === '3666') {
    env = 'dev';
}

export const TokenSignCookie: string = env + '_route/token';
export const PlatCookie: string = env + '_route/plat';
