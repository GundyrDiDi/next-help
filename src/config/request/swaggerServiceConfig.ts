const getRquestBaseUrlByEnv = () => {
    if(typeof window ===  'undefined'){
        return process.env.NEXT_PUBLIC_THE_CKB_API_URL;
    }
    const env=process.env.NEXT_PUBLIC_ENV;
    const prodUrl = 'https://gateway-prod.theckb.com';
    const preUrl = 'https://pre-gateway.theckb.com';
    const devUrl = `https://master-gateway.theckb.com`;
    if (env === 'prod') {
        return prodUrl;
    }
    if (env === 'pre') {
        return preUrl;
    }
    if (env === 'dev') {
        return devUrl;
    }
    return devUrl;
};


export const serviceConfig = (() => {
    return {
        baseURL: (() => {
            return getRquestBaseUrlByEnv();
        })()
    };
})();
