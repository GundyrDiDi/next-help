import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useBoolean, useToggle } from "ahooks";
import { Button, Dropdown, Form, Input, Radio, Popover, message } from "antd";
import { QuestionCircleFilled } from "@ant-design/icons";
import Modal from "antd/es/modal/Modal";
import ElCarousel from "@/components/ElCarousel";
import {
  BizResponseCustomerDetailRespDTO,
  BizResponseCustomerShopRespDTO,
  CustomerDetailRespDTO,
  CustomerShopRespDTO,
} from "@/service/customer";
import "./index.scss";
import { request } from "@/config/request";
import { togglePlat } from "@/config/request/interceptors";
import { Site } from "@/const";
import { useAtom } from "jotai";
import { CustomerDetail } from "@/model";
import { setCookieShopId } from "@/utils";
const myShopIcon: { [key: number]: string } = {
  1: "https://static-s.theckb.com/BusinessMarket/OEM/shopIcon_base.png",
  4: "https://static-s.theckb.com/BusinessMarket/OEM/shopIcon_amazon.png",
  2: "https://static-s.theckb.com/BusinessMarket/OEM/shopIcon_shopify.png",
  0: "https://static-s.theckb.com/BusinessMarket/OEM/shopIcon_ckb.png",
};
interface ShopListProps {
  children?: React.ReactNode;
  t: (key: string) => string;
}
const b2b = [
  "https://s.theckb.com/img/shopGuide1-b.23f952c0.jpg",
  "https://s.theckb.com/img/shopGuide2-b.ae442356.jpg",
];

const imgs = [...b2b];
const ShopList = ({ children, t }: ShopListProps) => {
  const [isOpen, action] = useBoolean(false);
  const [isCreateShopTipOpen, createShopTipOpen] = useBoolean(false);
  const [userInfo, getCustomerDetail] = useAtom(CustomerDetail);
  const stationCode = userInfo?.stationCode;
  const [customerShopList, setCustomerShopList] =
    useState<CustomerShopRespDTO>();
  const [shopPlatform, setShopPlatform] = useState(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [createShopForm] = Form.useForm();

  useEffect(() => {
    if (userInfo?.customerId && userInfo?.accountType === 2) {
      togglePlat(userInfo?.systemSource as number);
    }
  }, [userInfo?.accountType, userInfo?.customerId, userInfo?.systemSource]);
  const shopListMenu = (customerDetail?: CustomerDetailRespDTO) => {
    const arr = customerDetail?.customerShopList?.map((item, index) => {
      return {
        key: Number(item?.customerShopId),
        style: {
          padding: 0,
        },
        label: (
          <div
            className="leading-[34px] px-[20px] flex items-center"
            onClick={() => {
              window.localStorage.setItem(
                "production_route/curShop",
                String(item.customerShopId)
              );
              window.location.reload();
            }}
          >
            <img
              referrerPolicy="no-referrer"
              src={myShopIcon[item?.shopPlatform || 0]}
              className="mr-[5px]"
              alt=""
              width={20}
              height={20}
            />
            <span className="font-[500]">{item?.customerShopName}</span>
          </div>
        ),
      };
    });
    arr?.push({
      key: 111,
      style: {
        padding: 0,
      },
      label: (
        <div
          onClick={() => {
            action.setTrue();
            createShopForm.resetFields();
          }}
          className="leading-[34px] px-[20px] hover:underline text-[color:--color-primary] hover:bg-[color:--color-white] text-center font-[500]"
        >
          {t("快速创建")}
        </div>
      ),
    });
    return arr;
  };
  const shopOption = () => {
    let options = [
      {
        label: "Base",
        value: 1,
        source: "d2c",
      },
      {
        label: "Shopify",
        value: 2,
        source: "d2c",
      },
      {
        label: "Amazon",
        value: 4,
        source: "b2b",
      },
      {
        label: t("其他"),
        value: 0,
      },
    ];
    if (stationCode === Site.KO) {
      options = [
        {
          label: t("其他"),
          value: 0,
        },
      ];
    }
    if (stationCode === Site.EN) {
      options = [
        {
          label: "Shopify",
          value: 2,
          source: "d2c",
        },
        {
          label: t("其他"),
          value: 0,
        },
      ];
    }
    return (
      <div className="shopOption-radio flex items-center">
        {options.map((item, index) => {
          return (
            <div
              className={[
                "radio-item-guide",
                shopPlatform === item.value ? "radio-item-active" : null,
              ].join(" ")}
              key={index}
              onClick={() => {
                setShopPlatform(item.value);
                setCookieShopId(String(item.value));
              }}
            >
              {shopPlatform === item.value ? (
                <img
                  src="https://static-s.theckb.com/BusinessMarket/OEM/radio-check-d2c.png"
                  alt=""
                  width={22}
                />
              ) : null}
              <span>{item.label}</span>
            </div>
          );
        })}
      </div>
    );
  };
  const closeCreateShop = () => {
    createShopForm.resetFields();
    action.setFalse();
  };
  const createShopSubmit = async () => {
    const formParams = createShopForm.getFieldsValue();
    try {
      setLoading(true);
      const res = await request.customer.customer.shopAdd({
        ...formParams,
        customerShopPlatform: shopPlatform,
      });
      message.success(t("创建成功"));
      getCustomerDetail();
      action.setFalse();
      createShopForm.resetFields();
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Modal
        className="w-[1200px] h-[675px]"
        open={isCreateShopTipOpen}
        onCancel={createShopTipOpen.setFalse}
        onOk={createShopTipOpen.setTrue}
        wrapClassName="p-0 m-0"
        width={1200}
        mask={false}
        styles={{
          body: {
            padding: 0,
            margin: 0,
            marginBottom: -40,
          },
        }}
        footer={null}
      >
        <div className="relative left-[-24px] top-[-20px] w-[1200px] rounded-[4px] h-[675px]">
          <ElCarousel dots={false} slidesToShow={1}>
            {imgs.map((item) => (
              <div
                className="h-[675px]"
                key={item}
                style={{
                  backgroundImage: `url(${item})`,
                  backgroundSize: "contain",
                }}
              />
            ))}
          </ElCarousel>
        </div>
      </Modal>
      <Modal
        open={isOpen}
        onCancel={action.setFalse}
        width={880}
        footer={null}
        wrapClassName="createShopModal"
      >
        <div className="my-[16px] mx-[6px]">
          <div className="flex text-[#333] text-[16px] font-[500] clear-both mb-[20px] items-center">
            <span>{t("创建店铺")}</span>
            {userInfo?.stationCode === Site.JA && (
              <QuestionCircleFilled
                className="ml-[20px] mt-[-1px]"
                onClick={createShopTipOpen.setTrue}
              />
            )}
          </div>
          <Form
            layout="horizontal"
            className="mt-[20px] w-[700px] ml-[40px]"
            labelCol={{
              span: 5,
            }}
            wrapperCol={{
              span: 19,
            }}
            form={createShopForm}
            name="createShopForm"
            onFinish={createShopSubmit}
          >
            <Form.Item label={t("开店平台")}>{shopOption()}</Form.Item>
            {shopPlatform === 0 ? (
              <Form.Item
                label={t("平台名")}
                className="leading-[44px]"
                name="customerShopPlatName"
              >
                <Input
                  placeholder={t("请输入店铺所在的平台名称（选填）")}
                  size="large"
                  className="h-[44px]"
                />
              </Form.Item>
            ) : null}
            <Form.Item
              label={t("店铺/品牌名")}
              className="leading-[44px]"
              rules={[
                {
                  required: true,
                  message: t("请输入店铺或品牌名"),
                },
              ]}
              name="customerShopName"
            >
              <Input
                placeholder={t("请输入店铺或品牌名")}
                size="large"
                className="h-[44px]"
              />
            </Form.Item>
            <Form.Item
              label={t("店铺URL地址")}
              className="leading-[44px]"
              name="customerShopUrl"
            >
              <Input
                placeholder={t("请输入店铺访问链接")}
                size="large"
                className="h-[44px]"
              />
            </Form.Item>
            {shopPlatform === 2 ? (
              <Form.Item
                label={t("访问令牌")}
                className="leading-[44px]"
                name="accessToken"
                tooltip="test02-s.theckb.com/d2c/help?tab=2&id=9"
              >
                <Input
                  placeholder={t("请填写正确的访问令牌")}
                  size="large"
                  className="h-[44px]"
                />
              </Form.Item>
            ) : null}
            <div className="flex justify-end">
              <Button className="mr-[20px]" onClick={() => closeCreateShop()}>
                {t("取消")}
              </Button>
              <Button type="primary" htmlType="submit" loading={loading}>
                {t("创建店铺")}
              </Button>
            </div>
          </Form>
        </div>
      </Modal>
      <Dropdown
        overlayStyle={{
          paddingLeft: 0,
          paddingRight: 0,
          width: 168,
          marginLeft: 100,
          maxHeight: 274,
          overflowX: "hidden",
          overflowY: "auto",
        }}
        trigger={["click"]}
        placement="bottom"
        arrow={false}
        menu={{
          className: "px-[0px] py-[0px]",
          style: {
            padding: "8px 0",
            marginTop: 8,
          },
          items: shopListMenu(userInfo),
        }}
        // eslint-disable-next-line react/no-children-prop
        children={children}
        destroyPopupOnHide
      />
    </>
  );
};
export default ShopList;
