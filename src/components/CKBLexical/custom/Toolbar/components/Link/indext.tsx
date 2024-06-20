/*
* @Author: shiguang
* @Date: 2024-05-23 18:03:08
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-20 21:34:07
* @Description: 
*/
import { $createTextNode, $getNodeByKey, $getSelection, $isRangeSelection, $isTextNode, LexicalEditor, RangeSelection, TextNode } from 'lexical';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { $isTableSelection } from '@lexical/table';
import TooltipWithMenu from '../../../../components/TooltipWithMenu';
import { getSelectedNode } from '../../../../utils/getSelectedNode';
import { $createLinkNode, $isLinkNode, LinkNode } from '@lexical/link';
import LinkIcon from "../../../../Icon/components/Link";
import { LinkValue } from './components/LinkEditPanel';
import { Button, Form, Input, Modal } from 'antd';
import { REGEXP_URL } from '../../../../utils/regexp';

interface HeadingMenuProps {
    activeEditor: LexicalEditor;
}

const Link = (props: HeadingMenuProps) => {
    const { activeEditor } = props;
    const [isLink, setIsLink] = useState(false);
    const [linkKey, setLinkKey] = useState<string>()
    const [linkValue, setLinkValue] = useState<LinkValue>();
    const [form] = Form.useForm();
    const getSelectionForModal = () => {
        const selection = $getSelection();
        if (!selection) return;
        if (selection.isCollapsed()) return;
        if ($isRangeSelection(selection) || $isTableSelection(selection)) {
            const node = getSelectedNode(selection as RangeSelection);
            const parent = node.getParent();
            const okNode = $isLinkNode(parent) || $isLinkNode(node)
            if ($isLinkNode(parent) || $isLinkNode(node)) {
                if ($isLinkNode(parent)) {
                    setLinkKey(parent.getKey())
                    setLinkValue({
                        title: parent.getTextContent(),
                        url: parent.getURL()
                    })
                } else if ($isLinkNode(node)) {
                    setLinkKey(node.getKey())
                    setLinkValue({
                        title: node.getTextContent(),
                        url: node.getURL()
                    })
                }
                setIsLink(true);
                return true;
            } else {
                setIsLink(false);
            }
        }
    }

    useEffect(() => {
        if (isLink) {
            setLinkValue((val) => {
                form.setFieldsValue(val)
                return val;
            })
        }
    }, [form, isLink])
    const hideModal = () => {
        setIsLink(false);
        setLinkKey(undefined)
        setLinkValue(undefined)
        form.resetFields()
    }
    return (
        <div>
            <Modal
                title="插入链接"
                footer={false}
                open={isLink}
                onCancel={hideModal}
            >
                <div className="pt-[8px]" >
                    <Form form={form}  >
                        <div className="text-[14px] leading-[22px] mb-[4px]" >文本</div>
                        <Form.Item noStyle name="title" >
                            <Input
                                placeholder="文本"
                                className="mb-[16px]"
                            />
                        </Form.Item>
                        <div className="text-[14px] leading-[22px] mb-[4px] mt-[16px]" >链接</div>
                        <Form.Item noStyle name="url" >
                            <Input
                                placeholder="链接地址"
                                className="mb-[16px]"
                            />
                        </Form.Item>
                        <Form.Item noStyle shouldUpdate>
                            {() => {
                                const value = form.getFieldsValue();
                                const isOk = REGEXP_URL.test(value.url) && !!value.title
                                console.log(REGEXP_URL.test(value.url), value.title, 246)
                                return <Button
                                    disabled={!isOk}
                                    className='mt-[16px]'
                                    onClick={() => {
                                        activeEditor.update(() => {
                                            const selection = $getSelection()!
                                            if (!selection) return;
                                            const linkNode = $createLinkNode(value!.url!, { target: '_blank' }).append($createTextNode(linkValue?.title));
                                            if (linkKey) {
                                                const editNode = $getNodeByKey(linkKey) as LinkNode;
                                                const textNode = editNode.getFirstChild() as TextNode
                                                editNode.setURL(value!.url!)
                                                debugger
                                                if ($isTextNode(textNode) && linkValue?.title) {
                                                    textNode.setTextContent(value.title)
                                                }
                                            } else {
                                                selection.insertNodes([
                                                    linkNode
                                                ]);
                                            }
                                            hideModal();
                                            return true
                                        })
                                    }}
                                >
                                    确定
                                </Button>
                            }}
                        </Form.Item>
                    </Form>
                </div>
            </Modal>
            {/* <a target="_blank" ></a> */}
            <TooltipWithMenu isShowToolTip title="链接">
                <button
                    className={`h-[32px] w-[32px] cursor-pointer hover:bg-[#f0f0f0] flex items-center justify-center rounded-[8px] ${isLink ? 'hover:bg-[#f0f0f0]' : ''}`}
                    onClick={() => {
                        activeEditor.update(() => {
                            const selection = $getSelection()
                            if (!selection || selection.isCollapsed()) return;
                            const isEdit = getSelectionForModal();
                            if (isEdit) {
                                return;
                            }
                            if (selection.isCollapsed()) {
                                setLinkValue(undefined);
                                return
                            }
                            const text = selection.getTextContent()
                            setLinkValue({ title: text });
                            setIsLink(true)
                        })
                    }}
                >
                    <LinkIcon />
                </button>
            </TooltipWithMenu>
        </div>
    );
}
export default Link;