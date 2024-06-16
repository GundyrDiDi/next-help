/*
 * @Author: shiguang
 * @Date: 2024-05-29 11:23:39
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-14 19:10:16
 * @Description: 
 */
import { $generateHtmlFromNodes } from "@lexical/html";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useState } from "react";

interface Props{
    xx: any
}
const ExportHtml = ({xx}: Props) => {
  const [editor] = useLexicalComposerContext();
  const [html, setHtml] = useState<string>()
  xx.editor = editor;
    return (
        <div>
            <button 
            onClick={() => {
                editor.update(() => {
                    const res = $generateHtmlFromNodes(editor)
                    setHtml(res)
                })
            }} 
            >
                导出html
            </button>
            <textarea className="block border w-[100%]" value={html} onChange={(e) => { setHtml(e.target.value) }} />
        </div>
    );
}

export default ExportHtml;