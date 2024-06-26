/*
 * @Author: shiguang
 * @Date: 2024-05-10 14:43:54
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-20 19:08:04
 * @Description: 
 */
import { useTranslation } from "@/i18n/client";
import "./index.scss";
import { useAtom, useAtomValue } from "jotai";
import { CustomerDetail, Lang } from "@/model";
import { isKO } from "@/utils/language";
import { isLogin } from "@/utils";
import { Button } from "antd";
import { toLogin, toTheCkb } from "@/utils/router";
import { ENUM_PAGE } from "@/const/enum";

const Marking = () => {
  const { t } = useTranslation();
  const useInfo = useAtomValue(CustomerDetail)
  const vipLoginClick = () => {
    toTheCkb(ENUM_PAGE.VIP_LEVEL);
  };
  // 用户存在又 有会员 return
  if (useInfo?.customerId && useInfo?.membership?.templateLevel) return null;

  return (
    <div>
      <div className="pc:hidden pad:hidden" >
        <div className="marking-content">
          {useInfo?.customerId ? (
            !useInfo?.membership?.templateLevel &&
            <>
              {/* 已经登录需要会员查看 */}
              <p>{t("加入CKB 会员计划以查看更多信息")}</p>
              <div onClick={vipLoginClick} className="join">
                {t("会员登录")}
              </div>
            </>
          ) : (
            <>
              {/* 未登录会员查看 */}
              <p>{t("注册或登录以查看更多信息")}</p>
              <div style={{ display: "flex" }}>
                <Button
                  className="btn"
                  onClick={() => {
                    toTheCkb(ENUM_PAGE.LOGIN, false);
                  }}
                >
                  {t("登录")}
                </Button>
                <Button
                  onClick={() => {
                    toTheCkb(ENUM_PAGE.REGISTER, false);
                  }}
                  className="signBtn btn ml-[30px]"
                >
                  {t("注册")}
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="marking mo:!hidden">
        <div
          className="marking-top"
          style={{ bottom: isKO() ? "372px" : "480px" }}
        ></div>
        <div
          className="marking-bot"
          style={{ bottom: isKO() ? "172px" : "280px" }}
        >
          <div className="marking-content">
            {useInfo?.customerId ? (
              !useInfo?.membership?.templateLevel &&
              <>
                {/* 已经登录需要会员查看 */}
                <p>{t("加入CKB 会员计划以查看更多信息")}</p>
                <div onClick={vipLoginClick} className="join">
                  {t("会员登录")}
                </div>
              </>
            ) : (
              <>
                {/* 未登录会员查看 */}
                <p>{t("注册或登录以查看更多信息")}</p>
                <div style={{ display: "flex" }}>
                  <Button
                    className="btn"
                    onClick={() => {
                      toTheCkb(ENUM_PAGE.LOGIN, false);
                    }}
                  >
                    {t("登录")}
                  </Button>
                  <Button
                    onClick={() => {
                      toTheCkb(ENUM_PAGE.REGISTER, false);
                    }}
                    className="signBtn btn ml-[30px]"
                  >
                    {t("注册")}
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marking;
