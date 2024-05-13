/*
 * @Author: shiguang
 * @Date: 2024-03-21 16:38:31
 * @LastEditors: shiguang
 * @LastEditTime: 2024-05-09 17:37:20
 * @Description: 
 */
import { Provider } from 'jotai'

export default function Providers({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return children
  // return (
  //   <Provider>
  //     {children}
  //   </Provider>
  // )
}



