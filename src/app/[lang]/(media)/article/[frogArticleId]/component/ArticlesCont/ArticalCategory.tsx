/*
 * @Author: shiguang
 * @Date: 2024-05-16 18:07:45
 * @LastEditors: shiguang
 * @LastEditTime: 2024-05-20 14:07:44
 * @Description: 
 */
'use client'
import { request } from "@/config/request";
import { FrogArticleType } from "@/service/customer";
import { getSiteStation } from "@/utils/language";
import { useRequest } from "ahooks";
import { useParams, useRouter } from "next/navigation";



const arrToGroup2 = <T extends any>(arr: T[]) => {
    const newArr: Array<T[]> = [];
    for (let i = 0; i < arr.length; i++) {
        const temp: T[] = [];
        temp.push(arr[i]);
        i++;
        if (i < arr.length) {
            temp.push(arr[i]);
        }
        newArr.push(temp);
    }
    return newArr;
}
const ArticalCategory = () => {
    const router = useRouter()
    const { lang } = useParams();
    const stationCode = getSiteStation(lang as any)
    const { data } = useRequest(request.customer.frog.articleTypeList, {
        defaultParams: [{
            stationCode
        }]
    });
    const list = data?.data ?? [];
    return (
        <div className="__cate-list bg-[#FAFAFA] p-[20px] mb-[20px]" >
            <div className="flex px-[15px] mb-[20px] bg-[--pcolor] text-[#fff] font-[700] mo:text-[24px] items-center mo:h-[50px]" >
                <div className="flex" >
                    <div>icon</div> <div className="pl-[12px]" >カテゴリ 1111</div>
                </div> 
            </div>
            <div className="flex flex-wrap" >
                {arrToGroup2(list).map((item, index) => {
                    const [first, last] = item
                    const renderItem = (_item: FrogArticleType) => {
                        return (
                            <div
                                className="flex text-[15.5px] text-[#404040] bg-[#fff] cursor-pointer items-center justify-center border border-solid border-[#F0F0F0] hover:border-[#1C9976] hover:bg-[#1c9976]/[.1] hover:text-[#008060] box-border mb-[8px] h-[58px]"
                                style={{ flexGrow: 2 }}
                                onClick={() => {
                                    router.push(`/${lang}?frogArticleTypeId=${_item.id}`)
                                }}
                            >
                                <div>{_item.name}</div>
                            </div>
                        )
                    }
                    return <div key={index} className="flex justify-between w-[100%]" >
                        {renderItem(first)}
                        <div className="w-[8px] flex-shrink-0 line-clamp-1" />
                        {last ? renderItem(last) : <div style={{ flexGrow: 2, opacity: 0 }} >empty</div>}
                    </div>
                })}
            </div>
        </div>

    );
}

export default ArticalCategory