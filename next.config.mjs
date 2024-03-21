/** @type {import('next').NextConfig} */
const { SERVER_ENV } = process.env;
import Analyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = Analyzer({
  enabled: false,
});
const getEnv = () => {
  if (SERVER_ENV === "test") {
    return {
      NEXT_PUBLIC_ENV: "test",
      buildTime: new Date().toLocaleString(),
      NEXT_PUBLIC_THE_CKB_LINK: "https://20240301-client-seo-s.theckb.com",
      NEXT_PUBLIC_THE_CKB_API_URL: "https://master-gateway.theckb.com",
    };
  } else if (SERVER_ENV === "prod") {
    return {
      NEXT_PUBLIC_ENV: "prod",
      buildTime: new Date().toLocaleString(),
      NEXT_PUBLIC_THE_CKB_LINK: "https://s.theckb.com",
      NEXT_PUBLIC_THE_CKB_API_URL: "https://gateway-prod.theckb.com",
    };
  } else {
    return {
      NEXT_PUBLIC_ENV: "prod",
      buildTime: new Date().toLocaleString(),
      NEXT_PUBLIC_THE_CKB_LINK: "https://s.theckb.com",
      NEXT_PUBLIC_THE_CKB_API_URL: "https://gateway-prod.theckb.com",
    };
  }
};

const env = getEnv();
console.log(`启动时间：${new Date().toLocaleString()},启动环境:${SERVER_ENV}`);
const nextConfig = {
  compress: true,
  env: {
    ...env,
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
