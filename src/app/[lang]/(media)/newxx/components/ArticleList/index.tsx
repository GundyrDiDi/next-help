/*
 * @Author: shiguang
 * @Date: 2024-05-16 15:03:15
 * @LastEditors: shiguang
 * @LastEditTime: 2024-05-16 17:07:35
 * @Description: 
 */

import { FrogArticleRespDTO } from "@/service/customer";

interface ArticleListProps {
    list?: FrogArticleRespDTO[];
}

const ArticleList = (props: ArticleListProps) => {
    const { list } = props
    return (
        <div className="flex justify-center" >
            <div className="pc:p-[20px] bg-[#fff] pc:w-[940px] pc:rounded-[6px] " >
                {list?.map((item, key) => {
                    return <div className="flex pc:h-[166px] pc:mb-[40px] cursor-pointer" key={key} >
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