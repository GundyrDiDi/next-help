/*
 * @Author: shiguang
 * @Date: 2024-06-20 12:05:38
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-20 20:41:14
 * @Description: 
 */
export const handleLoginPrice = (isLogin: boolean, _price: string) => {
  const price = String(_price ?? '');
  if(isLogin) return price;
  if(!price) return '*';
  const [curPrice] = price.split('.')
  if(curPrice?.length === 1) return '*';
  const tempArr = Array(curPrice.length).fill('*');
  tempArr[0] = curPrice[0];
  const str = tempArr.join('');
  // TODO 0 元
  return str;
}