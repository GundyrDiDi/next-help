/*
 * @Author: shiguang
 * @Date: 2024-05-23 16:48:51
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-14 10:47:31
 * @Description: 
 */
import {
  mergeRegister,
} from '@lexical/utils';
import React, { useEffect, useState } from "react";
import { CAN_REDO_COMMAND, CAN_UNDO_COMMAND, COMMAND_PRIORITY_CRITICAL, LexicalEditor, REDO_COMMAND, SELECTION_CHANGE_COMMAND, UNDO_COMMAND } from "lexical";
import TooltipWithMenu from '../../../../components/TooltipWithMenu';
import Undo from '../../../../Icon/components/Undo';
import Redo from '../../../../Icon/components/Redo';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { errorToJSON } from 'next/dist/server/render';


/**
 * 但选中之后，通过选中的数据会对 toolbar 进行更新
 * 包括不限于 
 * text format 状态的展示
 * link的高亮
 * align 的选中 （ left right center ）
 * 字体的显示
 * h1 h2 标签的显示
 */


interface HistoryMenuProps {
  activeEditor: LexicalEditor;
}
const HistoryMenu = (props: HistoryMenuProps) => {
  const [canUndo, setCanUndo] = useState(false);
  const [canRedo, setCanRedo] = useState(false);
  const [editor] = useLexicalComposerContext();
  const [activeEditor, setActiveEditor] = useState(editor);

  useEffect(() => {
    return editor.registerCommand(
      SELECTION_CHANGE_COMMAND,
      (_payload, newEditor) => {
        setActiveEditor(newEditor);
        return false;
      },
      COMMAND_PRIORITY_CRITICAL,
    );
  }, [editor]);

  useEffect(() => {
    return mergeRegister(
      activeEditor.registerCommand<boolean>(
        CAN_UNDO_COMMAND,
        (payload) => {
          setCanUndo(payload);
          return false;
        },
        COMMAND_PRIORITY_CRITICAL,
      ),
      activeEditor.registerCommand<boolean>(
        CAN_REDO_COMMAND,
        (payload) => {
          setCanRedo(payload);
          return false;
        },
        COMMAND_PRIORITY_CRITICAL,
      ),
    )
  }, [activeEditor])

  return (
    <div className="flex" >
      <TooltipWithMenu isShowToolTip={canUndo} title="撤销"> 
        <button className={`h-[32px] w-[32px] cursor-pointer mr-[8px] ${ canUndo ? 'hover:bg-[#f0f0f0]' : ''} flex items-center justify-center rounded-[4px]`} >
          <Undo
            className={canUndo ? `text-[#050505]` : 'text-[#cfcfcf]'} 
            isActive={canUndo}
            onClick={() => {
              if(!canUndo) return;
              activeEditor.dispatchCommand(UNDO_COMMAND, undefined);
            }}
          />
        </button>
      </TooltipWithMenu>
      <TooltipWithMenu isShowToolTip={canRedo} title="重做"> 
        <button className={`h-[32px] w-[32px] cursor-pointer  ${ canRedo ? 'hover:bg-[#f0f0f0]' : ''} flex items-center justify-center rounded-[4px]`} >
          <Redo
            isActive={canRedo}
            className={canRedo ? `text-[#050505]` : 'text-[#cfcfcf]'} 
            onClick={() => {
              if(!canRedo) return;
              activeEditor.dispatchCommand(REDO_COMMAND, undefined);
            }}
          />
        </button>
      </TooltipWithMenu>
    </div>
  )
}
export default HistoryMenu;