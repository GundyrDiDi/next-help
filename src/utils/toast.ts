import { message } from 'antd';

export const isPriceExpire = (price: { priceExpireTime?: unknown }) => {
    if (new Date(price.priceExpireTime as string).getTime() < Date.now()) {
        message.warning('该报价单已过期，请选择其他报价单');
        return true;
    }
};
