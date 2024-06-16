/*
 * @Author: shiguang
 * @Date: 2024-05-23 14:47:05
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-17 01:29:13
 * @Description: 
 */
import { useEffect, useState } from "react";
import EditorView from "./EditorView";
import FirstRenderView from "./FirstRenderView";

interface EditorViewProps{
    articleTitle?: string;
    initHtml?: string;
}

export default function EditorViewIndex(props: EditorViewProps) {
    const { articleTitle, initHtml } = props
    const [showEditor, setShowEditor] = useState(false);
    useEffect(() => {
        setShowEditor(true)
    }, [])
    return (
        <div className="ckb-editor-view-container" >
            <div className={`${showEditor ? '' : 'hidden'} EditorView-xx `} >
                <EditorView articleTitle={articleTitle} initHtml={initHtml} />
            </div>
            {!showEditor && <div className="EditorView-ff" ><FirstRenderView initHtml={initHtml} /></div>}
        </div>
    );
}