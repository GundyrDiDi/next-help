/*
 * @Author: shiguang
 * @Date: 2024-05-23 18:03:08
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-14 10:47:41
 * @Description: 
 */
import { $createTextNode, $getSelection, $isRangeSelection, LexicalEditor, RangeSelection } from 'lexical';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useSelectionChange } from '../../hooks/useSelectionChange';
import { $isTableSelection } from '@lexical/table';
import TooltipWithMenu from '../../../../components/TooltipWithMenu';
import { getSelectedNode } from '../../../../utils/getSelectedNode';
import { $createLinkNode, $isLinkNode } from '@lexical/link';
import LinkIcon from "../../../../Icon/components/Link";
import LinkEditPanel, { LinkValue } from './components/LinkEditPanel';
import { useSelectionEditPanelContentSetDom } from '../../../../components/SelectionEditPanelContainer';

interface HeadingMenuProps {
    activeEditor: LexicalEditor;
}

const Link = (props: HeadingMenuProps) => {
    const { activeEditor } = props;
    const [showPanel, setShowPanel] = useState(false);
    const [isLink, setIsLink] = useState(false);
    const setSelectionEditPanelContentDom = useSelectionEditPanelContentSetDom()
    const [linkValue, setLinkValue] = useState<LinkValue>();

    useSelectionChange(activeEditor, () => {
        const selection = $getSelection();
        if (!selection) return;
        if ($isRangeSelection(selection) || $isTableSelection(selection)) {
            const node = getSelectedNode(selection as RangeSelection);
            const parent = node.getParent();
            const okNode =  $isLinkNode(parent) || $isLinkNode(node)
            if ($isLinkNode(parent) || $isLinkNode(node)) {
                if($isLinkNode(parent)){
                    setLinkValue({
                        title: parent.getTextContent(),
                        url: parent.getURL()
                    })
                }else if($isLinkNode(node)){
                    setLinkValue({
                        title: node.getTextContent(),
                        url: node.getURL()
                    })
                }

                setIsLink(true);
            } else {
                setIsLink(false);
            }
        }
    })

    const linkEditPanelDom = useCallback((_isLink: boolean) => {
        return _isLink ? <LinkEditPanel
            onChange={(val) => {
                console.log(val, 'onChange');
                setLinkValue(val)
            }}
            value={linkValue}
            onOk={(value) => {
                activeEditor.update(() => {
                    const selection = $getSelection()!
                    if(!selection) return;
                    const linkNode = $createLinkNode(value!.url!, {}).append($createTextNode(linkValue?.title));
                    selection.insertNodes([
                        linkNode
                    ]);
                    setLinkValue(undefined)
                    setIsLink(false)
                    return true
                })
            }}
        /> : null
    }, [activeEditor, linkValue]);


    useEffect(() => {
        setSelectionEditPanelContentDom(
            linkEditPanelDom(isLink)
        )
    }, [linkEditPanelDom, setSelectionEditPanelContentDom, isLink])

    // useEffect={}
    return (
        <div>
            <TooltipWithMenu isShowToolTip title="链接">
                <button 
                    className={`h-[32px] w-[32px] cursor-pointer hover:bg-[#f0f0f0] flex items-center justify-center rounded-[8px] ${isLink ? 'hover:bg-[#f0f0f0]' : ''}`} 
                    onClick={() => {
                        activeEditor.update(() => {
                            const selection = $getSelection()
                            if(!selection) return;
                            if(selection.isCollapsed()){
                                setLinkValue(undefined);
                                return
                            }
                            const text = selection.getTextContent()
                            setLinkValue({ title: text });
                        })
                        setSelectionEditPanelContentDom(linkEditPanelDom(true))
                        setIsLink(true)
                    }}
                >
                    <LinkIcon/>
                </button>
            </TooltipWithMenu>
        </div>
    );
}
export default Link;