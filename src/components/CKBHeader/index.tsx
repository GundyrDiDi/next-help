import { useContext, useEffect, useRef, useState } from "react";
import { Badge, Popover, message } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import { useAtom, useStore } from "jotai";
import dayjs from "dayjs";
import { CustomerDetail, Lang, Plat } from "@/model";
import IconHeadSculpture from "@/components/Icon/IconHeadSculpture";
import { request } from "@/config/request";

import { formatTimeZone, getCookiePlat, isB2B, isLogin } from "@/utils";
import { ENUM_PAGE, ENUM_SYSTEM_SOURCE } from "@/const/enum";
import { getShopId } from "@/config/request/interceptors";
import { Site, siteMapAreaName, useSite2Code } from "@/const";
import { useRate } from "@/hooks/useRate";
import UserDropDwon from "./components/UserDropDwon";
import ShopList from "./components/ShopList";
import MembershipLevel from "./components/MembershipCenter";
import TogglePlat from "./components/TogglePlat";

import "./index.scss";
import { LocalContext, useTranslation } from "@/i18n/client";
import { myShopIcon } from "@/const/staticURL";
import platAtom from "@/model/Plat";
import { isJA, isJK, useSite2Station } from "@/utils/language";
import { toTheCkb } from "@/utils/router";

const menuCommonStyle =
  "flex items-center ml-[10px] hover:text-[color:--color-primary-light] cursor-pointer flex-row";

interface Props {
  plat?: string;
}

const CKBHeader = ({}: Props) => {
  const timerRef = useRef<{
    timer: NodeJS.Timer;
  }>({
    timer: null as unknown as NodeJS.Timer,
  });
  const [plat] = useAtom(Plat);
  const { t } = useTranslation();
  const stationCode = useSite2Station();
  const siteCode = useSite2Code();

  const [date, setDate] = useState<string>();
  const [customerDetail] = useAtom(CustomerDetail);
  const [isShowShopList, setIsShowShopList] = useState(false);
  const [messageNum, setMessageNum] = useState<number>();
  const [cartNum, setCartNum] = useState<number>();
  const [site, setSite] = useState<string>();
  const membership = customerDetail?.membership;

  const systemSource =
    plat === "d2c" ? ENUM_SYSTEM_SOURCE.D2C : ENUM_SYSTEM_SOURCE.B2B;
  // 获取消息未读数量
  const getPrivateUnreadCount = async () => {
    const res = await request.customer.notify.getPrivateUnreadCount();
    setMessageNum(res.data);
  };
  useEffect(() => {
    if (customerDetail?.customerId) {
      getPrivateUnreadCount();
      getCurrentCartList();
    }
  }, [customerDetail?.customerId]);
  useEffect(() => {
    const timer = timerRef.current.timer;
    if (customerDetail?.customerId) {
      setSite(customerDetail?.site);
    }
    let z: number = 0;
    if (isJK()) {
      z = 9;
    } else {
      z = customerDetail?.utcTimeZone
        ? Number(customerDetail?.utcTimeZone?.replace("UTC", ""))
        : 0 - new Date().getTimezoneOffset() / 60;
    }
    clearInterval(+timer);
    timerRef.current.timer = setInterval(() => {
      const date = dayjs(`${formatTimeZone(dayjs(new Date()), z)}`).format(
        "YYYY/MM/DD HH:mm:ss"
      );
      setDate(date);
    }, 1000);
    return () => clearInterval(+timer);
  }, [customerDetail]);

  const { rate, floatingRate, getCountryCurrency, floatExchangeRate } =
    useRate();
  // 获取购物车数量
  const getCurrentCartList = async () => {
    try {
      const res = await request.order.cart.getCurrentCartList();
      setCartNum(res.data?.cartSummary?.sumCartProductQuantity);
    } catch (error: any) {
      message.error(error);
    }
  };
  const linkToPure = () => {
    const plat =
      systemSource === ENUM_SYSTEM_SOURCE.D2C
        ? "/d2c/index/pure"
        : "/b2b/index/pure";
    toTheCkb(plat);
  };
  const getRate = (rate: number) => {
    if (!customerDetail?.isEN) {
      return Math.floor(rate * 100) / 100;
    }
    return rate ? parseFloat(rate.toFixed(4)) : rate;
  };
  // 首选取用户的时区 没有取浏览器时间
  const currentTimeZone =
    customerDetail?.utcTimeZone?.split("+")?.[1] ||
    0 - new Date().getTimezoneOffset() / 60;
  const timeRange = !customerDetail?.isEN
    ? siteMapAreaName.get(stationCode)
    : (siteMapAreaName?.get(stationCode) ?? "") + "+" + currentTimeZone;

  // 是否展示汇率折扣
  const isShowCut = () => {
    if (!floatExchangeRate) return false;
    if (customerDetail?.isJA) return floatExchangeRate < 1;
    if (customerDetail?.isKO) return floatExchangeRate < 10;
    // 英国站不展示
    return false;
  };

  return (
    <div className="CKBHeader">
      <div className="wrap of-hd viewport">
        <div className="auto-width flex justify-between">
          <div
            className="logo flex items-center cursor-pointer"
            onClick={() => linkToPure()}
          >
            <img
              className="h-[12px]"
              src="https://static-jp.theckb.com/static-asset/client/homelogo_w.png"
              alt=""
            />
          </div>
          <div className="pl-10 flex items-center">
            {stationCode === Site.JA && (
              <div className={menuCommonStyle}>
                <img
                  src="https://static-s.theckb.com/BusinessMarket/OEM/new_tag.png"
                  alt=""
                  width={33}
                  height={20}
                />
                <div className="flex items-center ml-[4px]">
                  <i className="iconfont icon-tuiguang text-[12px] pr-[2px] " />
                  <div
                    className="ml-[2px]"
                    onClick={() => {
                      toTheCkb(`/smc/promotion/Index?redirect=MyPromotion`);
                    }}
                  >
                    {t("推广联盟")}
                  </div>
                </div>
              </div>
            )}
            <div className={menuCommonStyle}>
              <div>
                <MembershipLevel t={t} membership={membership} />
              </div>
            </div>
            <div className={menuCommonStyle}>
              <i className="iconfont icon-gongzuotai text-[12px] pr-[2px]" />
              <div
                className="ml-[2px]"
                onClick={() => {
                  toTheCkb(`${ENUM_PAGE.WORKER_SPACE}`);
                }}
              >
                {t("工作台")}
              </div>
            </div>
            {isLogin() && (
              <div className={menuCommonStyle}>
                <i className="iconfont icon-gouwuche text-[14px] pr-[2px]" />
                <Badge count={cartNum} size="small" className="cart-count">
                  <div
                    className="hover:text-[color:--color-primary-light] mr-[16px] text-[--color-white]"
                    onClick={() => {
                      toTheCkb(`${ENUM_PAGE.SHOP_CART}`);
                    }}
                  >
                    <span>{t("购物车")}</span>
                  </div>
                </Badge>
              </div>
            )}
            {isLogin() ? (
              <UserDropDwon customerDetail={customerDetail}>
                <div className={menuCommonStyle}>
                  <div className="top-[-1px] relative pr-[2px]">
                    <div
                      style={{
                        borderRadius: "50%",
                      }}
                      className="rounded-full border-[1px] border-[color:white]"
                    >
                      <IconHeadSculpture width={20} height={20} />
                    </div>
                  </div>
                  <div>{customerDetail?.loginName}</div>
                  <CaretDownOutlined className="relative top-[2px] ml-[8px]" />
                </div>
              </UserDropDwon>
            ) : (
              <div className="flex ml-[16px] items-center">
                <img
                  src={
                    isJA()
                      ? "https://static-jp.theckb.com/static-asset/client/ckbuser.png?t=2024"
                      : "https://static-s.theckb.com/BusinessMarket/Client/ckbuser.png?t=2024"
                  }
                  className="w-[16px] h-[16px] rounded-[50%] mr-[4px]"
                  alt=""
                />
                <a
                  className="light hover:text-[color:--color-primary-light] cursor-pointer"
                  onClick={() => {
                    toTheCkb(`${ENUM_PAGE.LOGIN}`, false);
                  }}
                >
                  {t("请登录")}
                </a>
                /
                <a
                  className="light hover:text-[color:--color-primary-light] cursor-pointer"
                  onClick={() => {
                    toTheCkb(`${ENUM_PAGE.REGISTER}`, false);
                  }}
                >
                  {t("免费注册")}
                </a>
              </div>
            )}
            <div className={menuCommonStyle}>
              <ShopList
                t={t}
                isShowShopList={isShowShopList}
                setIsShowShopList={setIsShowShopList}
              >
                <div>
                  {customerDetail?.customerShopList?.length ? (
                    <div
                      className="flex items-center"
                      onClick={() => setIsShowShopList(true)}
                    >
                      <img
                        referrerPolicy="no-referrer"
                        src={
                          myShopIcon[
                            customerDetail?.customerShopList[0]?.shopPlatform ||
                              1
                          ]
                        }
                        className="mr-[5px] rounded-full"
                        alt=""
                        width={16}
                        height={16}
                      />
                      <span>
                        {
                          customerDetail?.customerShopList.find(
                            (e) => e.customerShopId === getShopId()
                          )?.customerShopName
                        }
                      </span>
                    </div>
                  ) : null}
                </div>
              </ShopList>
            </div>
            <div
              className={menuCommonStyle}
              style={{
                marginRight: 20,
              }}
            >
              <i className="iconfont icon-xiaoxi text-[14px] pr-[2px]" />
              <Badge count={messageNum} size="small" className="cart-count">
                <div
                  className="hover:text-[color:--color-primary-light] mr-[16px] text-[--color-white]"
                  onClick={() => {
                    toTheCkb(`${ENUM_PAGE.INFORMATION}`);
                  }}
                >
                  <span>{t("消息")}</span>
                </div>
              </Badge>
            </div>
            <a
              className="flex items-center ml-[32px] hover:text-[color:--color-primary-light] cursor-pointer bg-[#333] leading-[20px] pl-[16px] pr-[16px] rounded-[10px] text-[--color-white]"
              href="http://www.murc-kawasesouba.jp/fx/index.php"
              style={{
                textDecoration: "none",
              }}
              target="_blank"
            >
              <Popover
                content={
                  <div>
                    <div
                      style={{
                        padding: "0 8px 0 8px",
                      }}
                    >{`${t("三菱UFJ银行TTS汇率：")}${getRate(rate ?? 0)}`}</div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: 8,
                      }}
                    >
                      <span>
                        {`${t("THE CKB的对应汇率：")}${getRate(
                          floatingRate ?? 0
                        )}`}
                      </span>
                      {isShowCut() && (
                        <img
                          src={`https://static-s.theckb.com/BusinessMarket/Client/fund/tag_FX_${site}.png`}
                          alt=""
                          height={18}
                          style={{
                            margin: "2px 0 0 2px",
                          }}
                        />
                      )}
                    </div>
                    <div className="px-[8px] h-[28px] leading-[28px] bg-[#f5f5f5] text-[#333] text-[12px]">
                      {`${timeRange} ${date}`}
                    </div>
                  </div>
                }
                style={{
                  padding: 0,
                }}
                overlayInnerStyle={{
                  padding: 0,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignContent: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignContent: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <img
                      src={`https://static-s.theckb.com/BusinessMarket/Client/country/flag_${siteCode}_tab.png`}
                      alt=""
                      width={20}
                      height={14}
                      style={{
                        marginRight: 4,
                      }}
                    />
                  </div>
                  <span>{`CNY1=${getCountryCurrency(stationCode)}${getRate(
                    floatingRate ?? 0
                  )}`}</span>
                </div>
              </Popover>
            </a>
            {customerDetail?.accountType !== 2 && (
              <TogglePlat systemSource={systemSource} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CKBHeader;
