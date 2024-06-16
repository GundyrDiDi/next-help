/*
 * @Author: shiguang
 * @Date: 2024-06-12 19:35:48
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-13 23:09:18
 * @Description: 
 */
/*
 * @Author: shiguang
 * @Date: 2024-06-12 19:35:48
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-12 19:38:26
 * @Description: 
 */
import { Tooltip } from "antd";
import { productToolBarEmitter } from "../ProductToolBar";
import ProductUI, { ProductUIProps } from "../ProductUI"
import { crossFetch } from "../../../utils/fetch";
import { useEffect, useState } from "react";

const thirdPlateIconConf: Record<string, any> = {
	TB: 'https://static-s.theckb.com/BusinessMarket/App/Icon/h5商详推广页logo/淘宝.png',
	AM: 'https://static-s.theckb.com/BusinessMarket/App/Icon/h5商详推广页logo/1688.png',
	TM: 'https://static-s.theckb.com/BusinessMarket/App/Icon/h5商详推广页logo/天猫.png',
	VC: 'https://static-s.theckb.com/BusinessMarket/App/Icon/h5商详推广页logo/市场购.png',
	WS: 'https://static-s.theckb.com/BusinessMarket/App/Icon/h5商详推广页logo/市场购.png'
	// VC: 'https://static-s.theckb.com/BusinessMarket/App/Icon/h5商详推广页logo/搜款网.png',
	// WS: 'https://static-s.theckb.com/BusinessMarket/App/Icon/h5商详推广页logo/网商园.png'
};

const testCase = [
    {
        url: 'https://s.theckb.com/ja/goods/AM-610878291823',
        code: 'AM-103574988'
    },
    {
        url: 'https://detail.1688.com/offer/733882229114.html?spm=a260k.dacugeneral.0.0.663335e4Pkv2QG&resultType=normal',
        code: 'AM-1043676263'
    },
    // {
    //     url: 'https://detail.tmall.com/item.htm?id=545199877176&spm=a21bo.jianhua/b.201876.d10.5af92a89Xa0lEm&scm=1007.40986.369799.0&pvid=be07d886-d61b-4c98-8d69-879aa82d9031',
    //     code: 'AM-1043678304'
    // },
    // {
    //     url: 'https://detail.tmall.com/item.htm?spm=875.7931836.0.0.66144265lWFLDW&scm=1007.12710.81708.111&id=777498332862&pvid=399fcd07-2570-4e70-a700-1dd45b82855f',
    //     code: 'AM-1106175048'
    // },
    // {
    //     url: 'https://s.theckb.com/ja/goods/AM-1255752551',
    //     code: 'AM-1108851844'
    // },
]




const requestProductInfoByUrl = async (url: string) => {
    const data = await crossFetch<any>('/goods/search/url', {
        method: 'POST',
        body: {
            detailUrl: url
        }
    })
    return data;
}

const requestProductInfoByCode = async (url: string) => {
    const data = await crossFetch<any>('/goods/product/detail', {
        method: 'POST',
        body: {
            productCode: url
        }
    }, {
        requestInterceptor(config) {
            const headers = config.headers as any;
            delete headers['x-authtoken'];
            return config;
        },
    })
    return data;
}

const requestProductInfoListByCodeList = async (codeList: string[]) => {
    const dataList = await Promise.all(codeList.map(code => requestProductInfoByCode(code)));
    return dataList.map(data => {
        return data.data
    })
}

const requestProductInfoListByUrlList = async (urlList: string[]) => {
    const dataList = await Promise.all(urlList.map(url => requestProductInfoByUrl(url)));
    return dataList.map(data => {
        return data.data
    })
}
export interface ListDataItem {
    iconUrl: string;
    mainImgUrl: string;
    title: string;
    cny: string;
    jpy: string;
}[];
export const useProductListData = (urlList: ProductUIProps['urlList'] | undefined) => {
    const [listDta, setListData] = useState<ListDataItem[]>();
    useEffect(() => {
        if (!urlList?.length) return;
        const urls = urlList.map(item => item.url);
        const productCodeList = urlList.map(item => item.code);
        // if(getSubHostName() === 'system'){
        //     requestProductInfoListByUrlList(urls).then((res) => {
        //         console.log(res, 'res')
        //     });
        // }
        requestProductInfoListByCodeList(productCodeList).then((res) => {
            const data = res.map(item => {
                return {
                        iconUrl: thirdPlateIconConf[item.platformType!],
                        mainImgUrl: item.productMainImg,
                        title: item.productTitle,
                        cny: item.productSellPriceRange,
                        // TODO 需要做处理
                        jpy: item.productSellPriceRange,
                }
            });
            setListData(data);
        });
    }, [urlList])



    return listDta;

    return [
        {
            iconUrl: 'https://static-s.theckb.com/BusinessMarket/App/Icon/h5商详推广页logo/1688.png',
            mainImgUrl: 'https://img.pddpic.com/mms-material-img/2021-08-15/f95364d1-f106-4064-8b5f-7cd64eb209d8.jpeg.a.jpeg',
            title: '0オールインワンメイクアップギフトセットは、女性のためのすべてのメイクアップキットを運ぶ大きなメイクアップキットボックスフル',
            cny: '20',
            jpy: '499'
        },
        {
            iconUrl: 'https://static-s.theckb.com/BusinessMarket/App/Icon/h5商详推广页logo/1688.png',
            mainImgUrl: 'https://img.pddpic.com/mms-material-img/2021-08-15/f95364d1-f106-4064-8b5f-7cd64eb209d8.jpeg.a.jpeg',
            title: '1オールインワンメイクアップギフトセットは、女性のためのすべてのメイクアップキットを運ぶ大きなメイクアップキットボックスフル',
            cny: '20',
            jpy: '499'
        },
        {
            iconUrl: 'https://static-s.theckb.com/BusinessMarket/App/Icon/h5商详推广页logo/1688.png',
            mainImgUrl: 'https://img.pddpic.com/mms-material-img/2021-08-15/f95364d1-f106-4064-8b5f-7cd64eb209d8.jpeg.a.jpeg',
            title: '2オールインワンメイクアップギフトセットは、女性のためのすべてのメイクアップキットを運ぶ大きなメイクアップキットボックスフル',
            cny: '20',
            jpy: '499'
        },
        {
            iconUrl: 'https://static-s.theckb.com/BusinessMarket/App/Icon/h5商详推广页logo/1688.png',
            mainImgUrl: 'https://img.pddpic.com/mms-material-img/2021-08-15/f95364d1-f106-4064-8b5f-7cd64eb209d8.jpeg.a.jpeg',
            title: '3オールインワンメイクアップギフトセットは、女性のためのすべてのメイクアップキットを運ぶ大きなメイクアップキットボックスフル',
            cny: '20',
            jpy: '499'
        },
        {
            iconUrl: 'https://static-s.theckb.com/BusinessMarket/App/Icon/h5商详推广页logo/1688.png',
            mainImgUrl: 'https://img.pddpic.com/mms-material-img/2021-08-15/f95364d1-f106-4064-8b5f-7cd64eb209d8.jpeg.a.jpeg',
            title: '4オールインワンメイクアップギフトセットは、女性のためのすべてのメイクアップキットを運ぶ大きなメイクアップキットボックスフル',
            cny: '20',
            jpy: '499'
        }

    ]
}


interface ProductDecorateProps {
    nodeKey: string;
    options: ProductUIProps & {
        __elementType: string;
    };
}
const onClick = (nodeKey: string) => {
    productToolBarEmitter.emit('editProduct', nodeKey)
}
const ProductDecorate = (props: ProductDecorateProps) => {
    const listData = useProductListData(props.options.urlList)
    return <Tooltip
        arrow={false}
        title={
            <span onClick={() => onClick(props.nodeKey)} className=" cursor-pointer" >
                编辑
            </span>
        } >
        <div>
            <ProductUI urlList={props.options.urlList} listData={listData} />
        </div>
    </Tooltip>
}

export default ProductDecorate