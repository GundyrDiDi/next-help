/*
 * @Author: shiguang
 * @Date: 2024-04-08 11:47:09
 * @LastEditors: shiguang
 * @LastEditTime: 2024-04-11 14:31:10
 * @Description: 
 */
'use client'
import { isB2B } from "@/utils";
import { Button, Input, Space } from "antd"
import { t } from "i18next"

interface SearchProps {
  className?: string;
  value?: string;
  onChange?: (value?: string) => void;
  onSearch?: (value?: string) => void;
}
// https://static-s.theckb.com/BusinessMarket/helpCenter/image/help-bg-b2b.f7536f71.png
// https://static-s.theckb.com/BusinessMarket/helpCenter/image/help-bg.3398f88f.png

const Search = (props: SearchProps) => {
  const { value, onChange, onSearch } = props;
  return (
    <div
      className={`
      pc:w-[1200px] pc:h-[300px] pad:h-[300px] mo:h-[120px] bg-contain
      flex justify-center items-center ${props.className ?? ''} 
      ${ isB2B() ? `bg-[url('https://static-s.theckb.com/BusinessMarket/helpCenter/image/help-bg-b2b.f7536f71.png')]` : `bg-[url('https://page-client.theckb.com/client-prod/present/img/help-bg.3398f88f.png')]`}
      `}
    >
      <Space.Compact className="pc:w-[480px] pad:w-[480px] pc:h-[40px] pad:h-[40px] mo:w-[100%] mo:mx-[12px]">
        <Input 
          placeholder={t('输入FAQs关键词')} 
          className="mo:w-[100%]" 
          value={value}
          onChange={(e) => {
            onChange?.(e.target.value)
          }}
        />
          <Button
            type="primary"
            className="pc:!h-[40px] pad:!h-[40px] mo:!h-[36px] pc:!w-[80px] mo:!w-[60px]"
            onClick={() => {
              onSearch?.(value)
            }}
          >
            {t('搜索')}
          </Button>
      </Space.Compact>
    </div>
  )
}
export default Search