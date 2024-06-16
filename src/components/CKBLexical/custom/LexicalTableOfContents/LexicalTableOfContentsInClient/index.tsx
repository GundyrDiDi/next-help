/*
 * @Author: shiguang
 * @Date: 2024-06-13 20:42:43
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-17 01:05:09
 * @Description: 
 */

import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import LexicalTableOfContentsPlugin from "@lexical/react/LexicalTableOfContents";
import { NodeKey } from "lexical";
import { useEffect, useState } from "react";
import TableOfcontent from "../../../Icon/components/TableOfcontent";
import { useSettings } from "../../../context/SettingsContext";
import { setContentData, setEditor } from "../LexicalTableOfContentsRightSide/tools";

interface LexicalTableOfContentsInClient {
    title: string;
    isInArtical?: boolean;
}
const LexicalTableOfContentsInClient = (props: LexicalTableOfContentsInClient) => {
    const { title, isInArtical = false } = props;
    const [editor] = useLexicalComposerContext();
    const [isShow, setIsShow] = useState(true)
    const { settings } = useSettings()
    useEffect(() => {
        if(editor){
            debugger
            setEditor?.(editor)
        }
    }, [editor])
    return <div className={`${isInArtical ? '' : 'pc:h-[370px] pad:h-[370px] overflow-y-auto' } bg-[#FAFAFA] p-[20px]`} >
        <div className="flex items-center">
            <TableOfcontent className="h-[28px]" height={28} width={22} viewBox={undefined} />
            <span className="font-bold text-[#008060] text-[24px] leading-[32px] pl-[8px] pr-[4px]" >目录</span>
            <span
                className="h-[22px] font-normal text-neutral-700 text-[14px] leading-[22px] cursor-pointer"
                onClick={() => {
                    setIsShow(data => !data)
                }}
            >
                {isShow ? '[关闭]' : '[打开]'}
            </span>
        </div>
        {isShow && <>
            {!!settings.articleTitle && <div className="mt-[16px] mb-[8px] text-[#000]/[.88] text-[16px] font-bold leading-[24px]" >{settings.articleTitle}</div>}
            <LexicalTableOfContentsPlugin>
                {(_data) => {
                    setContentData?.(_data);
                    let hList = [0, 0, 0, 0, 0, 0]
                    function scrollToNode(key: NodeKey, currIndex?: number) {
                        editor.getEditorState().read(() => {
                            const domElement = editor.getElementByKey(key);
                            if (domElement !== null) {
                                domElement.scrollIntoView();
                            }
                        });
                    }
                    return <div className="" >
                        {_data.map((item, key) => {
                            const [nodeKey, title, hStr] = item;
                            // 当前 tag 转成 number
                            const hNum = Number(hStr[1]);
                            hList = hList.map((_, idx) => {
                                // 匹配档当前相同 + 1
                                if (idx === hNum) return _ + 1;
                                // 之前的 tag 数字不变
                                if (idx < hNum) return _;
                                // 后面的置为 0
                                return 0
                            })
                            const str = hList.slice(2, hNum + 1).join('.')
                            if(hNum === 1) return null;
                            return <div
                                onClick={() => scrollToNode(nodeKey)}
                                key={nodeKey}
                                style={{
                                    paddingLeft: (hNum - 2) * 16
                                }}
                                className={`pl-[${(hNum - 2) * 16}px] cursor-pointer  hover:bg-[#008060]/[.1] text-[14px] ${hNum === 2 ? 'text-[#000]/[.88] font-[700] ' : ''
                                    } ${hNum === 3 ? 'text-[#000]/[.65]' : ''} ${hNum === 4 ? 'text-[#000]/[.45]' : ''}  
                 hover:text-[#008060]/[.88] leading-[22px] mb-[8px] line-clamp-1
                `} >
                                {str} {title}
                            </div>
                        })}
                    </div>
                }}
            </LexicalTableOfContentsPlugin>
        </>}
    </div>
}

export default LexicalTableOfContentsInClient