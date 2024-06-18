/*
 * @Author: shiguang
 * @Date: 2024-06-13 20:42:43
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-18 15:41:27
 * @Description: 
 */

import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import LexicalTableOfContentsPlugin, { TableOfContentsEntry } from "@lexical/react/LexicalTableOfContents";
import { LexicalEditor, NodeKey } from "lexical";
import { useEffect, useState } from "react";
import TableOfcontent from "../../../Icon/components/TableOfcontent";
import { useSettings } from "../../../context/SettingsContext";
import { _writeSetContentDataFunction, _writeSetEditorFunction } from "./tools";

interface LexicalTableOfContentsRightSide {
    title: string;
    isInArtical?: boolean;
}
function scrollToTargetAdjusted(element: HTMLElement) {
    // var element = document.getElementById('targetElement');
    const headerOffset = 150;
    const elementPosition = element.getBoundingClientRect().top;
    // var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
}
const LexicalTableOfContentsRightSide = (props: LexicalTableOfContentsRightSide) => {
    const { title, isInArtical = false } = props;
    // const [editor] = useLexicalComposerContext();
    const [isShow, setIsShow] = useState(true)
    // const { settings } = useSettings()
    const [editor, setEditor] = useState<LexicalEditor>()
    const [contentData, setContentData] = useState<TableOfContentsEntry[]>()
    _writeSetContentDataFunction(setContentData)
    _writeSetEditorFunction(setEditor)
    useEffect(() => {
        console.log(editor, 'editor~~~')
    }, [editor])
    useEffect(() => {
        console.log(contentData, ' ~~~')
    }, [contentData])
    console.log(contentData, editor, 6666666)
    if (!contentData?.length) return;
    return <div className={`${isInArtical ? '' : 'pc:h-[370px] pad:h-[370px] overflow-y-auto'} bg-[#FAFAFA] p-[20px]`} >
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
            {!!title && <div className="mt-[16px] mb-[8px] text-[#000]/[.88] text-[16px] font-bold leading-[24px]" >{title}</div>}
            {/* <LexicalTableOfContentsPlugin> */}
            {((_data) => {
                let hList = [0, 0, 0, 0, 0, 0]
                function scrollToNode(key: NodeKey, currIndex?: number) {
                    editor?.getEditorState().read(() => {
                        const domElement = editor.getElementByKey(key);
                        if (domElement !== null) {
                            scrollToTargetAdjusted(domElement)
                            // domElement.scrollIntoView();
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
                        if (hNum === 1) return null;
                        return <div
                            onClick={() => scrollToNode(nodeKey)}
                            key={nodeKey}
                            style={{
                                paddingLeft: (hNum - 2) * 16
                            }}
                            className={`pl-[${(hNum - 2) * 16}px] cursor-pointer  
                            hover:bg-[var(--editor-frog-article-heading)]
                            text-[14px] ${hNum === 2 ? 'text-[#000]/[.88] font-[700] ' : ''
                                } ${hNum === 3 ? 'text-[#000]/[.65]' : ''} ${hNum === 4 ? 'text-[#000]/[.45]' : ''}  
                        hover:text-[var(--fcolor,#008060)] leading-[22px] mb-[8px] line-clamp-1
                `} >
                            {str} {title}
                        </div>
                    })}
                </div>
            })(contentData)}
            {/* </LexicalTableOfContentsPlugin> */}
        </>}
    </div>
}

export default LexicalTableOfContentsRightSide