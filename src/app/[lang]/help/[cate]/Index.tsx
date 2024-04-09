'use client'
import { request } from "@/config/request";
import axios from "axios";
import { useEffect, useState } from "react"

interface Props {
    contentList: {
        label: string;
        value: string;
    }[];
}

const Index = (props: Props) => {
    const { contentList } = props
    const [activeValue, setActiveValue] = useState(contentList[0].value);
    const [contentItem, setContentItem] = useState<string>();

    useEffect(() => {
        if (!activeValue) {
            setContentItem(undefined);
            return;
        }
        console.log(typeof window, 33333)
        axios({
            url: activeValue,
            method: 'get'
          }).then(res => {
            setContentItem(res.data.replaceAll('&nbsp;', ' '));
          })

        fetch(activeValue).then((res) => res.json()).then((val) => {
            const value = val.data;
            setContentItem(value);
        });

    }, [activeValue])

    const itemTitle = contentList.find(item => item.value === activeValue)?.label;

    return <div className="flex justify-center" >
        <div className="w-[1200px] flex-col" >
            <div className="my-[24px] flex items-center" >
                <div className="mr-[8px] w-[5px] h-[24px] bg-[#008060]" />
                <div className="font-bold text-[24px]" >FAQ</div>
            </div>
            <div className="flex text-[14px] text-[#000] mb-[16px]" >
                {/* 左边 */}
                <div className="w-[290px] mr-[16px] bg-white p-[20px] h-fit" >
                    {contentList.map(item => {
                        return <div
                            className="font-bold rounded-[4px] h-[40px] box-border px-[8px] leading-[40px] hover:text-[#008060] hover:bg-[#008060]/[0.10] line-clamp-1 hover:cursor-pointer"
                            key={item.value}
                            onClick={() => {
                                setActiveValue(item.value)
                            }}
                        >
                            {item.label}
                        </div>
                    })}
                </div>
                {/* 右边 */}
                <div className="grow bg-white p-[20px]" >
                    <div className="font-bold text-[24px] text-[#000]" >
                        {itemTitle}
                    </div>
                    <div style={{ borderBottom: '1px solid #E6EAF0' }} className="mt-[20px] mb-[20px]" />
                    <div className="text-[#000]/[.65]" dangerouslySetInnerHTML={{ __html: contentItem ?? '' }} />
                </div>
            </div>
        </div>
    </div>
}
export default Index