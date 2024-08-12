import { Api as Customer } from './customer';
import { Api as Settlement } from './settlement';
import { Api as Order } from './order';
import { Api as Goods } from './goods';

import { serviceConfig } from '@/config/request/swaggerServiceConfig';

export const Api = { Customer, Settlement, Order, Goods };

const warpperServiceConfig = (serviceConfig: any, ctx: { basePath: string;name:string }) => {
        const newConfig = { ...serviceConfig };
        if (newConfig.baseURL) {
            newConfig.baseURL = newConfig.baseURL + ctx.basePath;
        }
        return newConfig;
    };

const customer = new Customer(warpperServiceConfig(serviceConfig, { name: 'customer', basePath: '/customer' }));
const settlement = new Settlement(warpperServiceConfig(serviceConfig, { name: 'settlement', basePath: '/settlement' }));
const order = new Order(warpperServiceConfig(serviceConfig, { name: 'order', basePath: '/order' }));
const goods = new Goods(warpperServiceConfig(serviceConfig, { name: 'goods', basePath: '/goods' }));

export const apiInstanceList = [{ key: 'customer', instance: customer }, { key: 'settlement', instance: settlement }, { key: 'order', instance: order }, { key: 'goods', instance: goods }];

export const api = { customer, settlement, order, goods };