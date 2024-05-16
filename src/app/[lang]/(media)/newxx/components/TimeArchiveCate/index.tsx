/*
 * @Author: shiguang
 * @Date: 2024-05-16 15:02:12
 * @LastEditors: shiguang
 * @LastEditTime: 2024-05-16 18:32:32
 * @Description: 时间归档分类列表
 */
'use client'
import { useRequest } from "ahooks";
import { request } from "@/config/request";
import { useState } from "react";

// const { runAsync: articlePage, loading } = useRequest(
//     request.customer.frog.articleArchive,
//     { manual: true }
//   );
const list = [
    {
        title: '中国輸入ヤフオク販売のメリットと儲かる商品のリサーチ方法に…いて中国輸入ヤフオク販売のメリットと儲かる商品のリサーチ方法に…いて中国輸入ヤフオク販売のメリットと儲かる商品のリサーチ方法に…いて',
    },
    {
        title: '中国輸入ヤフオク販売のメリットと儲かる商品のリサーチ方法に…いて中国輸入ヤフオク販売のメリットと儲かる商品のリサーチ方法に…いて中国輸入ヤフオク販売のメリットと儲かる商品のリサーチ方法に…いて',
    },
    {
        title: '中国輸入ヤフオク販売のメリットと儲かる商品のリサーチ方法に…いて中国輸入ヤフオク販売のメリットと儲かる商品のリサーチ方法に…いて中国輸入ヤフオク販売のメリットと儲かる商品のリサーチ方法に…いて',
    },
    {
        title: '中国輸入ヤフオク販売のメリットと儲かる商品のリサーチ方法に…いて中国輸入ヤフオク販売のメリットと儲かる商品のリサーチ方法に…いて中国輸入ヤフオク販売のメリットと儲かる商品のリサーチ方法に…いて',
    },

]

interface TimeLineCateProps {
    // station
}
const TimeLineCate = () => {
    const { data, loading } = useRequest(request.customer.frog.articleArchive, { defaultParams: [{}] });
    const list = data?.data ?? [];
    // const 
    
    return <div className="bg-[#fff]" >
        <div
            className="bg-[#008060] font-[16px] text-[#fff] leading-[40px] h-[40px] px-[8px]"
            style={{ borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }}
        >
            カテゴリ
        </div>
        {list.map((item, idx) => <div
            key={idx}
            className="flex text-[#666] text-[14px] px-[8px] py-[10px]"
            style={idx !== list.length - 1 ? { borderBottom: '1px dashed #E3E3E3 ' } : {}}
        >
            <div className="w-[210px] line-clamp-1" >{item.frogArticleYear}-{item.frogArticleMonth}</div>
            <div>{item.articleNum}</div>
        </div>)}
    </div>
}

export default TimeLineCate