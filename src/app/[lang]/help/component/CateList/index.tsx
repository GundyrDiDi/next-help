'use client'

/*
 * @Author: shiguang
 * @Date: 2024-04-08 11:47:37
 * @LastEditors: shiguang
 * @LastEditTime: 2024-04-11 14:59:44
 * @Description: 
 */

import Link from "next/link";
import { useParams } from "next/navigation";

interface CateListProps {
    contentType: 'text' | 'video' | 'search';
    label: string;
    value: string;
    childrenCateList?: CateListProps[];
    className?: string;
}

const FirstCate = (props: CateListProps) => {
    return <div className="p-[32px] bg-white" >
        <div className="flex h-[24px] items-center mb-[32px]" >
            <div className="w-[5px] h-[24px] bg-[var(--fcolor)] mr-[8px]" ></div>
            <div className="text-[24px]" >
                {props.label}
            </div>
        </div>
        <div className="flex flex-wrap pb-[-16px]" >
            {props.childrenCateList?.map((item, key) => {
                return <SecondCate contentType={props.contentType} label={item.label} value={item.value} key={key} className="mb-[16px] w-[33%]" />
            })}
        </div>
    </div>
}

interface SecondCateProps extends CateListProps {
    className?: string
}

const JumpHelpDetailLink = (props: { contentType: 'text' | 'video' | 'search'; lang: string; value: string; children: React.ReactNode; }) => {
    const { contentType, lang, value, children } = props;
    const getHref = () => {
        if(contentType === 'video'){
            return `/${lang}/help/video/${value}`
        }
        if(contentType === 'text'){
            return `/${lang}/help/${value}`
        }
        if(contentType === 'search'){
            return `/${lang}/help/search?keywords=${value}`
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

export const SecondCate = (props: SecondCateProps) => {
    const { lang } = useParams()
    const { className, label, value, contentType } = props;
    return <div className={className} >
        <div className="flex h-[24px] text-[20px] hover:text-[var(--fcolor)] text-[#000000]/[.88] cursor-pointer" >
            <div className="bg-[var(--fcolor)] w-[6px] h-[6px] rounded-[50%] mr-[6px] shrink-0 " />
            <span>
                <JumpHelpDetailLink contentType={contentType} lang={lang as string} value={value} >
                    {label}
                </JumpHelpDetailLink>
            </span>
        </div>
    </div>
}

const CateList = (props: CateListProps) => {
    const { label, childrenCateList } = props
    const { lang } = useParams()
    return <div>
        <div className={`${props.className} mo:hidden`} >
            <FirstCate {...props} />
        </div>
        <div className="pc:hidden pad:hidden mb-[16px]" >
            <div className="flex items-center h-[40px]" >
                <div className="w-[4px] h-[14px] bg-[var(--fcolor)] mr-[4px]" />
                <div className="text-[14px] font-bold" >{label}</div>
            </div>
            <div>
                {childrenCateList?.map((item, key) => {
                    return (
                        <div
                            key={key}
                            className="flex items-center h-[40px] hover:text-[var(--fcolor)] hover:bg-[rgba(var(--fcolor-rgb),0.10)] rounded-[4px]"
                        >
                            <div className="text-[14px] ml-[16px] text-[#000]/[.45]  " >
                                <JumpHelpDetailLink contentType={item.contentType} lang={lang as string} value={item.value} >
                                    {item.label}
                                </JumpHelpDetailLink>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    </div>
}

export default CateList;


