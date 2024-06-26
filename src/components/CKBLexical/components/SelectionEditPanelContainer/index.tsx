/*
 * @Author: shiguang
 * @Date: 2024-06-06 13:48:54
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-17 05:07:36
 * @Description: 
 */
import { setFloatingElemPosition } from "../../utils/setFloatingElemPosition";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $getSelection, COMMAND_PRIORITY_CRITICAL, SELECTION_CHANGE_COMMAND } from "lexical";
import React, { useCallback, useContext, useEffect, useRef, useState } from "react";

interface SelectionEditPanelContainerProps {
  value?: string;
  onChange?: () => void;
}

export function getDOMRangeRect(
  nativeSelection: Selection,
  rootElement: HTMLElement,
): DOMRect {
  const domRange = nativeSelection.getRangeAt(0);

  let rect;
  const ww: any = window;

  if (nativeSelection.anchorNode === rootElement) {
    let inner = rootElement;
    while (inner.firstElementChild != null) {
      inner = inner.firstElementChild as HTMLElement;
    }
    rect = inner.getBoundingClientRect();
    ww.xzz = inner;
  } else {
    rect = domRange.getBoundingClientRect();
    // 当鼠标在一行的最前面的时候会定位有问题 下面通过选择 startContainerDom 的坐标来替代处理
    if(rect.x === 0 && rect.y === 0 && rect.width === 0 && rect.height === 0){
      const startContainerDom:any = domRange.startContainer;
      const startContainerDomRect = startContainerDom?.getBoundingClientRect?.();
      if(startContainerDomRect) rect = startContainerDomRect;
    }
    ww.xzz = domRange;
  }

  return rect;
}

interface SelectionEditPanelContextValue {
  contentDom: React.ReactNode;
}

const Context = React.createContext<
  [SelectionEditPanelContextValue, React.Dispatch<React.SetStateAction<SelectionEditPanelContextValue>>]
>(
  [{ contentDom: null }, () => { }]
)

const useSelectionEditPanelContentDom = () => {
  const [{ contentDom }] = useContext(Context)
  return contentDom;
}


export const useHideModalOnSelectionBlur = (onBlur: () => void) => {
  const onBlurRef =  useRef<typeof onBlur>(onBlur)
  const setSelectionEditPanelContentDom = useSelectionEditPanelContentSetDom()
  useEffect(() => {
    const editorContainer = window.document.querySelector('.editor-container')
    if (!editorContainer) return
    // const click = () => {
    //     setButtonValue(undefined);
    //     setIsButton(false);
    // }
    const click = () => {
      onBlurRef.current();
      setSelectionEditPanelContentDom(null)
    } 
    editorContainer.addEventListener('mousedown', click, true)
    return () => {
      editorContainer.removeEventListener('mousedown',click, true)
    }
  }, [setSelectionEditPanelContentDom])
}

export const useSelectionEditPanelContentSetDom = () => {
  const [, setContext] = useContext(Context)

  // useRef

  // const setContentDom = (contentDom: React.ReactNode) => {
  //     setContext((pre) => {
  //         return {
  //             ...pre,
  //             contentDom
  //         }
  //     })
  // }

  const setContentDom = useCallback((contentDom: React.ReactNode) => {
    setContext((pre) => {
      return {
        ...pre,
        contentDom
      }
    })
  }, [setContext])

  return setContentDom;
}


export const SelectionEditPanelContext = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState<SelectionEditPanelContextValue>(() => {
    return {
      contentDom: null
    }
  });
  return <Context.Provider value={[state, setState] as const} >
    {children}
  </Context.Provider>
}




const SelectionEditPanelContainer = (props: SelectionEditPanelContainerProps) => {
  const [editor] = useLexicalComposerContext();
  const selectionEditPanelContent = useSelectionEditPanelContentDom()
  const selectionEditPanelContainerRef = useRef<HTMLDivElement | null>(null);

  const updateTextFormatFloatingToolbar = useCallback(() => {
    const selection = $getSelection();
    const popupCharStylesEditorElem = selectionEditPanelContainerRef.current;
    const nativeSelection = window.getSelection();
    if (popupCharStylesEditorElem === null) {
      return;
    }
    const rootElement = editor.getRootElement();
    if (
      selection !== null &&
      nativeSelection !== null &&
      // !nativeSelection.isCollapsed &&
      rootElement !== null &&
      rootElement.contains(nativeSelection.anchorNode)
    ) {
      const rangeRect = getDOMRangeRect(nativeSelection, rootElement);
      // const anchorElem = document.querySelector('.editor-container') as HTMLElement
      const anchorElem = document.body
      // document.body;
      setFloatingElemPosition(
        rangeRect,
        popupCharStylesEditorElem,
        anchorElem,
        true,
      );
    }
  }, [editor]);


  useEffect(() => {
    return editor.registerCommand(
      SELECTION_CHANGE_COMMAND,
      (_payload, newEditor) => {
        // editor.getSe
        updateTextFormatFloatingToolbar()
        return false;
      },
      COMMAND_PRIORITY_CRITICAL,
    );
  }, [editor, updateTextFormatFloatingToolbar])

  return <>
    <div id="J_SelectionEditPanelContainer" ref={selectionEditPanelContainerRef} className="absolute top-0 left-0 !z-[1]" >
      <div className=" absolute bottom-0 left-0" >{selectionEditPanelContent}</div>
    </div>
  </>
}
export default SelectionEditPanelContainer;