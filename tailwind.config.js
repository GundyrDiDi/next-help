/*
 * @Author: shiguang
 * @Date: 2024-03-21 16:38:31
 * @LastEditors: shiguang
 * @LastEditTime: 2024-04-08 13:47:04
 * @Description: 
 */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    screens: {
      // 手机端
      'mo': {'max': '840px'},
      // pad 端
      'pad': {'min': '841px', 'max': '1200px'},
      // pc 端
      'pc': {'min': '1201px'},
    }
  },
  plugins: [],
}