/*
 * @Author: shiguang
 * @Date: 2024-04-08 11:47:09
 * @LastEditors: shiguang
 * @LastEditTime: 2024-04-08 20:45:41
 * @Description: 
 */
'use client'
import { Button, Input, Space } from "antd"
import { t } from "i18next"

interface SearchProps{
  className?: string;
}

const Search = (props: SearchProps) => {
  return (
    <div className={`pc:w-[1200px] pc:h-[300px] flex justify-center items-center bg-yellow-200 ${props.className ?? ''}`} >
       <Space.Compact className="pc:w-[480px] pc:h-[40px]">
        <Input placeholder={t('输入FAQs关键词')}/>
        <Button type="primary" className="pc:!h-[40px] mo:!h-[36px] pc:!w-[80px] mo:!w-[60px] " >{t('搜索')}</Button>
       </Space.Compact>
    </div>
  )
}
export default Search