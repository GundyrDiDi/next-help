/*
 * @Author: shiguang
 * @Date: 2024-05-16 15:03:15
 * @LastEditors: shiguang
 * @LastEditTime: 2024-05-16 17:58:34
 * @Description: 
 */

import { ENUM_PAGE, NO_LOGIN_RESTRICTION_TYPE, NO_MEMBERSHIP_RESTRICTION_TYPE } from "@/const/enum";
import { FrogArticleRespDTO } from "@/service/customer";
import { isLogin } from "@/utils";
import { getLink, toTheCkb } from "@/utils/router";

interface ArticleListProps {
    list?: FrogArticleRespDTO[];
}

const ArticleList = (props: ArticleListProps) => {
    const { list } = props
    return (
        <div className="flex justify-center" >
            <div className="pc:p-[20px] bg-[#fff] pc:w-[940px] pc:rounded-[6px] " >
                {list?.map((item, key) => {
                    return <div
                        className="flex pc:h-[166px] pc:mb-[40px] cursor-pointer"
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
                        <div className="pc:w-[380px] pc:rounded-[6px] h-[100%] shrink-0" style={{ backgroundImage: `url(${item.frogArticleImgUrl})` }}  ></div>
                        <div className="flex flex-col justify-between pc:ml-[16px] grow h-[100%]" >
                            <div className="text-[#333] pc:text-[18px] font-[700]" >{item.frogArticleTitle}</div>
                            {/* <div>{item.frogArticleSubTitle}</div> */}
                            <div className="text-[#666] flex justify-between" >
                                <div>{item.viewNum}</div>
                                <div>{item.createTime}</div>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    );
}

export default ArticleList