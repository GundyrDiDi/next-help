import { useState, useEffect, useRef } from 'react';
import { atom, useAtom } from 'jotai';
import dayjs from 'dayjs';
import { atomRequestCustomerDetail } from '@/App';
import { siteMapMonetaryUnit, Site, countryCurrency } from '@/const';
import { getFloatExchange, getOriginExchangeRate } from '@/service/settlement';

export const useTime = () => {
    const [customerDetail] = useAtom(atomRequestCustomerDetail);

    /** 服务器差额时间 */
    const [customerUtcTimeZone, setCustomerUtcTimeZone] = useState<number>(9);
    const [defferTime, setDefferTime] = useState<number>(1);
    useEffect(() => {
        // 目前服务器时间为+8东八区时间，根据用户所在地的时区加减时间
        const defaultZone = 8;
        const zone = customerDetail?.utcTimeZone
            ? Number(customerDetail?.utcTimeZone?.replace('UTC', ''))
            : 0 - new Date().getTimezoneOffset() / 60;
        setCustomerUtcTimeZone(zone);
        const defferZone = zone - defaultZone;
        if (customerDetail?.isEN) {
            setDefferTime(defferZone);
        }
    }, [customerDetail]);
    const getStationTime = (time: any, format?: any) => {
        if (time && time !== '-') {
            return dayjs(time)
                .add(defferTime, 'hour')
                .format(format || 'YYYY-MM-DD HH:mm:ss');
        }
        return '-';
    };
    return {
        defferTime,
        getStationTime,
        customerUtcTimeZone
    };
};
