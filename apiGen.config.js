/*
 * @Author: shiguang
 * @Date: 2023-07-06 14:08:00
 * @LastEditors: shiguang
 * @LastEditTime: 2023-07-06 15:28:59
 * @Description: description
 */

const swaggerList = [
  {
    title: "用户",
    name: "customer",
    url: "http://master-gateway.theckb.com/customer/v2/api-docs",
  },
  {
    title: "配置",
    name: "settlement",
    url: "http://master-gateway.theckb.com/settlement/v2/api-docs",
  },
  {
    title: "订单",
    name: "order",
    url: "http://master-gateway.theckb.com/order/v2/api-docs",
  },
];

const config = {
  swaggerList,
  requestEnv: "",
};

module.exports = config;
