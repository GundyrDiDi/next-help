'use client'
import { useState } from "react"

interface Props {
    list:string[];
}

const Index = (props:Props) => {
    const [active,setActive]=useState(0)
    return <div className="flex justify-center" >
        <div className="w-[1200px] flex-col" >
            <div className="my-[24px] flex items-center" >
                <div className="mr-[8px] w-[5px] h-[24px] bg-[#008060]" />
                <div className="font-bold text-[24px]" >FAQ</div>
            </div>
            <div className="flex text-[14px] text-[#000] mb-[16px]" >
                {/* 左边 */}
                <div className="w-[290px] mr-[16px] bg-white p-[20px]" >
                    <div className="font-bold rounded-[4px] h-[40px] box-border px-[8px] leading-[40px] hover:text-[#008060] hover:bg-[#008060]/[0.10] line-clamp-1 hover:cursor-pointer" >
                        1、商品注文後、商品到着までの日数は何日かかりますか。
                    </div>
                    <div className="font-bold rounded-[4px] h-[40px] box-border px-[8px] leading-[40px] hover:text-[#008060] hover:bg-[#008060]/[0.10] line-clamp-1 hover:cursor-pointer" >
                        1、商品注文後、商品到着までの日数は何日かかりますか。
                    </div>
                    <div className="font-bold rounded-[4px] h-[40px] box-border px-[8px] leading-[40px] hover:text-[#008060] hover:bg-[#008060]/[0.10] line-clamp-1 hover:cursor-pointer" >
                        1、商品注文後、商品到着までの日数は何日かかりますか。
                    </div>
                </div>
                {/* 右边 */}
                <div className="grow bg-white p-[20px]" >
                    <div className="font-bold text-[24px] text-[#000]" >
                        3、食器、電気製品は輸出できますか。輸出できないものはありますか。
                    </div>
                    <div style={{ borderBottom: '1px solid #E6EAF0' }} className="mt-[20px] mb-[20px]" />
                    <div className="text-[#000]/[.65]" >
                        3、食器、電気製品は輸出できますか。輸出できないものはありますか。
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default Index