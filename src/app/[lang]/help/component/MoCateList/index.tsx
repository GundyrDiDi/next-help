/*
 * @Author: shiguang
 * @Date: 2024-04-08 11:47:37
 * @LastEditors: shiguang
 * @LastEditTime: 2024-04-26 23:13:41
 * @Description: 
 */
'use client'


import Link from "next/link";
import { useParams } from "next/navigation";
import { useTranslation } from "react-i18next";

interface CateListProps {
    contentType: 'text' | 'video' | 'search';
    label: string;
    value: string;
    childrenCateList?: CateListProps[];
    className?: string;
    isShowHTag?: boolean;
}


const JumpHelpDetailLink = (props: { contentType: 'text' | 'video' | 'search'; lang: string; value: string; children: React.ReactNode; }) => {
    const { contentType, lang, value, children } = props;
    const getHref = () => {
        if (contentType === 'video') {
            return `/${lang}/video/${value}`
        }
        if (contentType === 'text') {
            return `/${lang}/${value}`
        }
        if (contentType === 'search') {
            return `/${lang}/search?keywords=${value}`
        }
        const other: never = contentType
        throw Error(other)
    }
    return (
        <Link href={getHref()} className="line-clamp-1 mr-[8px]" >
            {children}
        </Link>
    );
}



const MoCateList = (props: CateListProps) => {
    const { label, childrenCateList, isShowHTag } = props
    const { lang } = useParams()
    const { t } = useTranslation();

    return (
        <div>
            <div className="pc:hidden pad:hidden mb-[16px]" >
                <div className="flex items-center h-[40px] mo:ml-[12px]" >
                    <div className="w-[4px] h-[14px] bg-[var(--fcolor)] mr-[4px]" />
                    {isShowHTag ? <h2 className="text-[14px] font-bold" >{t(label)}</h2> : <div className="text-[14px] font-bold" >{t(label)}</div>}
                </div>
                <div>
                    {childrenCateList?.map((item, key) => {
                        const jumpLinkDom = <JumpHelpDetailLink contentType={item.contentType} lang={lang as string} value={item.value} >
                            {item.label}
                        </JumpHelpDetailLink>
                        return (
                            <div
                                key={key}
                                className="flex items-center h-[40px] hover:text-[var(--fcolor)] hover:bg-[rgba(var(--fcolor-rgb),0.10)] rounded-[4px]"
                            >
                                {isShowHTag ?
                                    <h3 className="text-[14px] ml-[16px] text-[#000]/[.45] font-normal" >
                                        {jumpLinkDom}
                                    </h3> :

                                    <div className="text-[14px] ml-[16px] text-[#000]/[.45] font-normal" >
                                        {jumpLinkDom}
                                    </div>
                                }
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default MoCateList;


