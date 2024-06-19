/*
 * @Author: shiguang
 * @Date: 2024-06-12 11:26:06
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-19 17:25:27
 * @Description: 
 */
import queryString from "query-string";
import { crossFetch, getInputUrlIsJenkinsTestEnv } from "../../../utils/fetch";
import { useEffect, useRef, useState } from "react";

/* eslint-disable @next/next/no-img-element */

const DEFAULT_ARTICLE_IMG_URL = 'https://static-s.theckb.com/BusinessMarket/helpCenter/lexicalImages/icons/theckbicon.png'
export interface ArticleUIProps {
    className?: string;
    url?: string;
    onClick?: () => void;
    onError?: () => void;
}

const requestHelpCenterCateInfo = async (catePath: string) => {
    const data = await crossFetch<any>('/customer/base/supportCenter/query/byPath', {
        method: 'GET',
        query: {
            path: catePath
        }
    }, { showError: false })
    if (data) {
        if (!data?.data?.createTime) {
            return Promise.reject({ msg: '链接解析失败' })
        }
        return data?.data
    }
}

const requestFrogCenterArticleInfo = async (frogArticleId: string) => {
    const data = await crossFetch<any>('/customer/frog/article/detail', {
        method: 'GET',
        query: {
            frogArticleId
        }
    }, { showError: false })
    const _data = data?.data

    return {
        title: _data.frogArticleTitle,
        description: _data?.frogArticleSubTitle,
        imageUrl: _data?.frogArticleImgUrl,
    }
}


const getHelpArticleData = async (catePath: string, hash?: string) => {
    const data = await requestHelpCenterCateInfo(catePath);
    if (hash) {
        const _hash = Number(hash) - 1;
        const resList = data?.contentList ?? [];
        return {
            title: resList[_hash].title,
            description: resList[_hash].seoDescription,
            imageUrl: DEFAULT_ARTICLE_IMG_URL,
        }
    }
    return {
        title: data.subject,
        description: data?.description,
        imageUrl: DEFAULT_ARTICLE_IMG_URL
    }
}

/**
 * https://help.theckb.com/ja/oem
 * https://help.theckb.com/ja/oem#3
 * https://media.theckb.com/ja/article/300
 * 
 */
const useParseUrl = (url: string, options: Pick<ArticleUIProps, 'onError'> = {}) => {
    const [state, setState] = useState<{ title: string, imageUrl: string; description?: string }>();
    const optionsRef = useRef(options)
    useEffect(() => {
        const urlObj = queryString.parseUrl(url, { parseFragmentIdentifier: true })
        const isHelp = (() => {
            if (getInputUrlIsJenkinsTestEnv(url)) {
                if (urlObj.url.includes('article')) {
                    return false
                } else {
                    return true
                }
            }
            return urlObj.url.includes('help')
        })();
        const onError = () => {
            optionsRef.current?.onError?.();
        }
        // const isMedia = urlObj.url.includes('media');
        const hash = urlObj.fragmentIdentifier;
        const param = urlObj.url.split('/').pop()!
        if (isHelp) {
            getHelpArticleData(param, hash).then((val) => {
                setState(val)
            }).catch(onError)
            return;
        }
        requestFrogCenterArticleInfo(param).then((val) => {
            setState(val)
        }).catch(onError)

    }, [url])

    return state
}

const ArticleUI = (props: ArticleUIProps) => {
    const { url, onClick, onError, className } = props;
    const articleData = useParseUrl(url!, { onError })
    if (!articleData) return null;

    const { title, description, imageUrl } = articleData;
    const dom = <div className={`flex border border-[#F0F0F0] p-[8px] bg-[white] rounded-[4px] ${className ?? ''} group`} onClick={onClick} >
        <img className="w-[56px] h-[56px] rounded-[4px] shrink-0" src={imageUrl} alt="" />
        <div className="ml-[8px] grow " >
            <div className="mb-[8px] leading-[24px] font-[700] text-black/[.88] text-[16px] group-hover:text-[var(--fcolor,#008060)]" >{title}</div>
            <div className="flex justify-between" >
                {!!description && <div className="text-black/[.45] line-clamp-1 mr-[8px]">{description}</div>}
                <div className="shrink-0 text-[#0586FE] text-[14px] underline" >
                    查看更多
                </div>
            </div>
        </div>
    </div>
    return <a className="cursor-pointer" href={url} target="_blank" >{dom}</a>
}
export default ArticleUI;