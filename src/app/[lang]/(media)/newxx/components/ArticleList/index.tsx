/*
 * @Author: shiguang
 * @Date: 2024-05-16 15:03:15
 * @LastEditors: shiguang
 * @LastEditTime: 2024-05-21 16:25:56
 * @Description: 
 */

import { SvgCheck } from "@/components/svgs";
import { ENUM_PAGE, NO_LOGIN_RESTRICTION_TYPE, NO_MEMBERSHIP_RESTRICTION_TYPE } from "@/const/enum";
import { CustomerDetail, Plat } from "@/model";
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
const onClickArticleItem = (href: string) => {
    const noLoginMap = new Map([
        [ 
            /** 不可查看 */
            NO_LOGIN_RESTRICTION_TYPE.CHECK_DISABLE, () => {
                toTheCkb(ENUM_PAGE.LOGIN, false);
            }
        ],
        [ 
            /** 部分可查看 */
            NO_LOGIN_RESTRICTION_TYPE.CHECK_PART, () => {
                window.$location.href = href;
            }
        ],
        [ 
            /** 可查看全文 */
            NO_LOGIN_RESTRICTION_TYPE.CHECK_ALL, () => {
                window.$location.href = href;
            }
        ],
    ]);
    
    const loginMap = new Map([
        [ 
            /** 不可查看 */
            NO_MEMBERSHIP_RESTRICTION_TYPE.CHECK_DISABLE, () => {
                toTheCkb(ENUM_PAGE.LOGIN, false);
            }
        ],
        [ 
            /** 部分可查看 */
            NO_MEMBERSHIP_RESTRICTION_TYPE.CHECK_PART, () => {
                window.$location.href = href;
            }
        ],
        [ 
            /** 可查看全文 */
            NO_MEMBERSHIP_RESTRICTION_TYPE.CHECK_ALL, () => {
                window.$location.href = href;
            }
        ],
    ]);
    

}

// 登录



const ArticleList = (props: ArticleListProps) => {
    const { list } = props
    const { t } = useTranslation();
    const [plat] = useAtom(Plat);
    const isD2C = ENUM_PLATE.d2c === plat;
    const [userInfo] = useAtom(CustomerDetail);

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
                            if(!isLogin()){
                                // 未登录 && 不可查看 的时候跳转 login
                                if(item.noLoginRestriction === NO_LOGIN_RESTRICTION_TYPE.CHECK_DISABLE){
                                    toTheCkb(ENUM_PAGE.LOGIN, false);
                                    return
                                }
                                window.$location.href = href;
                                return
                            }
                            // 登录了的时候 但是需要会员才能看。 跳转到需要开会员
                            if(item.noMembershipRestriction === NO_MEMBERSHIP_RESTRICTION_TYPE.CHECK_DISABLE && !userInfo?.membership?.templateLevel){
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