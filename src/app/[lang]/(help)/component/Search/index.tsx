/*
 * @Author: shiguang
 * @Date: 2024-04-08 11:47:09
 * @LastEditors: shiguang
 * @LastEditTime: 2024-04-12 11:27:51
 * @Description:
 */
"use client";
import { Plat } from "@/model";
import { ENUM_PLATE } from "@/model/Plat";
import { isB2B } from "@/utils";
import { Button, Input, Space } from "antd";
import { t } from "i18next";
import { useAtom } from "jotai";

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
  const [plat] = useAtom(Plat);
  return (
    <div
      className={`
      pc:w-[1200px] pc:h-[120px] pad:h-[120px] mo:h-[120px] bg-cover
      flex justify-center items-center ${
        props.className ?? ""
      } flex-col p-[32px]`}
    >
      <div className="text-[30px] font-bold mb-[16px]">{t("关键词搜索")}</div>
      <Space.Compact className="pc:w-[480px] pad:w-[480px] pc:h-[54px] pad:h-[54px] mo:w-[100%] mo:mx-[12px]">
        <Input
          placeholder={t("输入FAQs关键词")}
          style={{
            fontSize: "16px",
            fontWeight: "bold",
            color: "#00000040",
          }}
          value={value}
          onChange={(e) => {
            onChange?.(e.target.value);
          }}
        />
        <Button
          type="primary"
          className="pc:!h-[54px] pad:!h-[54px] mo:!h-[40px] pc:!w-[80px] mo:!w-[72px]"
          style={{
            fontSize: "18px",
            fontWeight: "bold",
          }}
          onClick={() => {
            onSearch?.(value);
          }}
        >
          {t("搜索")}
        </Button>
      </Space.Compact>
    </div>
  );
};
export default Search;
