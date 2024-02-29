'use client'
import qs from 'query-string';

const getQueryEnv = () => {
    const query = qs.parse(window.location.search) as { _env?: string };
    return query?._env;
};

const getRquestBaseUrlByEnv = (env: string) => {
    const prod2 = 'https://prod-gateway.theckb.com';
    const prodUrl = 'https://gateway-prod.theckb.com';
    const preUrl = 'https://pre-gateway.theckb.com';
    if (env === 'prod') {
        return prodUrl;
    }
    if (env === 'prod2') {
        return prod2;
    }
    if (env === 'pre') {
        return preUrl;
    }
    return `https://${env}-gateway.theckb.com`;
};

// 1. 可以在 url 上配置
// 2. 可以在 代码中 动态改动
// 3. 根据域名处理
export const serviceConfig = (() => {
    return {
        baseURL: (() => {
            console.log(process.env);
            if (
                process.env.REACT_APP_URL &&
                process.env.REACT_APP_URL !== 'undefined'
            )
                return process.env.REACT_APP_URL;
            const queryEnv = getQueryEnv();
            if (queryEnv) {
                return getRquestBaseUrlByEnv(queryEnv);
            }
            const devUrl = 'https://pre-gateway.theckb.com';
            if (window.location.port) return devUrl;
            const arr = window.location.host.split('-');
            let [env] = arr;
            if (arr.length < 2) env = 'prod';
            return getRquestBaseUrlByEnv(env);
        })()
    };
})();
