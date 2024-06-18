/*
 * @Author: shiguang
 * @Date: 2024-06-13 20:42:43
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-18 15:38:56
 * @Description: 
 */

import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import LexicalTableOfContentsPlugin from "@lexical/react/LexicalTableOfContents";
import { NodeKey } from "lexical";

const LexicalTableOfContentsAdmin = () => {
  const [editor] = useLexicalComposerContext();

  return <div className="bg-white" >
    <div className="font-bold text-black text-[14px] leading-[22px] mb-[20px]">
      大纲
    </div>
    <LexicalTableOfContentsPlugin>
      {(_data) => {
        let hList = [0, 0, 0, 0, 0, 0]
        function scrollToNode(key: NodeKey, currIndex?: number) {
          editor.getEditorState().read(() => {
            const domElement = editor.getElementByKey(key);
            if (domElement !== null) {
              domElement.scrollIntoView();
            }
          });
        }
        return <div className="sticky top-0 z-[9]" >
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
            return <div
              onClick={() => scrollToNode(nodeKey)}
              key={nodeKey}
              style={{
                paddingLeft: (hNum - 2) * 16
              }}
              className={`pl-[${(hNum - 2) * 16}px] cursor-pointer  hover:bg-[#008060]/[.1] ${hNum === 2 ? 'text-[#000]/[.88] text-[14px]' : ''
                } ${hNum === 3 ? 'text-[#000]/[.65] text-[14px]' : ''} ${hNum === 4 ? '' : ''}  
                text-[#000]/[.45] hover:text-[#000]/[.88] leading-[22px] mb-[8px] line-clamp-1
                `} >
              {str} {title}
            </div>
          })}
        </div>
      }}
    </LexicalTableOfContentsPlugin>
  </div>
}

export default LexicalTableOfContentsAdmin