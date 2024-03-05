import { useState, useEffect, useRef, Dispatch, SetStateAction } from 'react';
import { atom, useAtom } from 'jotai';
import { CustomerDetail } from '@/model';
import { siteMapMonetaryUnit, Site, countryCurrency } from '@/const';
import { request } from '@/config/request';
import { CustomerDetailRespDTO } from '@/service/customer';

interface Props {
    customerDetail?: CustomerDetailRespDTO;
    setRate:  Dispatch<SetStateAction<number | undefined>>
    setFloatingRate: (val: number) => void;
    setFloatExchangeRate: (val: number) => void;
}

const reqRate = (
    {
        customerDetail,
        setRate,
        setFloatingRate,
        setFloatExchangeRate
    }:Props
) => {
    const stationCode = customerDetail?.stationCode;
    const mainCustomerId = customerDetail?.mainCustomerId;
    if (mainCustomerId) {
      request.settlement.exchangeRate.cnyToJpyExchangeRateAfterConfigFloat({
            mainCustomerId
        }).then((res) => {
            // 英国站 美元比人民币高,后端给的7.14  1￥=7.14$
            // 后端的汇率逻辑 7.14￥=1$   1￥=200韩元  1￥ = 20日元
            // 前端金额的计算统一是乘法 人民币*汇率得到对应国家的金额  所以英国要做除法
            if (stationCode === Site.UK) {
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
        const code = stationCode ?? localStorage.getItem('stationCode');
        if (!code) return;
        request.settlement.exchangeRate.getOriginExchangeRate({
            stationCode: code
        }).then((res) => {
            // 英国站 美元比人民币高,后端给的7.14  1￥=7.14$
            // 后端的汇率逻辑 7.14￥=1$   1￥=200韩元  1￥ = 20日元
            // 前端金额的计算统一是乘法 人民币*汇率得到对应国家的金额  所以英国要做除法
            if (stationCode === Site.UK) {
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
    const [customerDetail] = useAtom(CustomerDetail);

    const rateInternitalRef = useRef<any>(null);

    /** 源汇率(银行查出来的) */
    const [rate, setRate] = useState<number>();
    /**  源汇率 + 浮动汇率  */
    const [floatingRate, setFloatingRate] = useState<number>();
    /** 浮动汇率(我们配置的) */
    const [floatExchangeRate, setFloatExchangeRate] = useState<number>(1);
    useEffect(() => {
        reqRate({customerDetail, setRate, setFloatingRate, setFloatExchangeRate});
        rateInternitalRef.current = setInterval(
            () => {
                reqRate(
                    {
                    customerDetail,
                    setRate,
                    setFloatingRate,
                    setFloatExchangeRate
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
    }, [customerDetail]);

    const calc = (rmb: any) => {
        if (!floatingRate) return '***';
        if (floatingRate >= 1) {
            return formatMoney(Math.floor(parseFloat(rmb) * floatingRate));
        }
        return formatMoney(
            parseFloat((parseFloat(rmb) * floatingRate).toFixed(2))
        );
    };

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
            case Site.JP:
                price = price + ' 円';
                break;
            case Site.KR:
                price = '₩ ' + price;
                break;
            case Site.UK:
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
            case Site.JP:
                showText = newMoney + ' 円';
                break;
            case Site.KR:
                showText = '₩ ' + newMoney;
                break;
            case Site.UK:
                showText = '$ ' + newMoney;
                break;
        }
        return showText;
    };
    const getActivePriceByStation = (): number => {
        const stationCode = customerDetail?.stationCode;
        if (stationCode === Site.JP) {
            return 1;
        } else if (stationCode === Site.KR) {
            return 10;
        }
        return 0.1;
    };
    const getCountryCurrency = () => {
        const currentSite = customerDetail?.stationCode ?? '';
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
