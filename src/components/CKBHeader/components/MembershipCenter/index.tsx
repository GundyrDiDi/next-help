/*
 * @Author: liangliang
 * @Date: 2023-06-15 17:12:55
 * @LastEditors: shiguang
 * @LastEditTime: 2023-07-13 10:56:17
 * @Description:
 */
import Popover from "antd/es/popover";
import React, { useState } from "react";
import { Button } from "antd";
import { CustomerMembershipResDTO } from "@/service/customer";
import { request } from "@/config/request/interceptors";
import "./index.scss";
import IconVIPLogo from "@/components/Icon/IconVIPLogo";
import { ENUM_PAGE } from "@/const/enum";
import { isLogin } from "@/utils";
// import { jumpPage } from '@/utils';
// import { useRequest } from 'ahooks';
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
export interface CustomerMembershipResDTO2 extends CustomerMembershipResDTO {
  templateLevel?: number;
}
export interface MembershipProps {
  membership?: CustomerMembershipResDTO2;
  newMemberActivity?: NewMemberActivityDTOS;
  t: (key: string) => string;
}

// 会员背景图片
const vipLevelImg: { [key: number]: string } = {
  1: "https://static-s.theckb.com/BusinessMarket/OEM/home_tab_economy%402x.png",
  2: "https://static-s.theckb.com/BusinessMarket/OEM/home_tab_standard%402x.png",
  3: "https://s.theckb.com/img/home_tab_bussines@2x.bafef553.png",
  4: "https://static-s.theckb.com/BusinessMarket/OEM/home_tab_first%402x.png",
};

const membershipLevel = (props: MembershipProps) => {
  const { membership, newMemberActivity, t } = props;
  const membershipExplain = [
    t("能够在中国找到丰富的供应商"),
    t("按照日本质量标准进行检验（隶属于日本公司）"),
    t("最低国际运费保证，可运往23个国家/地区"),
    t("可靠的支持和即时的客户服务"),
  ];
  // useRequest(request.settlement.)
  // 存在会员
  const existsMemshipDom = {
    domTag: () => {
      return (
        <div className="w-[300px] pt-[9px]">
          <div className="flex">
            <div className="w-[80px] text-center bg-[color:#1d1d1d] rounded-tl-[10px] rounded-br-[10px] text-[#e5bf88]">
              {t("我的会员")}
            </div>
          </div>
          <div className="p-[16px]">
            <div className="text-[20px] text-[color:--color-white] font-[700]">
              {membership?.membershipTemplateName}
            </div>
            <div className="my-[8px] text-[color:rgba(255,255,255,.7)] text-[12px]">
              {t("有效期：")}
              {membership?.expiresDate}
            </div>
            <div
              className="cursor-pointer rounded-[18px] bg-[color:--color-white] text-center leading-[36px] font-[500] hover:text-[color:#735a3a] hover:b g-[color:#fef8f1]"
              onClick={() => {
                // jumpPage(ENUM_PAGE.VIP_LEVEL);
              }}
            >
              {t("去续费")}
            </div>
          </div>
        </div>
      );
    },
    style: {
      backgroundColor: "rgba(255,255,255,0)",
      marginTop: 8,
      padding: 0,
      backgroundImage: `url(${vipLevelImg[membership?.templateLevel || 1]})`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      height: 167,
    },
  };
  // 新会员活动
  const newMemshipActivityDom = {
    domTag: () => {
      const trialDiscount =
        newMemberActivity?.membershipTrialActivityComboReqDTOS[0]
          ?.trialDiscount || 0;
      return (
        <div className="absolute newMemberInfo">
          <span>{t("首次入会")}</span>
          <div className="flex items-center">
            <span>{t("首月")}</span>
            <div className="numBack flex items-center">
              {trialDiscount === 0 ? <span>1</span> : null}
              {trialDiscount ? (
                <span>{String((10 - trialDiscount) * 10)}</span>
              ) : null}
              {trialDiscount !== 0 ? <span className="symbol">％</span> : null}
            </div>
            <span>{t("円")}</span>
          </div>
        </div>
      );
    },
    style: {
      backgroundColor: "rgba(255,255,255,0)",
      marginTop: 8,
      padding: 0,
      backgroundImage:
        "url(https://static-s.theckb.com/BusinessMarket/member/new_member_tabbar_pop_up_background@2x.png)",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      //   height: 350,
      width: 300,
    },
  };
  const membershipExpireDom = {
    domTag: () => {
      return (
        <div className="w-[300px] pt-[9px] membershipExpire">
          <div className="flex">
            <div className="w-[80px] text-center bg-[color:#1d1d1d] rounded-tl-[10px] rounded-br-[10px] text-[#e5bf88]">
              {t("我的会员")}
            </div>
          </div>
          <div className="content">
            <div className="member-status">
              {isLogin() ? t("已失去会員") : t("未登录")}
            </div>
            <div className="member-tips">{t("入会优享超多服务")}</div>
            <ul className="explain mt-[15px]">
              {membershipExplain.map((item, index) => {
                return (
                  <li key={index} className="list flex items-center">
                    <img
                      src="https://static-s.theckb.com/BusinessMarket/OEM/icon_tab_vip%402x.png"
                      alt=""
                    />
                    <span className="text">{item}</span>
                  </li>
                );
              })}
            </ul>
            <a>
              <Button className="btn" onClick={() => {}}>
                {t("开通会员")}
              </Button>
            </a>
          </div>
        </div>
      );
    },
    style: {
      backgroundColor: "rgba(255,255,255,0)",
      marginTop: 8,
      padding: 0,
      backgroundImage:
        "url(https://static-s.theckb.com/BusinessMarket/OEM/home_tab_nonvip%402x.png)",
      backgroundSize: "100% 100%",
      backgroundRepeat: "no-repeat",
      width: 300,
      //   height: 350,
    },
  };
  const popverContent = () => {
    if (membership?.templateLevel) {
      return existsMemshipDom;
    } else if (newMemberActivity) {
      return newMemshipActivityDom;
    }
    return membershipExpireDom;
  };
  return (
    <div className="membershipCenter">
      <Popover
        content={popverContent()?.domTag}
        style={{
          padding: 0,
          boxShadow: "none",
        }}
        trigger={["hover", "click"]}
        arrow={false}
        overlayInnerStyle={popverContent()?.style}
        id="membershipCenter"
      >
        <div className="flex items-center">
          <div className="top-[-1px] relative pr-[2px]">
            <IconVIPLogo />
          </div>
          <span>{t("会员中心")}</span>
        </div>
      </Popover>
    </div>
  );
};
export default membershipLevel;
