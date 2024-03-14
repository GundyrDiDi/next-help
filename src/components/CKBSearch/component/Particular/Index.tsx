import classNames from "classnames";
import { isJA, lang } from "@/utils/language";
import { Button, Flex, Form, Input, Radio, Select } from "antd";
import FormItem from "antd/es/form/FormItem";
import { useTranslation } from "@/i18n/client";
import { useAtom } from "jotai";
import { cateListAtom } from "../SellerCate/Index";
import PriceRange from "./PriceRange/Index";
import "./Index.scss";

interface Props {
  keyword?: string;
  handleSearch: () => void;
  handleJump: () => void;
  setKeyword: (keyword: string) => void;
}
const Particular = ({
  keyword,
  setKeyword,
  handleSearch,
  handleJump,
}: Props) => {
  const { t } = useTranslation();
  const [categoryList] = useAtom(cateListAtom);
  const [form] = Form.useForm();

  const menu1Items = [
    { label: t("采购来源"), key: "" },
    { label: "1688", key: "AM" },
    { label: t("淘宝"), key: "TB" },
    { label: "Tmall", key: "TM" },
  ];

  const sortTypes = [
    { label: t("默认顺序"), bothway: false, name: "", showInImageSearch: true }, // 默认 update_time
    {
      label: t("销量"),
      bothway: false,
      name: "product_sell_quantity",
      showInImageSearch: false,
    },
    {
      label: t("价格"),
      bothway: true,
      name: "product_sell_price",
      showInImageSearch: false,
    },
  ];

  const onFinish = (val: any) => {
    console.log(val);
  };

  return (
    <div className={classNames("content", lang)}>
      <Form colon={false} form={form} onFinish={onFinish}>
        <div className="flex">
          <FormItem
            className="w-[45%]"
            label={t("搜索范围")}
            name="platformType"
          >
            <Select
              options={menu1Items.map((i) => {
                return { ...i, value: i.key };
              })}
              className="plat"
            />
          </FormItem>
          <FormItem
            className="w-[45%] ml-[10px]"
            label={t("类目")}
            name="productCategoryFrontendId"
          >
            <Select
              options={categoryList.map((i) => {
                return { ...i, value: i.productCategoryFrontendId };
              })}
              className="second"
            />
          </FormItem>
        </div>

        <FormItem label={t("搜索关键词")} name="keyword">
          <Input
            className="keyword"
            maxLength={100}
            value={keyword}
            onChange={(e) => {
              setKeyword(e.target.value);
            }}
          />
        </FormItem>
        <FormItem label={t("排序")} name="sortType">
          <Radio.Group optionType="button" buttonStyle="solid">
            {sortTypes.map((i) => {
              return (
                <Radio.Button key={i.name} value={i.name}>
                  {i.label}
                </Radio.Button>
              );
            })}
          </Radio.Group>
        </FormItem>
        <FormItem label={t("价格区间")} name="sellPrice">
          <PriceRange />
        </FormItem>
          <Flex gap="small" wrap="wrap"  justify="flex-end" >
            <Button htmlType="submit" type="primary" className="search-btn">
              <img
                src="https://static-s.theckb.com/BusinessMarket/Client/kaerumedia/search.png"
                alt=""
              />
              {t("站内搜索")}
            </Button>
            <Button type="primary" className="search-btn">
              <img
                src="https://static-s.theckb.com/BusinessMarket/Client/kaerumedia/sqire.png"
                alt=""
              />
              {t("外部搜索")}
            </Button>
            <Button type="text">{t("重置条件")}</Button>
          </Flex>
      </Form>
    </div>
  );
};

export default Particular;
