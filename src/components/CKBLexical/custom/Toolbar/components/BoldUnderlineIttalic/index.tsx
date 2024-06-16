import TooltipWithMenu from "../../../../components/TooltipWithMenu";
import { BoldOutlined, ItalicOutlined, LinkOutlined, StrikethroughOutlined, UnderlineOutlined } from "@ant-design/icons";
import { $getSelection, $isRangeSelection, FORMAT_TEXT_COMMAND, LexicalEditor } from "lexical";
import { useState } from "react";
import { useSelectionChange } from "../../hooks/useSelectionChange";
import { $getSelectionStyleValueForProperty, $patchStyleText, $setBlocksType } from "@lexical/selection";
import { $createQuoteNode, QuoteNode } from "@lexical/rich-text";
import { $getNearestNodeOfType } from "@lexical/utils";
import { $isLinkNode, LinkNode, TOGGLE_LINK_COMMAND } from "@lexical/link";
import { Button, Input, Modal } from "antd";
import Bold from "../../../../Icon/components/Bold";
import Italic from "../../../../Icon/components/Italic";
import Underline from "../../../../Icon/components/Underline";
import Strikethrough from "../../../../Icon/components/Strikethrough";
import Highlight from "../../../../Icon/components/Highlight";

const SUPPORTED_URL_PROTOCOLS = new Set([
    'http:',
    'https:',
    'mailto:',
    'sms:',
    'tel:',
]);

export function sanitizeUrl(url: string): string {
    try {
        const parsedUrl = new URL(url);
        // eslint-disable-next-line no-script-url
        if (!SUPPORTED_URL_PROTOCOLS.has(parsedUrl.protocol)) {
            return 'about:blank';
        }
    } catch {
        return url;
    }
    return url;
}

interface BoldUnderlineIttalicProps {
    activeEditor: LexicalEditor;
}

const BoldUnderlineIttalic = (props: BoldUnderlineIttalicProps) => {
    const { activeEditor } = props;
    const [isBold, setIsBold] = useState(false);
    const [isQuote, setIsQuote] = useState(false);
    const [isItalic, setIsItalic] = useState(false);
    const [isUnderline, setIsUnderline] = useState(false);
    const [isStrikethrough, setIsStrikethrough] = useState(false);
    const [isLinkEditMode, setIsLinkEditMode] = useState<boolean>(false);
    const [isLink, setIsLink] = useState<boolean>(false);
    const [linkUrl, setLinkUrl] = useState<string>();
    const [isHightlight, setIsHightlight] = useState<boolean>(false);
    // const [linkUrl, setLinkUrl] = useState<string>();



    useSelectionChange(activeEditor, () => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
            const anchorNode = selection.anchor.getNode()
            const parentQuote = $getNearestNodeOfType<QuoteNode>(
                anchorNode,
                QuoteNode,
            );
            setIsQuote(Boolean(parentQuote))
            setIsBold(selection.hasFormat('bold'));
            setIsItalic(selection.hasFormat('italic'));
            setIsUnderline(selection.hasFormat('underline'));
            setIsStrikethrough(selection.hasFormat('strikethrough'));

            

            const background = $getSelectionStyleValueForProperty(selection, 'background');
            if(background.includes('linear-gradient')){
                setIsHightlight(true);
            }else{
                setIsHightlight(false);
            }

            // if(type === 'light'){

            //     $patchStyleText(selection, { 'background': 'linear-gradient(transparent 60%, rgba(252, 185, 0, 0.7) 0)' });
            // }


            /** link 的 逻辑 */
            const parent = anchorNode.getParent();
            if ($isLinkNode(parent) || $isLinkNode(anchorNode)) {
                const linkNode = ($isLinkNode(parent) ? parent : anchorNode) as LinkNode;
                const url = linkNode.getURL();
                setLinkUrl(url)
                setIsLink(true);
            } else {
                setIsLink(false);
            }
        }
    })
    console.log(linkUrl, 6666666)

    return (
        <div className="flex" >
            {/* <TooltipWithMenu isShowToolTip title="引用">
                <div className={`h-[30px] w-[30px] cursor-pointer hover:bg-[#f0f0f0] flex items-center justify-center rounded-[8px] mr-[4px] ${isQuote ? 'bg-[#eee]' : ''}`} >
                    <div
                        className="text-[#050505]"
                        onClick={() => {
                            activeEditor.update(() => {
                                const selection = $getSelection();
                                $setBlocksType(selection, () => $createQuoteNode());
                            });
                        }}
                    >
                        “
                    </div>
                </div>
            </TooltipWithMenu> */}
            <TooltipWithMenu isShowToolTip title="粗体">
                <div className={`h-[30px] w-[30px] cursor-pointer hover:bg-[#f0f0f0] flex items-center justify-center rounded-[4px] mr-[4px] ${isBold ? 'bg-[#eee]' : ''}`} >
                    <Bold
                        isActive={isBold}
                        onClick={() => {
                            activeEditor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold');
                        }}
                    />
                </div>
            </TooltipWithMenu>
            <TooltipWithMenu isShowToolTip title="斜体">
                <div className={`h-[30px] w-[30px] cursor-pointer hover:bg-[#f0f0f0] flex items-center justify-center rounded-[4px] mr-[4px] ${isItalic ? 'bg-[#eee]' : ''}`} >
                    <Italic
                        isActive={isItalic}
                        onClick={() => {
                            activeEditor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic');
                        }}
                    />
                </div>
            </TooltipWithMenu>

            <TooltipWithMenu isShowToolTip title="下划线">
                <div className={`h-[30px] w-[30px] cursor-pointer  hover:bg-[#f0f0f0] flex items-center justify-center rounded-[4px] mr-[4px] ${isUnderline ? 'bg-[#eee]' : ''}`} >
                    <Underline
                        isActive={isUnderline}
                        onClick={() => {
                            activeEditor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline');
                        }}
                    />
                </div>
            </TooltipWithMenu>
            <TooltipWithMenu isShowToolTip title="中划线">
                <div className={`h-[32px] w-[32px] cursor-pointer  hover:bg-[#f0f0f0] flex items-center justify-center rounded-[4px] mr-[4px] ${isStrikethrough ? 'bg-[#eee]' : ''}`} >
                    <Strikethrough
                        isActive={isStrikethrough}
                        className="stroke-[#262626]"
                        onClick={() => {
                            activeEditor.dispatchCommand(FORMAT_TEXT_COMMAND, 'strikethrough');
                        }}
                    />
                </div>
            </TooltipWithMenu>
            <TooltipWithMenu isShowToolTip title="链接">
                <div className={`h-[30px] w-[30px] cursor-pointer  hover:bg-[#f0f0f0] flex items-center justify-center rounded-[4px] mr-[4px] ${isLink ? 'bg-[#eee]' : ''}`} >
                    <LinkOutlined
                        className="text-[#050505] "
                        onClick={() => {
                            setIsLinkEditMode(true);
                        }}
                    />
                </div>
            </TooltipWithMenu>
            <TooltipWithMenu isShowToolTip title="高亮">
                <div className={`h-[30px] w-[30px] cursor-pointer hover:bg-[#f0f0f0] flex items-center justify-center rounded-[4px] mr-[4px] ${isHightlight ? 'bg-[#eee]' : ''}`} >
                    <Highlight
                        className="stroke-[#262626]"
                        onClick={() => {
                            activeEditor.update(
                                () => {
                                    const selection = $getSelection();
                                    if (!selection) {
                                        return
                                    }
                                    if(isHightlight){
                                        $patchStyleText(selection, { 'background': 'white' });
                                        return;
                                    }
                                    $patchStyleText(selection, { 'background': 'linear-gradient(transparent 60%, rgba(252, 185, 0, 0.7) 0)' });
                                },
                            );
                        }}
                    />
                </div>
            </TooltipWithMenu>

            <Modal
                open={isLinkEditMode}
                onOk={() => {
                    if (linkUrl) {
                        activeEditor.dispatchCommand(TOGGLE_LINK_COMMAND, sanitizeUrl(linkUrl));
                    }
                    setIsLinkEditMode(false)
                }}
                onCancel={() => {
                    setIsLinkEditMode(false)
                }}
            >
                <Input
                    placeholder="请输入链接"
                    value={linkUrl}
                    onChange={(val) => {
                        setLinkUrl(val.target.value)
                    }}
                />
                <Button
                    type="dashed"
                    onClick={() => {
                        activeEditor.dispatchCommand(TOGGLE_LINK_COMMAND, null);
                        setIsLinkEditMode(false);
                    }}
                >
                    清除链接
                </Button>
            </Modal>
        </div>
    );
}

export default BoldUnderlineIttalic;