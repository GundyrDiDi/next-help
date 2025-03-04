import { useState, useEffect, useRef, Dispatch, SetStateAction } from 'react';
import { atom, useAtom } from 'jotai';
import { atomCustomerDetail } from '@/model/CustomerDetail';
import { siteMapMonetaryUnit, Site, countryCurrency } from '@/const';
import { request } from '@/config/request';
import { CustomerDetailRespDTO } from '@/service/customer';
import { useSite2Station } from '@/utils/language';

interface Props {
    customerDetail?: CustomerDetailRespDTO;
    setRate:  Dispatch<SetStateAction<number | undefined>>
    setFloatingRate: (val: number) => void;
    setFloatExchangeRate: (val: number) => void;
    stationCode:Site
}

const reqRate = (
    {
        customerDetail,
        setRate,
        setFloatingRate,
        setFloatExchangeRate,
        stationCode
    }:Props
) => {
    const mainCustomerId = customerDetail?.mainCustomerId;
    if (mainCustomerId) {
      request.settlement.exchangeRate.cnyToJpyExchangeRateAfterConfigFloat({
            mainCustomerId
        }).then((res) => {
            // 英国站 美元比人民币高,后端给的7.14  1￥=7.14$
            // 后端的汇率逻辑 7.14￥=1$   1￥=200韩元  1￥ = 20日元
            // 前端金额的计算统一是乘法 人民币*汇率得到对应国家的金额  所以英国要做除法
            if (stationCode === Site.EN) {
                setRate(1 / Number(res.data?.originalExchangeRate));
                setFloatingRate(1 / Number(res.data?.exchangeRate));
                setFloatExchangeRate(
                    1 / Number(res.data?.floatExchangeRate)
                );
            } else {
                setRate(res.data?.originalExchangeRate);
                setFloatingRate(Number(res.data?.exchangeRate));
                setFloatExchangeRate(Number(res.data?.floatExchangeRate));
            }
        });
    } else {
        request.settlement.exchangeRate.getOriginExchangeRate({
            stationCode
        }).then((res) => {
            // 英国站 美元比人民币高,后端给的7.14  1￥=7.14$
            // 后端的汇率逻辑 7.14￥=1$   1￥=200韩元  1￥ = 20日元
            // 前端金额的计算统一是乘法 人民币*汇率得到对应国家的金额  所以英国要做除法
            if (stationCode === Site.EN) {
                setRate(1 / (res.data?.originalExchangeRate??1));
                setFloatingRate(1 / Number(res.data?.exchangeRate));
                setFloatExchangeRate(
                    1 / Number(res.data?.floatExchangeRate)
                );
            } else {
                setRate(res.data?.originalExchangeRate);
                setFloatingRate(Number(res.data?.exchangeRate));
                setFloatExchangeRate(Number(res.data?.floatExchangeRate));
            }
        });
    }
};

export const useRate = () => {
    const stationCode=useSite2Station()
    const [customerDetail] = useAtom(atomCustomerDetail);
    const rateInternitalRef = useRef<any>(null);
    /** 源汇率(银行查出来的) */
    const [rate, setRate] = useState<number>();
    /**  源汇率 + 浮动汇率  */
    const [floatingRate, setFloatingRate] = useState<number>();
    /** 浮动汇率(我们配置的) */
    const [floatExchangeRate, setFloatExchangeRate] = useState<number>(1);
    useEffect(() => {
        reqRate({customerDetail, setRate, setFloatingRate, setFloatExchangeRate,stationCode});
        rateInternitalRef.current = setInterval(
            () => {
                reqRate(
                    {
                    customerDetail,
                    setRate,
                    setFloatingRate,
                    setFloatExchangeRate,
                    stationCode
                    }
                );
            },
            1000 * 60 * 30
        );

        return () => {
            if (rateInternitalRef.current) {
                clearInterval(rateInternitalRef.current);
            }
        };
    }, [customerDetail, stationCode]);

    const calc = (rmb: any) => {
        if (!floatingRate) return '***';
        if (floatingRate >= 1) {
            return formatMoney(Math.floor(parseFloat(rmb) * floatingRate));
        }
        return formatMoney(
            parseFloat((parseFloat(rmb) * floatingRate).toFixed(2))
        );
    };

    const tempWindow:any = typeof window !== 'undefined' ? window : {};
    if(tempWindow) tempWindow.calcByCnyPrice = calc

    const bothFormat = (rmb: any): any => {
        return `${rmb}${window._$m.t('元')} (${calc(rmb)}円)`;
    };
    const getCurrentMonetaryUnit = () => {
        const currentSite = customerDetail?.stationCode ?? '';
        const currentMonetaryUnit = siteMapMonetaryUnit.get(currentSite);

        return currentMonetaryUnit;
    };
    const formatCountryMoney = (rmb: any) => {
        let price = calc(rmb);
        const stationCode = customerDetail?.stationCode;
        switch (stationCode) {
            case Site.JA:
                price = price + ' 円';
                break;
            case Site.KO:
                price = '₩ ' + price;
                break;
            case Site.EN:
                price = '$ ' + price;
                break;
        }
        return price;
    };
    const formatMoneyDirection = (money: any, isThousandth = false) => {
        const stationCode = customerDetail?.stationCode;
        let showText = '';
        // 是否千分位化
        const newMoney = isThousandth ? formatMoney(money) : money;
        switch (stationCode) {
            case Site.JA:
                showText = newMoney + ' 円';
                break;
            case Site.KO:
                showText = '₩ ' + newMoney;
                break;
            case Site.EN:
                showText = '$ ' + newMoney;
                break;
        }
        return showText;
    };
    const getActivePriceByStation = (): number => {
        const stationCode = customerDetail?.stationCode;
        if (stationCode === Site.JA) {
            return 1;
        } else if (stationCode === Site.KO) {
            return 10;
        }
        return 0.1;
    };
    const getCountryCurrency = (stationCode:Site) => {
        const currentSite = customerDetail?.stationCode ??stationCode;
        const currentCountryCurrency = countryCurrency.get(currentSite);
        return currentCountryCurrency;
    };
    return {
        rate,
        floatingRate,
        floatExchangeRate,
        calc,
        bothFormat,
        getCurrentMonetaryUnit,
        formatCountryMoney,
        formatMoneyDirection,
        getActivePriceByStation,
        getCountryCurrency
    };
};

export function formatMoney(
    num: number | string | void,
    returnVal = true
): string {
    // return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    if (num !== 0 && (!num || isNaN(Number(num)))) return '';
    return returnVal
        ? (Math.round(Number(num) * 100) / 100)
              .toLocaleString('en-us')
              .replace(/(\.\d\d)\d$/, '$1')
        : num.toLocaleString('en-us');
}
