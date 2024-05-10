/*
 * @Author: shiguang
 * @Date: 2024-04-08 21:06:55
 * @LastEditors: shiguang
 * @LastEditTime: 2024-05-10 22:32:01
 * @Description: 
 */
/** @type {import('next').NextConfig} */
import Analyzer from "@next/bundle-analyzer";
const { SERVER_ENV: _SERVER_ENV } = process.env;
const SERVER_ENV = _SERVER_ENV || process.env.NEXT_PUBLIC_ENV;

const withBundleAnalyzer = Analyzer({
  enabled: false,
});
const getEnv = () => {
  if (SERVER_ENV === "test") {
    return {
      NEXT_PUBLIC_ENV: "test",
      buildTime: new Date().toLocaleString(),
      NEXT_PUBLIC_THE_CKB_LINK: "https://master-s.theckb.com",
      NEXT_PUBLIC_THE_CKB_API_URL: "https://master-gateway.theckb.com",
      // # 测试环境帮助中心地址
      NEXT_PUBLIC_HELP_CENTER_URL: 'https://test-client-help.theckb.com',
      // # 测试环境帮助中心地址
      NEXT_PUBLIC_X_GRAY_TAG: '20240408-seo',
    };
  } else if (SERVER_ENV === "pre") {
    return {
      NEXT_PUBLIC_ENV: "pre",
      buildTime: new Date().toLocaleString(),
      NEXT_PUBLIC_THE_CKB_LINK: "https://pre-s.theckb.com",
      NEXT_PUBLIC_THE_CKB_API_URL: "https://pre-gateway.theckb.com",
      // # 正式环境帮助中心地址
      NEXT_PUBLIC_HELP_CENTER_URL: 'https://pre-help.theckb.com',
      NEXT_PUBLIC_X_GRAY_TAG: '20240408-seo',
    };
  } else if (SERVER_ENV === "prod") {
    return {
      NEXT_PUBLIC_ENV: "prod",
      buildTime: new Date().toLocaleString(),
      NEXT_PUBLIC_THE_CKB_LINK: "https://s.theckb.com",
      NEXT_PUBLIC_THE_CKB_API_URL: "https://gateway-prod.theckb.com",
      // # 正式环境帮助中心地址
      NEXT_PUBLIC_HELP_CENTER_URL: 'https://help.theckb.com'
    };
  } else {
    return {
      NEXT_PUBLIC_ENV: "prod",
      buildTime: new Date().toLocaleString(),
      NEXT_PUBLIC_THE_CKB_LINK: "https://s.theckb.com",
      NEXT_PUBLIC_THE_CKB_API_URL: "https://gateway-prod.theckb.com",
    };
  }
  // return {
  //   NEXT_PUBLIC_ENV: "pre",
  //   buildTime: new Date().toLocaleString(),
  //   NEXT_PUBLIC_THE_CKB_LINK: "https://pre-s.theckb.com",
  //   NEXT_PUBLIC_THE_CKB_API_URL: "https://pre-gateway.theckb.com",
  //   NEXT_PUBLIC_HELP_CENTER_URL: 'https://pre-help.theckb.com',
  //   NEXT_PUBLIC_X_GRAY_TAG: '20240408-seo',
  // };
};

const env = getEnv();
console.log(`启动时间：${new Date().toLocaleString()},启动环境:${SERVER_ENV}`);
const nextConfig = {
  compress: true,
  env: {
    ...env,
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "x-time",
            value: new Date().toLocaleString(),
          },
        ],
      },
    ];
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: "@svgr/webpack",
    });
    return config;
  },
};

export default withBundleAnalyzer(nextConfig);
