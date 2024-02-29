
import { useEffect, useRef, useState } from 'react';
import { Badge, Button, Divider, Dropdown, Popover, message } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import { atom, useAtom } from 'jotai';
import dayjs from 'dayjs';
import { atomRequestCustomerDetail } from '@/components/CKBLayout/index';
import IconVIPLogo from '@/components/Icon/IconVIPLogo';
import IconHeadSculpture from '@/components/Icon/IconHeadSculpture';
import { request } from '@/config/request';
import {
    BizResponseInt,
    CustomerDetailRespDTO,
    CustomerMembershipResDTO,
    CustomerShopRespDTO
} from '@/service/customer';
import { jumpPage } from '@/utils';
import { ENUM_PAGE, ENUM_SYSTEM_SOURCE } from '@/const/enum';
import { getShopId } from '@/config/request/interceptors';
import { getFloatExchange, getExchange } from '@/config/request/price';
import { Site, getCountryByNavigatorLang, siteMapAreaName } from '@/const';
import { useRate } from '@/hooks/useRate';
import KR_Flag from '@/assets/image/flag_KR_tab.png';
import JP_Flag from '@/assets/image/flag_JP_tab.png';
import UserDropDwon from './components/UserDropDwon';
import ShopList from './components/ShopList';
import MembershipLevel from './components/MembershipCenter';
import TogglePlat from './components/TogglePlat';
import './index.scss';
interface CustomerMembershipResDTO2 extends CustomerMembershipResDTO {
    templateLevel?: number;
}
interface MembershipTrialActivityComboReqDTOS {
    createTime?: string;
    freezeQuantity: number;
    id: string;
    lastQuantity: null;
    leavedQuantity: number;
    limitedQuantity: number;
    limitedQuantityStatus: number;
    membershipTemplatePriceId: string;
    membershipTemplatePriceName: null;
    membershipTrialActivityId: string;
    price: number;
    quantity: number;
    status: number;
    templateDesc: string;
    trialDiscount: number;
    updateTime: string;
    usedQuantity: number;
}
interface NewMemberActivityDTOS {
    membershipTrialActivityComboReqDTOS: MembershipTrialActivityComboReqDTOS[];
    id?: string;
}
const myShopIcon = {
    1: 'https://static-s.theckb.com/BusinessMarket/OEM/shopIcon_base.png',
    4: 'https://static-s.theckb.com/BusinessMarket/OEM/shopIcon_amazon.png',
    2: 'https://static-s.theckb.com/BusinessMarket/OEM/shopIcon_shopify.png',
    0: 'https://static-s.theckb.com/BusinessMarket/OEM/shopIcon_ckb.png'
};
const menuCommonStyle =
    'flex items-center ml-[32px] hover:text-[color:--color-primary-light] cursor-pointer';
function formatTimeZone(time: any, offset: any) {
    // 创建一个Date对象 time时间 offset 时区  中国为  8
    const d = new Date(time);
    const localTime = d.getTime();
    // 获得当地时间偏移的毫秒数
    const localOffset = d.getTimezoneOffset() * 60000;
    // utc即GMT时间
    const utc = localTime + localOffset;
    const wishTime = utc + 3600000 * offset;
    return new Date(wishTime);
}
const CKBHeader = () => {
    const timerRef = useRef<{
        timer: NodeJS.Timer;
    }>({
        timer: null as unknown as NodeJS.Timer
    });
    const [date, setDate] = useState<string>();
    const [customerDetail] = useAtom(atomRequestCustomerDetail);
    const stationCode =
        customerDetail?.stationCode || getCountryByNavigatorLang();
    const [isShowShopList, setIsShowShopList] = useState(false);
    const [messageNum, setMessageNum] = useState<number>();
    const [cartNum, setCartNum] = useState<number>();
    const [newMemberActivity, setNewMemberActivity] = useState();
    const [flagImage, setFlagImage] = useState<string>();
    const [site, setSite] = useState<string>();
    const [rateValue, setRate] = useState<any>();
    const membership = customerDetail?.membership;
    const systemSource = customerDetail?.systemSource;
    // 获取消息未读数量
    const getPrivateUnreadCount = async () => {
        const res = await request.customer.notify.getPrivateUnreadCount();
        setMessageNum(res.data);
    };
    useEffect(() => {
        getPrivateUnreadCount();
    }, []);
    useEffect(() => {
        setSite(customerDetail?.site);
        const z = customerDetail?.utcTimeZone
            ? Number(customerDetail?.utcTimeZone?.replace('UTC', ''))
            : 0 - new Date().getTimezoneOffset() / 60;
        const timer = timerRef.current.timer;
        clearInterval(+timer);
        timerRef.current.timer = setInterval(() => {
            const date = dayjs(
                `${formatTimeZone(dayjs(new Date()), z)}`
            ).format('YYYY/MM/DD HH:mm:ss');
            setDate(date);
        }, 1000);
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
            systemSource === ENUM_SYSTEM_SOURCE.D2C ? '/d2c/' : '/b2b/';
        window.location.replace(window.location.origin + plat + 'index/pure');
    };
    useEffect(() => {
        getCurrentCartList();
    }, []);
    const getRate = (rate: number) => {
        if (!customerDetail?.isEN) {
            return Math.floor(rate * 100) / 100;
        }
        return rate ? parseFloat(rate.toFixed(4)) : rate;
    };
    // 首选取用户的时区 没有取浏览器时间
    const currentTimeZone =
        customerDetail?.utcTimeZone?.split('+')?.[1] ||
        0 - new Date().getTimezoneOffset() / 60;
    const timeRange = !customerDetail?.isEN
        ? siteMapAreaName.get(stationCode)
        : (siteMapAreaName?.get(stationCode) ?? '') + '+' + currentTimeZone;

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
            <div className="wrap of-hd">
                <div className="auto-width flex justify-between">
                    <div
                        className="logo flex items-center cursor-pointer"
                        onClick={() => linkToPure()}
                    >
                        <img
                            src="https://static-s.theckb.com/BusinessMarket/OEM/logo.svg"
                            alt=""
                        />
                        <span
                            style={{
                                fontWeight: 600,
                                fontSize: 12
                            }}
                        >
                            {window._$m.t('更简单 更透明')}
                        </span>
                    </div>
                    <div className="pl-10 flex items-center">
                        {stationCode === Site.JP && (
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
                                            jumpPage(ENUM_PAGE.MY_PROMOTION);
                                        }}
                                    >
                                        {window._$m.t('推广联盟')}
                                    </div>
                                </div>
                            </div>
                        )}
                        <div className={menuCommonStyle}>
                            <div>
                                <MembershipLevel
                                    membership={membership}
                                    newMemberActivity={newMemberActivity}
                                />
                            </div>
                        </div>
                        <div className={menuCommonStyle}>
                            <i className="iconfont icon-gongzuotai text-[12px] pr-[2px]" />
                            <div
                                className="ml-[2px]"
                                onClick={() => {
                                    jumpPage(ENUM_PAGE.WORKER_SPACE);
                                }}
                            >
                                {window._$m.t('工作台')}
                            </div>
                        </div>
                        <div className={menuCommonStyle}>
                            <i className="iconfont icon-gouwuche text-[14px] pr-[2px]" />
                            <Badge
                                count={cartNum}
                                size="small"
                                className="cart-count"
                            >
                                <div
                                    className="hover:text-[color:--color-primary-light] mr-[16px] text-[--color-white]"
                                    onClick={() => {
                                        jumpPage(ENUM_PAGE.SHOP_CART);
                                    }}
                                >
                                    <span>{window._$m.t('购物车')}</span>
                                </div>
                            </Badge>
                        </div>
                        <UserDropDwon customerDetail={customerDetail}>
                            <div className={menuCommonStyle}>
                                <div className="top-[-1px] relative pr-[2px]">
                                    <div
                                        style={{
                                            borderRadius: '50%'
                                        }}
                                        className="rounded-full border-[1px] border-[color:white]"
                                    >
                                        <IconHeadSculpture
                                            width={20}
                                            height={20}
                                        />
                                    </div>
                                </div>
                                <div>{customerDetail?.loginName}</div>
                                <CaretDownOutlined className="relative top-[2px] ml-[8px]" />
                            </div>
                        </UserDropDwon>
                        <div className={menuCommonStyle}>
                            <ShopList
                                isShowShopList={isShowShopList}
                                setIsShowShopList={setIsShowShopList}
                            >
                                <div>
                                    {customerDetail?.customerShopList
                                        ?.length ? (
                                        <div
                                            className="flex items-center"
                                            onClick={() =>
                                                setIsShowShopList(true)
                                            }
                                        >
                                            <img
                                                referrerPolicy="no-referrer"
                                                src={
                                                    myShopIcon[
                                                        customerDetail
                                                            ?.customerShopList[0]
                                                            ?.shopPlatform || 1
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
                                                        (e) =>
                                                            e.customerShopId ===
                                                            getShopId()
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
                                marginRight: 20
                            }}
                        >
                            <i className="iconfont icon-xiaoxi text-[14px] pr-[2px]" />
                            <Badge
                                count={messageNum}
                                size="small"
                                className="cart-count"
                            >
                                <div
                                    className="hover:text-[color:--color-primary-light] mr-[16px] text-[--color-white]"
                                    onClick={() => {
                                        jumpPage(ENUM_PAGE.INFORMATION);
                                    }}
                                >
                                    <span>{window._$m.t('消息')}</span>
                                </div>
                            </Badge>
                        </div>
                        <a
                            className="flex items-center ml-[32px] hover:text-[color:--color-primary-light] cursor-pointer bg-[#333] leading-[20px] pl-[16px] pr-[16px] rounded-[10px] text-[--color-white]"
                            href="http://www.murc-kawasesouba.jp/fx/index.php"
                            style={{
                                textDecoration: 'none'
                            }}
                            target="_blank"
                        >
                            <Popover
                                content={
                                    <div className="">
                                        <div
                                            style={{
                                                padding: '0 8px 0 8px'
                                            }}
                                        >{`${window._$m.t(
                                            '三菱UFJ銀行TTSレート：'
                                        )}${getRate(rate ?? 0)}`}</div>
                                        <div
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                padding: 8
                                            }}
                                        >
                                            <span>
                                                {`${window._$m.t(
                                                    'THE直行便の対応レート：'
                                                )}${getRate(
                                                    floatingRate ?? 0
                                                )}`}
                                            </span>
                                            {isShowCut() && (
                                                <img
                                                    src={`https://static-s.theckb.com/BusinessMarket/Client/fund/tag_FX_${site}.png`}
                                                    alt=""
                                                    height={18}
                                                    style={{
                                                        margin: '2px 0 0 2px'
                                                    }}
                                                />
                                            )}
                                        </div>
                                        <div>
                                            {`${timeRange} ${date}`}{' '}
                                        </div>
                                    </div>
                                }
                                style={{
                                    padding: 0
                                }}
                                overlayInnerStyle={{
                                    padding: 0
                                }}
                            >
                                <div
                                    style={{
                                        display: 'flex',
                                        alignContent: 'center'
                                    }}
                                >
                                    <div
                                        style={{
                                            display: 'flex',
                                            alignContent: 'center',
                                            flexWrap: 'wrap'
                                        }}
                                    >
                                        <img
                                            src={`https://static-s.theckb.com/BusinessMarket/Client/country/flag_${customerDetail?.nationCode}_tab.png`}
                                            alt=""
                                            width={20}
                                            height={14}
                                            style={{
                                                marginRight: 4
                                            }}
                                        />
                                    </div>
                                    <span>{`CNY1=${getCountryCurrency()}${getRate(
                                        floatingRate ?? 0
                                    )}`}</span>
                                </div>
                            </Popover>
                        </a>
                        <TogglePlat
                            systemSource={
                                systemSource || ENUM_SYSTEM_SOURCE.D2C
                            }
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CKBHeader;
