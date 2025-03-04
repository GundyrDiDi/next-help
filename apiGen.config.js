/*
 * @Author: shiguang
 * @Date: 2023-07-06 14:08:00
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-17 04:51:07
 * @Description: description
 */

const swaggerList = [
  {
    title: "用户",
    name: "customer",
    url: "https://master-gateway.theckb.com/customer/v2/api-docs",
  },
  {
    title: "配置",
    name: "settlement",
    url: "https://master-gateway.theckb.com/settlement/v2/api-docs",
  },
  {
    title: "订单",
    name: "order",
    url: "https://master-gateway.theckb.com/order/v2/api-docs",
  },
  {
    title: "商品",
    name: "goods",
    url: "https://master-gateway.theckb.com/goods/v2/api-docs",
  },
];

const config = {
  swaggerList,
  requestEnv: "20240606-fogseo2",
};

module.exports = config;
