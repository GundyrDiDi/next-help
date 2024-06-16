/*
 * @Author: shiguang
 * @Date: 2024-06-12 19:35:48
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-17 02:59:43
 * @Description: 
 */
/*
 * @Author: shiguang
 * @Date: 2024-06-12 19:35:48
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-12 19:38:26
 * @Description: 
 */
import { Tooltip, message } from "antd";
import { articleToolBarEmitter } from "../ArticleToolBar";
import ArticleUI, { ArticleUIProps } from "../ArticleUI"
import useLexicalEditable from "@lexical/react/useLexicalEditable";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $getNodeByKey } from "lexical";

interface ArticleDecorateProps {
    nodeKey: string;
    options: ArticleUIProps & {
        __elementType: string;
    };
}
const onClick = (nodeKey: string) => {
    articleToolBarEmitter.emit('editArticle', nodeKey)
}
const ArticleDecorate = (props: ArticleDecorateProps) => {
    const isEditable = useLexicalEditable()
    const [editor] = useLexicalComposerContext()
    console.log(1,2,3)
    const dom = <ArticleUI 
        url={props.options.url} 
        onError={() => {
            editor.update(() => {
                message.warning('没找到对应链接文章');
                const node = $getNodeByKey(props.nodeKey);
                node?.remove();
            })
        }} 
    />;
    if(!isEditable) return dom;
    return <Tooltip
        arrow={false}
        title={
            <span onClick={() => onClick(props.nodeKey)} className="cursor-pointer" >
                编辑
            </span>
        } >

        <div>{dom}</div>
    </Tooltip>
}

export default ArticleDecorate