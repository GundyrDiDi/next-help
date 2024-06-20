/*
 * @Author: shiguang
 * @Date: 2024-06-20 12:05:38
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-20 12:24:47
 * @Description: 
 */
export const handleLoginPrice = (isLogin: boolean, _price: string) => {
  const price = String(_price ?? '');
  if(isLogin) return price;
  if(price?.length === 1 || !price) return '*';
  const tempArr = Array(price.length).fill('*');
  tempArr[0] = price[0];
  return tempArr.join('');
}