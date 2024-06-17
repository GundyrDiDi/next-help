/*
 * @Author: shiguang
 * @Date: 2024-05-23 18:03:08
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-17 18:40:11
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
import { Button, Form, Input, Modal } from 'antd';
import { REGEXP_URL } from '../../../../utils/regexp';

interface HeadingMenuProps {
    activeEditor: LexicalEditor;
}

const Link = (props: HeadingMenuProps) => {
    const { activeEditor } = props;
    // const [showPanel, setShowPanel] = useState(false);
    const [isLink, setIsLink] = useState(false);
    // const setSelectionEditPanelContentDom = useSelectionEditPanelContentSetDom()
    const [linkValue, setLinkValue] = useState<LinkValue>();
    const [form] = Form.useForm();


    useSelectionChange(activeEditor, () => {
        const selection = $getSelection();
        if (!selection) return;
        if (selection.isCollapsed()) return;
        if ($isRangeSelection(selection) || $isTableSelection(selection)) {
            const node = getSelectedNode(selection as RangeSelection);
            const parent = node.getParent();
            const okNode = $isLinkNode(parent) || $isLinkNode(node)
            if ($isLinkNode(parent) || $isLinkNode(node)) {
                if ($isLinkNode(parent)) {
                    setLinkValue({
                        title: parent.getTextContent(),
                        url: parent.getURL()
                    })
                } else if ($isLinkNode(node)) {
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

    useEffect(() => {
        if (isLink) {
            setLinkValue((val) => {
                form.setFieldsValue(val)
                return val;
            })
        }
    }, [form, isLink])

    // const linkEditPanelDom = useCallback((_isLink: boolean) => {
    //     return _isLink ? <LinkEditPanel
    //         onChange={(val) => {
    //             console.log(val, 'onChange');
    //             setLinkValue(val)
    //         }}
    //         value={linkValue}
    //         onOk={(value) => {
    //             activeEditor.update(() => {
    //                 const selection = $getSelection()!
    //                 if (!selection) return;
    //                 const linkNode = $createLinkNode(value!.url!, {}).append($createTextNode(linkValue?.title));
    //                 selection.insertNodes([
    //                     linkNode
    //                 ]);
    //                 setLinkValue(undefined)
    //                 setIsLink(false)
    //                 return true
    //             })
    //         }}
    //     /> : null
    // }, [activeEditor, linkValue]);


    // useEffect(() => {
    //     setSelectionEditPanelContentDom(
    //         linkEditPanelDom(isLink)
    //     )
    // }, [linkEditPanelDom, setSelectionEditPanelContentDom, isLink])

    // useEffect={}
    return (
        <div>
            <Modal
                footer={false}
                open={isLink}
                onCancel={() => {
                    setIsLink(false);
                    setLinkValue(undefined)
                    form.resetFields()
                }}
            >
                <div >
                    <Form form={form} >
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
                                    className='mt-[8px]'
                                    onClick={() => {
                                        activeEditor.update(() => {
                                            const selection = $getSelection()!
                                            if (!selection) return;
                                            const linkNode = $createLinkNode(value!.url!, {}).append($createTextNode(linkValue?.title));
                                            selection.insertNodes([
                                                linkNode
                                            ]);
                                            setLinkValue(undefined)
                                            setIsLink(false)
                                            form.resetFields()
                                            return true
                                        })
                                    }}
                                >
                                    确定
                                </Button>
                            }}
                        </Form.Item>
                    </Form>

                    {/* <Input
                        placeholder="链接地址"
                        className="mb-[16px]"
                        value={value?.url}
                        onChange={(e) => {
                            console.log('parent', value)
                            onChange?.({ ...value, url: e.target.value })
                        }}
                    />
                    <div>{value?.url}</div> */}

                </div>
            </Modal>
            <TooltipWithMenu isShowToolTip title="链接">
                <button
                    className={`h-[32px] w-[32px] cursor-pointer hover:bg-[#f0f0f0] flex items-center justify-center rounded-[8px] ${isLink ? 'hover:bg-[#f0f0f0]' : ''}`}
                    onClick={() => {
                        activeEditor.update(() => {
                            const selection = $getSelection()
                            if (!selection) return;
                            if (selection.isCollapsed()) {
                                setLinkValue(undefined);
                                return
                            }
                            const text = selection.getTextContent()
                            setLinkValue({ title: text });
                        })
                        // setSelectionEditPanelContentDom(linkEditPanelDom(true))
                        setIsLink(true)
                    }}
                >
                    <LinkIcon />
                </button>
            </TooltipWithMenu>
        </div>
    );
}
export default Link;