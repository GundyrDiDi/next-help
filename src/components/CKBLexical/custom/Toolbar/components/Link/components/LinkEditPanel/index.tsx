/*
 * @Author: shiguang
 * @Date: 2024-06-06 13:48:54
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-14 10:48:15
 * @Description: 
 */

import { Button, Input } from "antd";


import { useEffect } from "react";
import { useSelectionEditPanelContentSetDom } from "../../../../../../components/SelectionEditPanelContainer";
import { flushSync } from "react-dom";

function isValidHttpUrl(url: string) {
  return /^(https?:\/\/(([a-zA-Z0-9]+-?)+[a-zA-Z0-9]+\.)+[a-zA-Z]+)(:\d+)?(\/.*)?(\?.*)?(#.*)?$/.test(url)
}

// 作者：实用前端
// 链接：https://juejin.cn/post/6844903846766968845
// 来源：稀土掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

export interface LinkValue {
  url?: string;
  title?: string;
}

interface LinkEditPanelProps {
  value?: LinkValue;
  onChange?: (value?: LinkValue) => void;
  onOk?: (value?: LinkValue) => void;
}
export function getDOMRangeRect(
  nativeSelection: Selection,
  rootElement: HTMLElement,
): DOMRect {
  const domRange = nativeSelection.getRangeAt(0);

  let rect;

  if (nativeSelection.anchorNode === rootElement) {
    let inner = rootElement;
    while (inner.firstElementChild != null) {
      inner = inner.firstElementChild as HTMLElement;
    }
    rect = inner.getBoundingClientRect();
  } else {
    rect = domRange.getBoundingClientRect();
  }

  return rect;
}


const LinkEditPanel = (props: LinkEditPanelProps) => {
  const { value, onChange, onOk } = props;
  const disabled = !isValidHttpUrl(value?.url ?? '');
  console.log('disabled ===>', disabled)
  // const [editor] = useLexicalComposerContext();
  const setSelectionEditPanelContentDom = useSelectionEditPanelContentSetDom()

  useEffect(() => {
    const editorContainer = window.document.querySelector('.editor-container')
    if (!editorContainer) return
    const click = () => {
        setSelectionEditPanelContentDom(null)
    }
    editorContainer.addEventListener('mousedown', click, true)
    return () => {
      editorContainer.removeEventListener('mousedown', click, true)
    }
  }, [setSelectionEditPanelContentDom])
  return <>
    <div className="w-[480px] rounded-[4px] p-[16px] bg-white border border-[#f0f0f0] shadow-[#000]/[.06]" >
      <div className="text-[14px] leading-[22px] mb-[4px]" >文本</div>
      <Input
        placeholder="链接地址"
        className="mb-[16px]"
        value={value?.title}
        onChange={(e) => onChange?.({ ...value, title: e.target.value })}
      />
      <div className="text-[14px] leading-[22px] mb-[4px] mt-[16px]" >链接</div>
      <Input
        placeholder="链接地址"
        className="mb-[16px]"
        value={value?.url}
        onChange={(e) => {
          console.log('parent', value)
          onChange?.({ ...value, url: e.target.value })
        }}
      />
      <div>{value?.url}</div>
      <Button
        disabled={disabled}
        onClick={() => {
          onOk?.(value)
        }}
      >
        确定
      </Button>
    </div>
  </>
}
export default LinkEditPanel;