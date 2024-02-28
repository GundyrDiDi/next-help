/** @type {import('next').NextConfig} */
const { SERVER_ENV } = process.env;

const nextConfig = {
   // 是否在head中增加Nextjs信息
  poweredByHeader: SERVER_ENV !== "production",
  i18n: {
    locales: ['ja', 'en', 'ko'],
    defaultLocale: 'ja',
  },
};

export default nextConfig;
