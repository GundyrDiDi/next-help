/*
 * @Author: shiguang
 * @Date: 2024-03-21 16:38:31
 * @LastEditors: shiguang
 * @LastEditTime: 2024-04-08 11:43:16
 * @Description: 
 */
import { Provider } from 'jotai'

export default function Providers({ children }: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <Provider>
      {children}
    </Provider>
  )
}



