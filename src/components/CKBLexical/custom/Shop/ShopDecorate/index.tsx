/*
 * @Author: shiguang
 * @Date: 2024-06-12 19:35:48
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-20 11:16:57
 * @Description: 
 */
import { Tooltip, message } from "antd";
import { shopToolBarEmitter } from "../ShopToolBar";
import ShopUI, { ShopUIProps } from "../ShopUI"
import { crossFetch } from "../../../utils/fetch";
import { useCallback, useEffect, useRef, useState } from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $getNodeByKey } from "lexical";
import useLexicalEditable from "@lexical/react/useLexicalEditable";
import { CAN_USE_DOM } from "../../../utils/environment";

interface ShopDecorateProps {
    nodeKey: string;
    options: Pick<ShopUIProps, 'urlList'> & {
        __elementType: string;
    };
}
const onClick = (nodeKey: string) => {
    shopToolBarEmitter.emit('editShop', nodeKey)
}

export interface ListDataItem {
    shopName: string;
    iconUrl: string;
    originShopUrl?: string;
    productList: {
        mainImgUrl: string;
        originProductUrl?: string;
        cny: string;
        jpy: string;
    }[];
}

const mockShopList = [
    {
        url: 'https://wbaibu.1688.com',
        code: '',
    },
    {
        url: 'https://wbaibu.1688.com',
        code: '',
    },
];

export const requestShopInfoByUrl = async (url: string) => {
    const data = await crossFetch<any>('/goods/supplierShop/qryShopAndProductsByShopUrl', {
        method: 'POST',
        body: {
            shopUrl: url,
            shopCode: ''
        }
    }, {
        requestInterceptor(config) {
            const headers = config.headers as any;
            delete headers['x-authtoken'];
            return config;
        },
        showError: false,
        interceptErrorCode: false,
    })
    return data;
}


const requestShopInfoListByUrlList = async (urlList: string[]) => {
    const dataList = await Promise.all(urlList.map(code => requestShopInfoByUrl(code)));
    const errList = dataList.reduce((pre, cur, index) => {
        if (cur.code !== '0') {
            pre.push(`第${index + 1}个链接请求失败：${urlList[index]}，【${cur.msg}】`)
        }
        return pre;
    }, [] as string[])

    if (errList.length) {
        return Promise.reject(errList)
    }
    return dataList.map(data => {
        return data.data
    })
}


//   curl 'https://master-gateway.theckb.com/goods/supplierShop/qryShopAndProductsByShopUrl' \
//   -H 'Accept-Language: en,zh-CN;q=0.9,zh;q=0.8' \
//   -H 'Connection: keep-alive' \
//   -H 'DNT: 1' \
//   -H 'Origin: http://localhost:3000' \
//   -H 'Referer: http://localhost:3000/' \
//   -H 'Sec-Fetch-Dest: empty' \
//   -H 'Sec-Fetch-Mode: cors' \
//   -H 'Sec-Fetch-Site: cross-site' \
//   -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36' \
//   -H 'accept: application/json, text/plain, */*' \
//   -H 'content-type: application/json' \
//   -H 'sec-ch-ua: "Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"' \
//   -H 'sec-ch-ua-mobile: ?0' \
//   -H 'sec-ch-ua-platform: "macOS"' \
//   -H 'x-authtoken: eyJhbGciOiJIUzI1NiJ9.eyJuaWNrIjoiYWRtaW4iLCJleHAiOjE3MTg4NjYzMjIsInVzZXJJZCI6Ijg4ODg4ODg4ODg4ODg4ODg4OCIsInVzZXJuYW1lIjoiYWRtaW4ifQ.RiGAJEyF3lkRfrQ-WpXRCTTQ868JyB4b7BsN6xAdJ_4' \
//   -H 'x-gray-tag: 20240606-fogseo2' \
//   -H 'x-stationcode: JapanStation' \
//   --data-raw '{"shopUrl":"https://wbaibu.1688.com","shopCode":""}'


// curl 'https://master-gateway.theckb.com/goods/supplierShop/qryShopAndProductsByShopUrl' \
//   -H 'Accept: */*' \
//   -H 'Accept-Language: zh-CN,zh;q=0.9,ja;q=0.8,en;q=0.7,zh-TW;q=0.6' \
//   -H 'Connection: keep-alive' \
//   -H 'Content-Type: application/json' \
//   -H 'Cookie: UM_distinctid=18ec0e6917b581-0061bdf59d256a-26001a51-1fa400-18ec0e6917c839; _tt_enable_cookie=1; _ttp=vU6gzlPX-MbxspigSs220YryH0A; _fbp=fb.1.1712652687944.2026498146; ch-veil-id=5c0513e5-4205-4596-83dd-26e05a5ec50f; _yjsu_yjad=1714959739.2bdf62e3-f94a-4b06-a553-515620cbf273; _ga=GA1.1.675687320.1712633320; _ga_Y6P76E35HF=GS1.1.1717047767.32.0.1717047767.0.0.0; _ga_MF27PKEQN1=GS1.1.1717047767.31.0.1717047767.0.0.0; _gcl_au=1.1.404663075.1712633320.672161920.1717586670.1717588803; Hm_lvt_ab0160471da6966771bd90e51f449d6e=1716962861,1718095120; Hm_lpvt_ab0160471da6966771bd90e51f449d6e=1718160583; pre_route%2Fplat=d2c; test_route%2Fplat=d2c; test_route%2Ftoken=eyJhbGciOiJIUzI1NiJ9.eyJjdXN0b21lclN5c3RlbVNvdXJjZSI6MSwiY3VzdG9tZXJJZCI6NzI0NzAsImV4cCI6MTcxODc4NzAxNywiY3VzdG9tZXJOYW1lIjoidGVzdEFQSTExMzMzMzMzMzMyIiwidW5pZmljYXRpb25DdXN0b21lckZ1bGxOYW1lIjoidGVzdEFwaSJ9.-ZviVD3tk2BTkLbaKfZ379A7ZPqUjMM3rR4iwzNIg6U; _clck=18lzsu9%7C2%7Cfmm%7C0%7C1560; _ga_GJ3Z74XKNH=GS1.1.1718335309.157.1.1718335349.20.0.652807020' \
//   -H 'Origin: https://master-gateway.theckb.com' \
//   -H 'Referer: https://master-gateway.theckb.com/goods/doc.html' \
//   -H 'Request-Origion: Knife4j' \
//   -H 'Sec-Fetch-Dest: empty' \
//   -H 'Sec-Fetch-Mode: cors' \
//   -H 'Sec-Fetch-Site: same-origin' \
//   -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36' \
//   -H 'X-AuthToken: eyJhbGciOiJIUzI1NiJ9.eyJjdXN0b21lclN5c3RlbVNvdXJjZSI6MSwiY3VzdG9tZXJJZCI6NzI0NzAsImV4cCI6MTcxODc4NzAxNywiY3VzdG9tZXJOYW1lIjoidGVzdEFQSTExMzMzMzMzMzMyIiwidW5pZmljYXRpb25DdXN0b21lckZ1bGxOYW1lIjoidGVzdEFwaSJ9.-ZviVD3tk2BTkLbaKfZ379A7ZPqUjMM3rR4iwzNIg6U' \
//   -H 'sec-ch-ua: "Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"' \
//   -H 'sec-ch-ua-mobile: ?0' \
//   -H 'sec-ch-ua-platform: "Windows"' \
//   -H 'x-gray-tag: 20240606-fogseo2' \
//   --data-raw $'{"shopCode": "","shopUrl": "https://wbaibu.1688.com"}'




// curl 'https://master-gateway.theckb.com/goods/supplierShop/qryShopAndProductsByShopUrl' \
//   -H 'Accept-Language: en,zh-CN;q=0.9,zh;q=0.8' \
//   -H 'Connection: keep-alive' \
//   -H 'DNT: 1' \
//   -H 'Origin: http://localhost:3000' \
//   -H 'Referer: http://localhost:3000/' \
//   -H 'Sec-Fetch-Dest: empty' \
//   -H 'Sec-Fetch-Mode: cors' \
//   -H 'Sec-Fetch-Site: cross-site' \
//   -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36' \
//   -H 'accept: application/json, text/plain, */*' \
//   -H 'content-type: application/json' \
//   -H 'sec-ch-ua: "Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"' \
//   -H 'sec-ch-ua-mobile: ?0' \
//   -H 'sec-ch-ua-platform: "macOS"' \
//   -H 'X-AuthToken: eyJhbGciOiJIUzI1NiJ9.eyJjdXN0b21lclN5c3RlbVNvdXJjZSI6MSwiY3VzdG9tZXJJZCI6NzI0NzAsImV4cCI6MTcxODc4NzAxNywiY3VzdG9tZXJOYW1lIjoidGVzdEFQSTExMzMzMzMzMzMyIiwidW5pZmljYXRpb25DdXN0b21lckZ1bGxOYW1lIjoidGVzdEFwaSJ9.-ZviVD3tk2BTkLbaKfZ379A7ZPqUjMM3rR4iwzNIg6U' \
//   -H 'x-gray-tag: 20240606-fogseo2' \
//   --data-raw '{"shopCode": "","shopUrl": "https%3A%2F%2Fwbaibu.1688.com"}'


const thirdPlateIconConf: Record<string, any> = {
    TB: 'https://static-s.theckb.com/BusinessMarket/App/Icon/h5商详推广页logo/淘宝.png',
    AM: 'https://static-s.theckb.com/BusinessMarket/App/Icon/h5商详推广页logo/1688.png',
    TM: 'https://static-s.theckb.com/BusinessMarket/App/Icon/h5商详推广页logo/天猫.png',
    VC: 'https://static-s.theckb.com/BusinessMarket/App/Icon/h5商详推广页logo/市场购.png',
    WS: 'https://static-s.theckb.com/BusinessMarket/App/Icon/h5商详推广页logo/市场购.png'
    // VC: 'https://static-s.theckb.com/BusinessMarket/App/Icon/h5商详推广页logo/搜款网.png',
    // WS: 'https://static-s.theckb.com/BusinessMarket/App/Icon/h5商详推广页logo/网商园.png'
};

const useShopListData = (urlList: ShopUIProps['urlList'], onErrorRef: React.MutableRefObject<() => void>) => {
    const [listDta, setListData] = useState<ListDataItem[]>();

    useEffect(() => {
        if (!urlList?.length) return;
        const urls = urlList.map(item => item.url);
        requestShopInfoListByUrlList(urls).then((res) => {
            const data = res.map(item => {
                return {
                    iconUrl: thirdPlateIconConf[item.platformType!],
                    // shopName: item.originalShopName,
                    shopName: item.supplierShopName,
                    originShopUrl: item.shopUrl,

                    productList: item.productList?.slice(0, 3)?.map((it: any) => {
                        return {
                            mainImgUrl: it.productMainImg,
                            originProductUrl: it.productDetailUrl,
                            cny: it.productSellPrice,
                            //  TODO
                            jpy: (() => {
                                const www: any = window;
                                if (!CAN_USE_DOM || !it.productSellPrice || !www?.calcByCnyPrice) return '**';
                                return www.calcByCnyPrice?.(it.productSellPrice);
                            })()


                        }
                    }) ?? []
                }
            });
            setListData(data);
        }).catch(errList => {
            if (Array.isArray(errList)) {
                message.warning(errList.join('\n'))
                onErrorRef.current();
            }
        });;
    }, [urlList, onErrorRef])
    return listDta;
}

const ShopDecorate = (props: ShopDecorateProps) => {
    const [editor] = useLexicalComposerContext();
    const isEditable = useLexicalEditable()

    const onErrorRef = useRef<() => void>(() => { })
    const removeNode = () => {
        editor.update(() => {
            const node = $getNodeByKey(props.nodeKey);
            node?.remove();
        })
    }
    onErrorRef.current = removeNode;
    const listData = useShopListData(props.options.urlList, onErrorRef)
    console.log('useShopListData', listData, isEditable)
    const dom = <div>
        <ShopUI listData={listData} />
    </div>
    if (!isEditable) {
        return dom
    }
    return <Tooltip
        arrow={false}
        title={
            <div>
                <span onClick={() => onClick(props.nodeKey)} className=" cursor-pointer" >
                    编辑
                </span>
                <span onClick={removeNode} className="cursor-pointer ml-[16px]" >
                    删除
                </span>
            </div>
        }
    >
        {dom}
    </Tooltip>


}

export default ShopDecorate