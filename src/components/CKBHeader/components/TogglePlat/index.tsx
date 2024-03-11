"use client";
import React from "react";
import "./index.scss";
import { request } from "@/config/request";
import { ENUM_SYSTEM_SOURCE } from "@/const/enum";
import { useAtom } from "jotai";
import { atomCustomerDetail } from "@/model/CustomerDetail";
import { togglePlat } from "@/config/request/interceptors";
import { CustomerDetail } from "@/model";

interface PlatDTO {
  label: string;
  path: string;
  name: string;
  type: ENUM_SYSTEM_SOURCE;
}
const Plats = [
  {
    label: "B2B",
    path: "/b2b",
    name: "b2b",
    type: ENUM_SYSTEM_SOURCE.B2B,
  },
  {
    label: "D2C",
    path: "/d2c",
    name: "d2c",
    type: ENUM_SYSTEM_SOURCE.D2C,
  },
];
interface TogglePlatProps {
  systemSource: ENUM_SYSTEM_SOURCE;
}
const TogglePlat = (props: TogglePlatProps) => {
  const { systemSource } = props;

  const [useInfo] = useAtom(CustomerDetail);
  /** B2B D2C切换 */
  const changePlat = async (item: PlatDTO) => {
    if (useInfo?.customerId) {
      const res = await request.customer.changeLogin.changeLogin();
      if (res.data?.token) {
        togglePlat(
          res.data?.customerRespDTO?.systemSource ?? ENUM_SYSTEM_SOURCE.D2C
        );
        window.localStorage.setItem(
          "production_route/token",
          JSON.stringify({
            val: res.data?.token,
            expire: undefined,
          })
        );
        const fistShopId = res.data?.customerShopList?.[0].customerShopId;
        window.localStorage.setItem(
          "production_route/curShop",
          JSON.stringify({
            val: fistShopId,
            expire: null,
          })
        );
        // TODO:切换后的跳转
        window.location.reload();
        // const plat =
        //     res.data.customerRespDTO?.systemSource ===
        //     ENUM_SYSTEM_SOURCE.D2C
        //         ? '/d2c/'
        //         : '/b2b/';
        // window.location.replace(
        //     window.location.origin + plat + 'index/pure'
        // );
      }
    } else {
      togglePlat(item.type);
      window.location.reload();
    }
  };
  return (
    <div id="toggle-plat" className="ml-[30px]">
      {Plats.map((item) => {
        return (
          <div
            onClick={() => changePlat(item)}
            className={
              +systemSource === item.type ? "plat-btn active" : "plat-btn"
            }
            key={item.name}
          >
            {item.label}
          </div>
        );
      })}
    </div>
  );
};
export default TogglePlat;
