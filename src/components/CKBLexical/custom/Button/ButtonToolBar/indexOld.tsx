/*
 * @Author: shiguang
 * @Date: 2024-06-07 17:23:47
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-14 10:42:19
 * @Description: 
 */
/*
 * @Author: shiguang
 * @Date: 2024-05-23 18:03:08
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-11 10:16:41
 * @Description: 
 */
import {  $getNodeByKey, $getRoot, $getSelection, LexicalEditor, LexicalNode, RootNode } from 'lexical';
import { useCallback, useEffect, useState } from 'react';
import TooltipWithMenu from '../../../components/TooltipWithMenu';
import  { ButtonEditValue } from '../ButtonEditPanel';
import { useHideModalOnSelectionBlur, useSelectionEditPanelContentSetDom } from '../../../components/SelectionEditPanelContainer';
import { $createButtonNode, ButtonNode } from '../ButtonNode';
import ButtonEditPanel from '../ButtonEditPanel';
import Button from '../../../Icon/components/Button';
import mitt from 'mitt';
import { HeadingNode } from '@lexical/rich-text';
import { $createLexicalTableOfContentsNode } from '../../LexicalTableOfContents/LexicalTableOfContentsNode';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import useLexicalEditable from '@lexical/react/useLexicalEditable';

interface HeadingMenuProps {
    activeEditor: LexicalEditor;
}

export const buttonToolBarEmitter = mitt<{editButton: string}>()

const ButtonToolBar = (props: HeadingMenuProps) => {
    const { activeEditor } = props;
    const [isButton, setIsButton] = useState(false);
    /**
     * 编辑的时候
     */
    const [editButtonKey, setEditButtonKey] = useState<string>();
    const setSelectionEditPanelContentDom = useSelectionEditPanelContentSetDom()
    const [buttonValue, setButtonValue] = useState<ButtonEditValue | undefined>();

    const buttonEditPanelDom = useCallback((_isButton: boolean) => {
        return _isButton ? <ButtonEditPanel
            key={editButtonKey}
            onChange={(val) => {
                console.log(val, 'onChange');
                setButtonValue(val)
            }}
            value={buttonValue}
            onOk={(buttonValue) => {
                const hideModal = () => {
                    setButtonValue(undefined)
                    setIsButton(false)
                    setEditButtonKey(undefined)
                }
                activeEditor.update(() => {
                    const newOptions = {
                        __elementType: 'button' as const,
                        color: buttonValue?.color,
                        children:  buttonValue?.children as string,
                        href:  buttonValue?.href,
                        type:  buttonValue?.type,
                    }
                    if(editButtonKey){
                        const node = $getNodeByKey(editButtonKey) as ButtonNode
                        node.setOptions(newOptions)
                        hideModal();
                        return true;
                    }
                    const selection = $getSelection()!
                    if(!selection) return;
                    const buttonNode = $createButtonNode(newOptions);
                    selection.insertNodes([
                        buttonNode
                    ]);
                    hideModal();
                    return true
                })
            }}
        /> : null
    }, [activeEditor, buttonValue, editButtonKey]);


    useEffect(() => {
        setSelectionEditPanelContentDom(
            buttonEditPanelDom(isButton)
        )
    }, [buttonEditPanelDom, setSelectionEditPanelContentDom, isButton])
    useHideModalOnSelectionBlur(() => {
        setButtonValue(undefined);
        setIsButton(false);
    })
    useEffect(() => {
        buttonToolBarEmitter.on('editButton', (key) => {
            activeEditor.update(() => {
                setEditButtonKey(key)
                const node = $getNodeByKey(key) as ButtonNode;
                const { __elementType, ...other} = node.getOptions()
                setButtonValue(other)
                setTimeout(() => {
                    setIsButton(true)
                }, 300)
            })
        })
        return () => {
            buttonToolBarEmitter.all.clear();
        }
    }, [activeEditor])

    return (
        <div>
            <TooltipWithMenu isShowToolTip title="链接">
                <button 
                    className={`h-[32px] w-[32px] cursor-pointer hover:bg-[#f0f0f0] flex items-center justify-center rounded-[8px] ${isButton ? 'hover:bg-[#f0f0f0]' : ''}`} 
                    onClick={() => {
                        setSelectionEditPanelContentDom(buttonEditPanelDom(true))
                        setIsButton(true)
                    }}
                >
                    <Button/>
                </button>
            </TooltipWithMenu>
        </div>
    );
}
export default ButtonToolBar;