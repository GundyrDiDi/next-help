
import { useEffect, useRef, useState } from 'react';
import { Badge, Popover, Select, message } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import { Atom, useAtom } from 'jotai';
import dayjs from 'dayjs';
import classnames from 'classnames';
import { atomRequestCustomerDetail } from '@/components/CKBLayout/index';
import IconHeadSculpture from '@/components/Icon/IconHeadSculpture';
import { request } from '@/config/request';
import { CustomerMembershipResDTO } from '@/service/customer';
import { jumpPage } from '@/utils';
import { ENUM_PAGE, ENUM_SYSTEM_SOURCE } from '@/const/enum';
import { getShopId } from '@/config/request/interceptors';
import { getFloatExchange, getExchange } from '@/config/request/price';
import {
    Site,
    countryCurrency,
    getCountryByNavigatorLang,
    siteMapAreaName
} from '@/const';
import KR_Flag from '@/assets/image/flag_KR_tab.png';
import JP_Flag from '@/assets/image/flag_JP_tab.png';
import { getEnv } from '@/utils/index';
import Local from '@/model/Local';
import { Lang } from '@/i18n/init';
import UserDropDwon from './components/UserDropDwon';
import ShopList from './components/ShopList';
import MembershipLevel from './components/MembershipCenter';
import TogglePlat from './components/TogglePlat';
import styles from './index.scss';

// eslint-disable-next-line
import "./index.scss";
const { writeLocal, getLocal } = Local;
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
    const [_, setLocal] = useAtom(writeLocal);
    const [messageNum, setMessageNum] = useState<number>();
    const [cartNum, setCartNum] = useState<number>();
    const [newMemberActivity, setNewMemberActivity] = useState();
    const [rateValue, setRate] = useState<any>();
    const [customerDetail] = useAtom(atomRequestCustomerDetail);
    const [date, setDate] = useState(
        dayjs(`${formatTimeZone(dayjs(new Date()), 9)}`).format(
            'YYYY/MM/DD HH:mm:ss'
        )
    );
    const timerRef = useRef<{
        timer: NodeJS.Timer;
    }>({
        timer: null as unknown as NodeJS.Timer
    });
    const stationCode =
        customerDetail?.stationCode || getCountryByNavigatorLang();
    const membership = customerDetail?.membership;
    const systemSource = customerDetail?.systemSource;
    const getPrivateUnreadCount = async () => {
        const res = await request.customer.notify.getPrivateUnreadCount();
        let msg;
        if ((res.data || 0) <= 0) {
            msg = null;
        } else if ((res.data || 0) < 99) {
            msg = res.data;
        } else {
            msg = '99+';
        }
        setMessageNum(res.data);
    };
    useEffect(() => {
        getPrivateUnreadCount();
    }, []);
    /** 获取汇率 */
    useEffect(() => {
        const mainCustomerId = customerDetail?.mainCustomerId;
        // mainCustomerId
        // console.log(9999, customerDetail);
        if (mainCustomerId) {
            getFloatExchange({
                mainCustomerId
            }).then(({ data }) => {
                const _data = data?.data;
                // console.log(8888, );
                const value = {
                    rate: _data?.originalExchangeRate,
                    floatingRate: _data?.exchangeRate,
                    floatExchangeRate: _data?.floatExchangeRate
                };
                setRate(value);
                //   rate.value = res.data?.originalExchangeRate
                //   floatingRate.value = res.data?.exchangeRate
                //   floatExchangeRate.value = res.data?.floatExchangeRate
            });
        } else {
            getExchange({
                currencyCodeFrom: 'CNY',
                currencyCodeTo: 'JPY'
            }).then(({ data }) => {
                const _data = data?.data;
                const value = {
                    rate: _data?.exchangeRate,
                    floatingRate: Number(_data?.exchangeRate)
                    // floatExchangeRate: _data?.floatExchangeRate
                };

                setRate(value);
                // console.log(7777, data);
                //   rate.value = res.data?.exchangeRate
                //   floatingRate.value = Number(res.data?.exchangeRate) + 1
            });
        }
        // getFloatExchange();
    }, [customerDetail]);

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
        const stationCode = customerDetail?.stationCode || Site.JP;
        const pathPrefix = {
            [Site.JP]: '/ja',
            [Site.KR]: '/ko'
        }[stationCode];
        const plat =
            systemSource === ENUM_SYSTEM_SOURCE.D2C ? '/d2c/' : '/b2b/';
        window.location.replace(
            window.location.origin + pathPrefix + plat + 'index/pure'
        );
    };
    const getCurrentAreaTip = () => siteMapAreaName.get(stationCode);
    useEffect(() => {
        getCurrentCartList();
    }, []);
    useEffect(() => {
        const timer = timerRef.current.timer;
        timerRef.current.timer = setInterval(() => {
            const date = dayjs(
                `${formatTimeZone(dayjs(new Date()), 9)}`
            ).format('YYYY/MM/DD HH:mm:ss');
            setDate(date);
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, []);
    return (
        <div className={styles.CKBHeader}>
            {/* <div className={styles.selectLang}>
                {getEnv() === 'local' &&
             <Select
                defaultValue={getLocal()}
                style={{
                    width: 100,
                }}
                onChange={setLocal}
                options={[
                    {
                        label: '中文',
                        value: Lang.zh_CN,
                    },
                    {
                        label: '日本',
                        value: Lang.ja_JP,
                    },
                    {
                        label: '韩文',
                        value: Lang.ko_KR,
                    },
                ]}
             />
                }
             </div> */}
            <div className={styles.nav}>
                <div className={styles.timeWrapper}>
                    <div className={styles.logo} onClick={() => linkToPure()}>
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

                    <div className={styles.timer}>
                        {getCurrentAreaTip()} {date}
                    </div>
                </div>
                <div className={styles.flex}>
                    {stationCode === Site.JP && (
                        <div
                            className={classnames(
                                styles.promotion,
                                styles.item
                            )}
                        >
                            <div
                                style={{
                                    width: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: 4
                                }}
                            >
                                <img
                                    src="https://static-s.theckb.com/BusinessMarket/OEM/new_tag.png"
                                    alt=""
                                    width={33}
                                    height={14}
                                />
                                <img
                                    src="https://static-s.theckb.com/BusinessMarket/OEM/promotion.png"
                                    alt=""
                                    width={24}
                                    height={24}
                                />
                                {/* <i
                                 className={classnames(
                                 'iconfont',
                                 'icon-tuiguang',
                                 styles.promotionIcon
                                 )}
                                 /> */}
                            </div>
                            <div
                                className={styles.itemText}
                                onClick={() => {
                                    const org = window.location.origin;
                                    window.location.href = org.concat(
                                        ENUM_PAGE.MY_PROMOTION
                                    );
                                }}
                            >
                                {window._$m.t('推广联盟')}
                            </div>
                        </div>
                    )}
                    <div className={classnames(styles.item)}>
                        <MembershipLevel
                            membership={membership}
                            newMemberActivity={newMemberActivity}
                        />
                    </div>
                    <div className={classnames(styles.item)}>
                        {/* <i className={classnames('iconfont', 'icon-gongzuotai', styles.icon)} /> */}
                        <img
                            className={classnames(styles.icon)}
                            src="https://static-s.theckb.com/BusinessMarket/OEM/mypage.png"
                            alt=""
                            width={28}
                            height={28}
                        />
                        <div
                            className={styles.itemText}
                            onClick={() => {
                                jumpPage(ENUM_PAGE.WORKER_SPACE);
                            }}
                        >
                            {window._$m.t('工作台')}
                        </div>
                    </div>
                    <div
                        className={classnames(styles.item)}
                        onClick={() => {
                            jumpPage(ENUM_PAGE.SHOP_CART);
                        }}
                    >
                        <img
                            style={{
                                marginBottom: 4
                            }}
                            src="https://static-s.theckb.com/BusinessMarket/OEM/shopCart.png"
                            alt=""
                            width={28}
                            height={28}
                        />
                        <div className={styles.itemText}>
                            {window._$m.t('购物车')}
                        </div>
                    </div>
                    <UserDropDwon customerDetail={customerDetail}>
                        <div className={classnames(styles.item)}>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginBottom: 4
                                }}
                            >
                                <img
                                    src="https://static-s.theckb.com/BusinessMarket/OEM/user_log_in.png"
                                    width={26}
                                    height={26}
                                    alt=""
                                />
                                <CaretDownOutlined className="relative top-[2px] ml-[8px]" />
                            </div>
                            {customerDetail && (
                                <div className={classnames(styles.itemText)}>
                                    {customerDetail?.loginName}
                                </div>
                            )}
                        </div>
                    </UserDropDwon>

                    <div className={menuCommonStyle}>
                        <ShopList>
                            <div>
                                {customerDetail?.customerShopList?.length && (
                                    <div className={styles.shop}>
                                        <div
                                            style={{
                                                marginBottom: 4,
                                                display: 'flex',
                                                alignItems: 'center'
                                            }}
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
                                                width={24}
                                            />
                                            <CaretDownOutlined
                                                className={styles.shopDown}
                                            />
                                        </div>
                                        <span
                                            className={classnames(
                                                styles.shopName,
                                                styles.itemText
                                            )}
                                        >
                                            {
                                                customerDetail?.customerShopList.find(
                                                    (e) =>
                                                        e.customerShopId ===
                                                        getShopId()
                                                )?.customerShopName
                                            }
                                        </span>
                                    </div>
                                )}
                            </div>
                        </ShopList>
                    </div>
                    <div
                        className={styles.item}
                        style={{
                            marginRight: 20
                        }}
                    >
                        <div className={styles.msg}>
                            {!!messageNum && (
                                <span className={styles.count}>
                                    {/* eslint-disable-next-line no-nested-ternary */}
                                    {messageNum}
                                </span>
                            )}
                            {/* <i
                                className={classnames('iconfont', 'icon-xiaoxi', styles.icon)}
                             /> */}
                            <img
                                src="https://static-s.theckb.com/BusinessMarket/OEM/msgTip.png"
                                alt=""
                                width={24}
                                height={24}
                            />
                        </div>
                        <div
                            className={styles.itemText}
                            onClick={() => {
                                jumpPage(ENUM_PAGE.INFORMATION);
                            }}
                        >
                            <span>{window._$m.t('消息')}</span>
                        </div>
                    </div>
                    <a target="_blank">
                        <Popover
                            content={
                                <div className="w-[280px] px-[16px] py-[8px]">
                                    <div>{`${window._$m.t(
                                        '三菱UFJ銀行TTSレート：'
                                    )}${rateValue?.rate}`}</div>
                                    <div>{`${window._$m.t(
                                        'THE直行便の対応レート：'
                                    )}${rateValue?.floatingRate}`}</div>
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
                                className={styles.item}
                                style={{
                                    paddingTop: 8
                                }}
                            >
                                <img
                                    src={
                                        stationCode !== Site.JP
                                            ? KR_Flag
                                            : JP_Flag
                                    }
                                    alt=""
                                    width={24}
                                    height={18}
                                    style={{
                                        marginBottom: 4
                                    }}
                                />
                                {/* 这里本来如果是英国站，应该是除以汇率，因为美元值钱
                                    但是现在没有英国站
                                 */}
                                <span
                                    className={styles.itemText}
                                >{`CNY1=${rateValue?.floatingRate}${countryCurrency.get(
                                    stationCode
                                )}`}</span>
                            </div>
                        </Popover>
                    </a>
                    <TogglePlat
                        systemSource={systemSource || ENUM_SYSTEM_SOURCE.D2C}
                    />
                    {/* <div className="toggle-plat flex justify-between items-center ml-[32px]" >
                            <div className="border-r-[1px] w-[40px] leading-[12px] border-[color:--color-primary]" >B2B</div>
                            <Divider className="toggle-plat-divider"/>
                            <div className="w-[40px] leading-[12px] text-[color:--color-primary] font-[600]">D2C</div>
                         </div> */}
                </div>
            </div>
        </div>
    );
};
export default CKBHeader;
