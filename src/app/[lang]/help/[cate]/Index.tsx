'use client'
import { useState } from "react"
import Breadcrumb from "../component/Breadcrumb";
import { useParams } from "next/navigation";
import './index.scss';

interface Props {
    contentList: {
        label: string;
        value: string;
    }[];
    isSearchPage?: boolean;
}

const Index = (props: Props) => {
    const { contentList, isSearchPage } = props
    const [activeValue, setActiveValue] = useState(contentList[0].value);
    const { lang } = useParams();

    return <div className="flex justify-center pad:px-[20px] mo:px-[0px]" >
        {/* <div className="pc:w-[1200px]" > */}
        {/* pc:px-[12px] pad:px-[12px] */}
        <div className="mo:w-[100%] pc:w-[1200px]" >
            <div className="mo:bg-white pc:mt-[16px] pad:mt-[16px]" >
                <Breadcrumb
                    className="mo:py-[16px] mo:px-[12px]"
                    dataSource={[
                        { title: 'TOP', href: 'https://s.theckb.com' },
                        { title: '帮助中心', href: `/${lang}/help` },
                        { title:  isSearchPage ? '搜索结果' : '注文关联TODO'},
                    ]}
                />
            </div>
            {isSearchPage ? <div className="mt-[24px] mo:mt-0" /> :
            <div className="my-[24px] mo:my-[8px] flex items-center mo:px-[12px]" >
                <div className="mr-[8px] mo:mr-[4px] w-[4px] h-[24px] bg-[var(--fcolor)]" />
                <div className="font-bold text-[24px] mo:text-[16px]" >FAQ</div>
            </div>}
            <div className="text-[14px] text-[#000] mb-[16px] overflow-hidden" >
                {/* 上边 */}
                <div className="mo:mx-[-16px] bg-white" >
                    <div className={`bg-white p-[20px] ${isSearchPage ? 'mo:py-[0px]' : 'mo:py-[12px]' }  mo:px-[12px] mb-[8px]`} >
                        {contentList.map((item, index) => {
                            return <div
                                className={`3333 mo:mx-[12px] font-bold rounded-[4px] h-[40px] box-border px-[8px] leading-[40px] hover:text-[var(--fcolor)] hover:bg-[rgba(var(--fcolor-rgb),0.10)] line-clamp-1 hover:cursor-pointer ${activeValue === item.value ? 'text-[var(--fcolor)] bg-[rgba(var(--fcolor-rgb),0.10)]' : ''}`}
                                key={item.value}
                                onClick={() => {
                                    window.location.hash = String(index+1)
                                    setActiveValue(item.value)
                                }}
                            >
                                {item.label}
                            </div>
                        })}
                    </div>
                </div>
                {/* 下边 mo:px-[12px] box-border */}
                <div className="mo:px-[12px]" >
                    {contentList.map((item, index) => {
                        return (
                            <div className="help-artical-content grow bg-white p-[20px] relative mo:p-[0px] mo:bg-[#FAFAFA]" key={index}>
                                <div className="absolute top-[-40px]" id={String(index+1)}  />
                                <div className="font-bold text-[24px] mo:text-[16px] text-[#000] mo:py-[12px] mo:leading-normal ">
                                    {item.label}
                                </div>
                                <div style={{ borderBottom: '1px solid #E6EAF0' }} className="mt-[20px] mb-[20px] mo:my-[0px]" />
                                <div className="text-[#000]/[.65]" dangerouslySetInnerHTML={{ __html: item.value ?? '' }} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    </div>
}
export default Index