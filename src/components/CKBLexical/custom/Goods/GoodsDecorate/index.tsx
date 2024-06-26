/* eslint-disable @next/next/no-img-element */
/*
 * @Author: shiguang
 * @Date: 2024-05-28 16:14:06
 * @LastEditors: shiguang
 * @LastEditTime: 2024-05-29 13:57:38
 * @Description: 
 */

import { useEffect, useState } from "react";
import { GoodsNodeOptions } from "../GoodsNode";

export interface InsertGoodsDecorateProps {
    nodeKey: string;
    options: GoodsNodeOptions;
}

// curl 'https://gateway-prod.theckb.com/goods/product/detail' \
// -H 'content-type: application/json' \
// -H 'x-stationcode: UkStation' \
// --data-raw '{"productCode":"AM-1006123391"}'

const getGoodsDetail = async ({ productCode }: { productCode: string }) => {
    const res = await fetch(
        `https://gateway-prod.theckb.com/goods/product/detail`,
        {
            cache: 'no-cache',
            method: 'POST',
            body: JSON.stringify({
                productCode
            }),
            headers: {
                'X-Stationcode': 'UkStation',
                'content-type': 'application/json',
            }
        }
    );
    const json = await res.json();
    return json.data
}


const InsertGoodsDecorate = (props: InsertGoodsDecorateProps) => {
    const { nodeKey, options } = props
    const { text, url } = options;
    console.log(nodeKey);
    const [goodsDetail, setGoodsDetail] = useState<any>()
    useEffect(() => {
        if (!url) return;
        (async () => {
            const res = await getGoodsDetail({ productCode: url });
            setGoodsDetail(res);
        })()
    }, [url])
    if (!goodsDetail) {
        return <div>商品加载中...</div>
    }
    return <div>
        <a href={`https://s.theckb.com/ja/goods/${url}`} target="_blank" className="inline-block" >
            <div className="w-[260px] h-auto border p-[20px] " >
                <img alt="" className="w-[220px] h-auto" src={goodsDetail.productMainImg} />
                <div>
                    <div className="mt-[8px]"  >
                        <div className="line-clamp-1 cursor-pointer text-[16px] font-bold mb-[8px]" >{goodsDetail.productTitle} </div>
                    </div>
                    <div >{goodsDetail.productOriginPriceRange} CNY</div>
                </div>
            </div>
        </a>
    </div>
}
export default InsertGoodsDecorate;

