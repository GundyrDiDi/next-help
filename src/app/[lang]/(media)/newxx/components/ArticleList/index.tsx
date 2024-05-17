/*
 * @Author: shiguang
 * @Date: 2024-05-16 15:03:15
 * @LastEditors: shiguang
 * @LastEditTime: 2024-05-17 13:45:16
 * @Description: 
 */

import { SvgCheck } from "@/components/svgs";
import { ENUM_PAGE, NO_LOGIN_RESTRICTION_TYPE, NO_MEMBERSHIP_RESTRICTION_TYPE } from "@/const/enum";
import { Plat } from "@/model";
import { ENUM_PLATE } from "@/model/Plat";
import { FrogArticleRespDTO } from "@/service/customer";
import { isLogin } from "@/utils";
import { getLink, toTheCkb } from "@/utils/router";
import { Empty } from "antd";
import { useAtom } from "jotai";
import { useTranslation } from "react-i18next";

interface ArticleListProps {
    list?: FrogArticleRespDTO[];
}

const ArticleList = (props: ArticleListProps) => {
    const { list } = props
    const { t } = useTranslation();
    const [plat] = useAtom(Plat);
    const isD2C = ENUM_PLATE.d2c === plat;

    return (
        <div className="flex justify-center pad:!block mo:!block mo:p-[12px]" >
            <div className="pc:p-[20px] bg-[#fff] pad:bg-[#F5F5F5] pc:w-[940px] pc:rounded-[6px] " >
                {!list?.length && <Empty description={t("没有更多了")} />}
                {list?.map((item, key) => {
                    return <div
                        className="flex mo:!block pc:h-[166px] pad:h-[110px] pc:mb-[40px] pad:mb-[20px] cursor-pointer mo:mb-[32px]"
                        key={key}
                        onClick={() => {
                            const href = getLink(`article/${item.frogArticleId}`);
                            // 点击跳转文章线详情
                            if (
                                !isLogin() &&
                                item.noLoginRestriction === NO_LOGIN_RESTRICTION_TYPE.CHECK_DISABLE
                            ) {
                                toTheCkb(ENUM_PAGE.LOGIN, false);
                                return;
                            }
                            if (
                                item.noMembershipRestriction === NO_MEMBERSHIP_RESTRICTION_TYPE.CHECK_DISABLE
                                // TODO
                                // && !userInfo?.membership?.templateLevel
                            ) {
                                return toTheCkb(ENUM_PAGE.VIP_LEVEL);
                            }

                            window.$location.href = href;
                        }}
                    >
                        <div 
                            className="pc:w-[380px] pad:w-[256px] mo:h-[154px] rounded-[6px] h-[100%] shrink-0 pc:bg-contain pad:bg-contain mo:bg-cover" 
                            style={{ backgroundImage: `url(${item.frogArticleImgUrl})`, backgroundRepeat: 'no-repeat' }} 
                         >

                         </div>
                        <div className="flex flex-col justify-between pc:ml-[16px] pad:ml-[16px] grow h-[100%] group " >
                            <div className="text-[#333] pc:text-[18px] font-[700] text-[15px] line-clamp-2 mo:my-[12px] group-hover:!text-[--color-primary]" >{item.frogArticleTitle}</div>
                            {/* <div>{item.frogArticleSubTitle}</div> */}
                            <div className="text-[#666] flex justify-between group-hover:!text-[--color-primary]" >
                                {/* https://static-s.theckb.com/BusinessMarket/Client/kaerumedia/read-active-b2b.png */}
                                <div className="flex group-hover:!text-[--color-primary]" >
                                    <SvgCheck
                                        className={`icon text-[#666] group-hover:!text-[--color-primary] relative top-[4px] `}
                                        style={{
                                            marginRight: "5px",
                                            fontSize: "12px",
                                            transform: "scale(1.4)",
                                        }} />
                                    {item.viewNum}</div>
                                <div className="group-hover:!text-[--color-primary]" >{item.createTime}</div>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    );
}

export default ArticleList