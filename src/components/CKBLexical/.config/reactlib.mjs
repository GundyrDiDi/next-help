/*
 * @Author: shiguang
 * @Date: 2024-01-04 15:59:21
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-16 16:48:01
 * @Description: 
 */
// import typescript from '@rollup/plugin-typescript';
import typescript from 'rollup-plugin-typescript2';
import { defineConfig } from 'rollup'
import json from '@rollup/plugin-json';
import serve from 'rollup-plugin-serve';
import replace from '@rollup/plugin-replace';
//使用node模块的解析逻辑，不然导入第三方库会找不到
import resolve from "@rollup/plugin-node-resolve";
//convert commonjs module to es6 module, so that you can use a commonjs module by 'import'
import commonjs from "@rollup/plugin-commonjs";
import livereload from 'rollup-plugin-livereload'
import path from 'path';
import sass from 'rollup-plugin-sass';


// curl 'https://pre-gateway.theckb.com/goods/search/url' \
//   -H 'accept: application/json, text/plain, */*' \
//   -H 'accept-language: en,zh-CN;q=0.9,zh;q=0.8' \
//   -H 'content-type: application/json' \
//   -H 'dnt: 1' \
//   -H 'origin: http://localhost:3000' \
//   -H 'priority: u=1, i' \
//   -H 'referer: http://localhost:3000/' \
//   -H 'sec-ch-ua: "Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"' \
//   -H 'sec-ch-ua-mobile: ?0' \
//   -H 'sec-ch-ua-platform: "macOS"' \
//   -H 'sec-fetch-dest: empty' \
//   -H 'sec-fetch-mode: cors' \
//   -H 'sec-fetch-site: cross-site' \
//   -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36' \
//   -H 'x-authtoken: ""' \
//   -H 'x-gray-tag: 20240509-frog' \
//   --data-raw '{"detailUrl":"https://detail.1688.com/offer/733882229114.html?spm=a260k.dacugeneral.0.0.663335e4Pkv2QG&resultType=normal"}'

// import eslint from '@rollup/plugin-eslint';



const defalutConf = {
    input: path.resolve(process.cwd(), './index.tsx'),
    onwarn(warning, warn) {
        if (warning.code === "MODULE_LEVEL_DIRECTIVE") {
          return;
        }
        warn(warning);
      },
    output: {
        dir: path.resolve(process.cwd(), 'lib'),
        format: 'esm',
        sourcemap: true
    },
    external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        'react/client',
    ],
    plugins: [
        // eslint(),
        typescript({
            // cwd: path.resolve(process.cwd(), 'lib'),
        }),
        json(),
        sass({
            output: true,
            output: path.resolve(process.cwd(), 'lib/index.css'),
        })
        // commonjs({ include: [/node_modules/] }),
    ]
};


export default defineConfig([
    defalutConf,
    // {
    //     ...defalutConf.plugins,
    //     // input: './index.tsx',
    //     // output: {
    //     //     file: 'public/lib/bundle.js',
    //     //     format: 'iife',
    //     //     sourcemap: true
    //     // },
    //     external: [
    //     ],
    //     plugins: [
    //         ...defalutConf.plugins,
    //         resolve(),
    //         replace({
    //             preventAssignment: false,
    //             'process.env.NODE_ENV': '"development"'
    //         }),
    //         livereload(),
    //         serve({
    //             host: 'localhost',
    //             port: 10001,
    //             contentBase: ['public'],
    //         })
    //     ]
    // },
]);

/*********
 * 
 * 
 * 
 * 
 */
