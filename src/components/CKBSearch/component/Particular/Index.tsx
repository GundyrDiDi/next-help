import classNames from "classnames";
import { isJA, lang } from "@/utils/language";
import { Button, Checkbox, Flex, Form, Input, Radio, Select } from "antd";
import FormItem from "antd/es/form/FormItem";
import { useTranslation } from "@/i18n/client";
import { useAtom } from "jotai";
import { cateListAtom } from "../SellerCate/Index";
import PriceRange, { PriceRangType } from "./PriceRange/Index";
import "./Index.scss";
import { useEffect, useMemo } from "react";
import { menu1Items, otherData, sortData } from "../../initData";
import { searchParamsAtom } from "../..";

export interface SearchParams {
  keyword?: string;
  sortType?: string;
  productCategoryFrontendId?: string;
  platformType?: string;
  sellPrice?: PriceRangType;
  other?: string[];
}

interface Props {
  keyword?: string;
  handleSearch: (params?: SearchParams) => void;
  handleJump: (params?: SearchParams) => void;
  setKeyword: (keyword: string) => void;
}

interface SortProps {
  label: string;
  value: string;
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
  const [seletParams, setSelectParams] = useAtom(searchParamsAtom);

  useEffect(() => {
    form.setFieldsValue(seletParams);
  }, [seletParams, form]);

  const sortTypes: SortProps[] = useMemo(() => {
    const list = sortData[seletParams.platformType] || [
      { label: "默认顺序", value: "" }, // 默认 update_time
      {
        label: "销量",
        value: "product_sell_quantity",
      },
      {
        label: "价格",
        value: "product_sell_price",
      },
    ];

    return list.map((i: SortProps) => {
      return {
        label: t(i.label),
        value: i.value,
      };
    });
  }, [seletParams.platformType, t]);

  const otherTypes: SortProps[] = useMemo(() => {
    const list = otherData[seletParams.platformType]?.map((i: SortProps) => {
      return {
        label: t(i.label),
        value: i.value,
      };
    });
    return list || [];
  }, [seletParams.platformType, t]);

  const onFinishSearch = () => {
    handleSearch(form.getFieldsValue());
  };

  const onFinishJump = () => {
    handleJump(form.getFieldsValue());
  };

  return (
    <div className={classNames("Particular-content", lang)}>
      <Form
        colon={false}
        form={form}
        onReset={() => {
          setKeyword("");
        }}
      >
        <div className="flex">
          <FormItem
            className="w-[45%]"
            label={t("搜索范围")}
            name="platformType"
          >
            <Select
              options={menu1Items.map((i) => {
                return { label: t(i.label), value: i.key };
              })}
              className="plat"
              // value={seletParams.platformType}
              onChange={(e) => {
                setSelectParams({ ...seletParams, platformType: e });
              }}
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
              onChange={(e) => {
                setSelectParams({
                  ...seletParams,
                  productCategoryFrontendId: e,
                  productCategoryFrontendIdNameZh: categoryList.find(
                    (i) => i.productCategoryFrontendId === e
                  )?.label,
                });
              }}
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
          <Radio.Group
            options={sortTypes}
            optionType="button"
            buttonStyle="solid"
          ></Radio.Group>
        </FormItem>
        <FormItem label={t("价格区间")} name="sellPrice">
          <PriceRange />
        </FormItem>
        {!!seletParams.platformType && (
          <FormItem label={t("其他条件")} name="other">
            <Checkbox.Group options={otherTypes}></Checkbox.Group>
          </FormItem>
        )}
        <Flex gap="small" wrap="wrap" justify="flex-end">
          <Button
            onClick={onFinishSearch}
            type="primary"
            className="search-btn"
          >
            <div className="flex items-center">
              <img
                src="https://static-s.theckb.com/BusinessMarket/Client/kaerumedia/search.png"
                alt=""
              />
              {t("站内搜索")}
            </div>
          </Button>
          <Button onClick={onFinishJump} type="primary" className="search-btn">
            <div className="flex items-center">
              <img
                src="https://static-s.theckb.com/BusinessMarket/Client/kaerumedia/sqire.png"
                alt=""
              />
              {t("外部搜索")}
            </div>
          </Button>
          <Button htmlType="reset" type="text">
            {t("重置条件")}
          </Button>
        </Flex>
      </Form>
    </div>
  );
};

export default Particular;
