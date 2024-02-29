/*
 * @Author: shiguang
 * @Date: 2023-05-05 13:18:52
 * @LastEditors: shiguang
 * @LastEditTime: 2023-05-05 13:22:52
 * @Description: utils
 */

type MultipleLangConfigJSON = Record<string, string | Record<string, string>>;
type ConfigLang = 'en_US' | 'zh_CN';

const initLang = (configJSON: MultipleLangConfigJSON, lang: ConfigLang) => {
    return Object.keys(configJSON).reduce((pre, cur) => {
        pre[cur] = configJSON[cur]?.[lang];
        return pre;
    }, {} as MultipleLangConfigJSON);
};

export const createConfig = (_config: MultipleLangConfigJSON) => {
    const config = ['zh-CN', 'en-US'].reduce(
        (pre, cur) => {
            pre[cur] = initLang(
                _config,
                cur.split('-').join('_') as ConfigLang
            );
            return pre;
        },
        {} as Record<string, MultipleLangConfigJSON>
    );
    return config;
};

export const configToResources = (config: ReturnType<typeof createConfig>) => {
    return Object.keys(config).reduce(
        (pre, cur) => {
            pre[cur] = {
                translation: config[cur]
            };
            return pre;
        },
        {} as Record<string, { translation: MultipleLangConfigJSON }>
    );
};
