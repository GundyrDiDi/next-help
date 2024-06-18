/*
 * @Author: shiguang
 * @Date: 2024-06-07 17:23:47
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-18 18:05:48
 * @Description: 
 */
/*
 * @Author: shiguang
 * @Date: 2024-05-23 18:03:08
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-11 10:16:41
 * @Description: 
 */
import { $getNodeByKey, $getRoot, $getSelection, LexicalEditor, LexicalNode, RootNode } from 'lexical';
import { useCallback, useEffect, useState } from 'react';
import TooltipWithMenu from '../../../components/TooltipWithMenu';
import { ButtonEditValue, ColorOptions } from '../ButtonEditPanel';
import { useHideModalOnSelectionBlur, useSelectionEditPanelContentSetDom } from '../../../components/SelectionEditPanelContainer';
import { $createButtonNode, ButtonNode } from '../ButtonNode';
import ButtonEditPanel from '../ButtonEditPanel';
import Button from '../../../Icon/components/Button';
import mitt from 'mitt';
import { HeadingNode } from '@lexical/rich-text';
import { $createLexicalTableOfContentsNode } from '../../LexicalTableOfContents/LexicalTableOfContentsNode';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import useLexicalEditable from '@lexical/react/useLexicalEditable';
import Modal from 'antd/es/modal/Modal';
import { Form, Input, Tabs, Button as AntButton } from 'antd';
import { REGEXP_URL } from '../../../utils/regexp';

interface HeadingMenuProps {
    activeEditor: LexicalEditor;
}

export const buttonToolBarEmitter = mitt<{ editButton: string }>()

const ButtonToolBar = (props: HeadingMenuProps) => {
    const { activeEditor } = props;
    const [isButton, setIsButton] = useState(false);
    const [form] = Form.useForm();
    /**
     * 编辑的时候
     */
    const [editButtonKey, setEditButtonKey] = useState<string>();
    const setSelectionEditPanelContentDom = useSelectionEditPanelContentSetDom()
    // const [buttonValue, setButtonValue] = useState<ButtonEditValue | undefined>();

    // const buttonEditPanelDom = useCallback((_isButton: boolean) => {
    //     return _isButton ? <ButtonEditPanel
    //         key={editButtonKey}
    //         onChange={(val) => {
    //             console.log(val, 'onChange');
    //             setButtonValue(val)
    //         }}
    //         value={buttonValue}
    //         onOk={(buttonValue) => {
    //             const hideModal = () => {
    //                 setButtonValue(undefined)
    //                 setIsButton(false)
    //                 setEditButtonKey(undefined)
    //             }
    //             activeEditor.update(() => {
    //                 const newOptions = {
    //                     __elementType: 'button' as const,
    //                     color: buttonValue?.color,
    //                     children:  buttonValue?.children as string,
    //                     href:  buttonValue?.href,
    //                     type:  buttonValue?.type,
    //                 }
    //                 if(editButtonKey){
    //                     const node = $getNodeByKey(editButtonKey) as ButtonNode
    //                     node.setOptions(newOptions)
    //                     hideModal();
    //                     return true;
    //                 }
    //                 const selection = $getSelection()!
    //                 if(!selection) return;
    //                 const buttonNode = $createButtonNode(newOptions);
    //                 selection.insertNodes([
    //                     buttonNode
    //                 ]);
    //                 hideModal();
    //                 return true
    //             })
    //         }}
    //     /> : null
    // }, [activeEditor, buttonValue, editButtonKey]);


    // useEffect(() => {
    //     setSelectionEditPanelContentDom(
    //         buttonEditPanelDom(isButton)
    //     )
    // }, [buttonEditPanelDom, setSelectionEditPanelContentDom, isButton])
    // useHideModalOnSelectionBlur(() => {
    //     setButtonValue(undefined);
    //     setIsButton(false);
    // })
    useEffect(() => {
        buttonToolBarEmitter.on('editButton', (key) => {
            activeEditor.update(() => {
                setEditButtonKey(key)
                const node = $getNodeByKey(key) as ButtonNode;
                const { __elementType, ...other } = node.getOptions()
                form.setFieldsValue(other)
                // setButtonValue(other)
                setTimeout(() => {
                    setIsButton(true)
                }, 300)
            })
        })
        return () => {
            buttonToolBarEmitter.all.clear();
        }
    }, [activeEditor, form])
    const hideModal = () => {
        form.resetFields()
        setIsButton(false)
        setEditButtonKey(undefined)
    }
    return (
        <div>
            <Modal
                open={isButton}
                footer={false}
                destroyOnClose
                onCancel={hideModal}
            >
                <Form form={form} >
                    <div>
                        <Form.Item name="type" valuePropName="activeKey"  >
                            <Tabs
                                items={[
                                    { label: '线性按钮', key: 'default' },
                                    { label: '面性按钮', key: 'primary' },
                                ]}
                            />
                        </Form.Item>
                    </div>
                    <div>
                        <div className="leading-[22px]">文本</div>
                        <Form.Item name="children" >
                            <Input placeholder="请输入" />
                        </Form.Item>
                    </div>
                    <div>
                        <div className="leading-[22px]">链接</div>
                        <Form.Item name="href" >
                            <Input placeholder="请输入" />
                        </Form.Item>
                    </div>
                    <div>
                        <div className="leading-[22px]" >颜色</div>
                        <Form.Item name="color" >
                            <ColorOptions />
                        </Form.Item>
                    </div>
                    <Form.Item noStyle shouldUpdate >
                        {() => {
                            const _values = form.getFieldsValue();
                            const isOk = (!!_values.href && REGEXP_URL.test(_values.href)) && !!_values.children && !!_values.color;
                            return <AntButton
                                disabled={!isOk}
                                onClick={() => {
                                    const values = form.getFieldsValue();
                                    activeEditor.update(() => {
                                        const newOptions = {
                                            __elementType: 'button' as const,
                                            color: values?.color,
                                            children: values?.children as string,
                                            href: values?.href,
                                            type: values?.type,
                                        }
                                        if (editButtonKey) {
                                            const node = $getNodeByKey(editButtonKey) as ButtonNode
                                            node.setOptions(newOptions)
                                            hideModal();
                                            return;
                                        }
                                        const selection = $getSelection()!
                                        if (!selection) return;
                                        const buttonNode = $createButtonNode(newOptions);
                                        selection.insertNodes([
                                            buttonNode
                                        ]);
                                        hideModal();
                                    })
                                }}
                            >
                                确定
                            </AntButton>
                        }}
                    </Form.Item>

                </Form>
            </Modal>
            <TooltipWithMenu isShowToolTip title="按钮">
                <button
                    className={`h-[32px] w-[32px] cursor-pointer hover:bg-[#f0f0f0] flex items-center justify-center rounded-[8px] ${isButton ? 'hover:bg-[#f0f0f0]' : ''}`}
                    onClick={() => {
                        // setSelectionEditPanelContentDom(buttonEditPanelDom(true))
                        setIsButton(true)
                    }}
                >
                    <Button />
                </button>
            </TooltipWithMenu>
        </div>
    );
}
export default ButtonToolBar;