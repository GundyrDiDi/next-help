import { useState, useEffect } from 'react';
import {  useAtom } from 'jotai';
import dayjs from 'dayjs';
import { CustomerDetail } from '@/model';

export const useTime = () => {
    const [userInfo] = useAtom(CustomerDetail);

    /** 服务器差额时间 */
    const [customerUtcTimeZone, setCustomerUtcTimeZone] = useState<number>(9);
    const [defferTime, setDefferTime] = useState<number>(1);
    useEffect(() => {
        // 目前服务器时间为+8东八区时间，根据用户所在地的时区加减时间
        const defaultZone = 8;
        const zone = userInfo?.utcTimeZone
            ? Number(userInfo?.utcTimeZone?.replace('UTC', ''))
            : 0 - new Date().getTimezoneOffset() / 60;
        setCustomerUtcTimeZone(zone);
        const defferZone = zone - defaultZone;
        if (userInfo?.isEN) {
            setDefferTime(defferZone);
        }
    }, [userInfo]);
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
