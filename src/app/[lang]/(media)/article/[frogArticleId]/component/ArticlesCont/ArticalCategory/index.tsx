/*
 * @Author: shiguang
 * @Date: 2024-05-16 18:07:45
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-18 17:48:23
 * @Description: 
 */
'use client'
import { request } from "@/config/request";
import { FrogArticleType } from "@/service/customer";
import { getSiteStation } from "@/utils/language";
import { useRequest } from "ahooks";
import { useParams, useRouter } from "next/navigation";
import IconFile from "./IconFile";
import { useTranslation } from "react-i18next";



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
    // /customer/frog/article/type/list/customer
    const { data } = useRequest(request.customer.frog.articleTypeListCustomer, {
        defaultParams: [{
            stationCode
        }]
    });
    const list = data?.data ?? [];
    const { t } = useTranslation()
    return (
        <div  >
            <div className="flex px-[15px] mb-[20px] bg-[--fcolor] text-[#fff] font-[700] text-[16px] items-center h-[40px]" style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }} >
                <div className="flex items-center " >
                    <IconFile width="20" height="15" /> <div className="pl-[12px]" >{t('分类')}</div>
                </div>
            </div>
            <div className="flex flex-wrap" >
                {arrToGroup2(list).map((item, index) => {
                    const [first, last] = item
                    const renderItem = (_item: FrogArticleType) => {
                        return (
                            <div
                                className="flex w-[50%] line-clamp-1 text-[15.5px] text-[#404040] bg-[#fff] cursor-pointer items-center justify-center border border-solid border-[#F0F0F0] hover:border-[--pcolor] hover:bg-[--pcolor]/[.3] hover:text-[--pcolor] box-border mb-[8px] h-[58px]"
                                style={{ flexGrow: 2 }}
                                title={_item.name}
                                onClick={() => {
                                    router.push(`/${lang}?articleTypeId=${_item.id}`)
                                }}
                            >
                                <div className="px-[8px] line-clamp-1" >
                                    {_item.name}
                                </div>
                            </div>
                        )
                    }
                    return <div key={index} className="flex justify-between w-[100%]" >
                        {renderItem(first)}
                        <div className="w-[8px] flex-shrink-0 line-clamp-1" />
                        {last ? renderItem(last) : <div className="w-[50%]" style={{ flexGrow: 2, opacity: 0 }} >empty</div>}
                    </div>
                })}
            </div>
        </div>

    );
}

export default ArticalCategory