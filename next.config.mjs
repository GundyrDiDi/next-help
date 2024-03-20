/** @type {import('next').NextConfig} */
const { SERVER_ENV } = process.env;
import Analyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = Analyzer({
  enabled: false,
});

const nextConfig = {
  compress: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: "@svgr/webpack",
    });
    return config;
  },
};

export default withBundleAnalyzer(nextConfig);
