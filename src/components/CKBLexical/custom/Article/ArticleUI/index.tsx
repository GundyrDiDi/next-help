/*
 * @Author: shiguang
 * @Date: 2024-06-12 11:26:06
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-13 23:01:29
 * @Description: 
 */
import queryString from "query-string";
import { crossFetch } from "../../../utils/fetch";
import { useEffect, useState } from "react";

/* eslint-disable @next/next/no-img-element */


export interface ArticleUIProps {
    url?: string;
    onClick?: () => void;
}

const requestHelpCenterCateInfo = async(catePath: string) => {
    const data = await crossFetch<any>('/customer/base/supportCenter/query/byPath', {
        method: 'GET',
        query: {
            path: catePath
        }
    })
    return data?.data
} 

const requestFrogCenterArticleInfo = async(frogArticleId: string) => {
    const data = await crossFetch<any>('/customer/frog/article/detail', {
        method: 'GET',
        query: {
            frogArticleId
        }
    })
    const _data = data?.data

    return {
        title: _data.frogArticleTitle,
        description: _data?.frogArticleSubTitle,
        imageUrl: _data?.frogArticleImgUrl,
    }
} 


const getHelpArticleData = async (catePath: string, hash?: string) => {
    const data = await requestHelpCenterCateInfo(catePath);
    if(hash){
        const _hash = Number(hash) - 1;
        const resList =  data?.contentList ?? [];
        // resList[_hash].description
        // resList[_hash].seoDescription
        // resList[_hash].title
        return {
            title: resList[_hash].title,
            description: resList[_hash].seoDescription,
            imageUrl: 'https://img.alicdn.com/bao/uploaded/i3/665921469/O1CN01YeSwQp1MiqbRJB4kN_!!665921469.jpg',
        }
    }
    return {
        title: data.subject,
        description: data?.description,
        imageUrl: 'https://img.alicdn.com/bao/uploaded/i3/665921469/O1CN01YeSwQp1MiqbRJB4kN_!!665921469.jpg',
    }
}

/**
 * https://help.theckb.com/ja/oem
 * https://help.theckb.com/ja/oem#3
 * https://media.theckb.com/ja/article/300
 * 
 */
const useParseUrl = (url: string) => {

    const [state, setState] = useState<{title: string, imageUrl: string; description?: string}>();

    useEffect(() => {
        const urlObj = queryString.parseUrl(url, { parseFragmentIdentifier: true })
        const isHelp = urlObj.url.includes('help');
        // const isMedia = urlObj.url.includes('media');
        const hash = urlObj.fragmentIdentifier;
    
        const param = urlObj.url.split('/').pop()!
        if(isHelp){
            getHelpArticleData(param, hash).then((val) => {
                setState(val)
            })
            return;
        }
        requestFrogCenterArticleInfo(param).then((val) => {
            setState(val)
        })

    }, [url])

    return state
}

const ArticleUI = (props: ArticleUIProps) => {
    const { url, onClick } = props;
    const articleData = useParseUrl(url!)
    if(!articleData) return null;

    const { title, description, imageUrl } = articleData;
    const dom = <div className="flex border border-[#F0F0F0] p-[8px] bg-[white] rounded-[4px]" onClick={onClick} >
        <img className="w-[56px] h-[56px] rounded-[4px] shrink-0" src={imageUrl} alt="" />
        <div className="ml-[8px] grow " >
            <div className="mb-[8px] leading-[24px] font-[700] text-black/[.88] text-[16px] hover:text-[#008060]" >{title}</div>
            <div className="flex justify-between" >
                <div className="text-black/[.45] line-clamp-1 mr-[8px]">{description}</div>
                <div className="shrink-0 text-[#0586FE] text-[14px] underline" >
                    查看更多
                </div>
            </div>
        </div>
    </div>
    return <a className="cursor-pointer" href={url} target="_blank" >{dom}</a>
}
export default ArticleUI;