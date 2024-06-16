/*
 * @Author: shiguang
 * @Date: 2024-06-12 19:35:48
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-13 15:38:39
 * @Description: 
 */
/*
 * @Author: shiguang
 * @Date: 2024-06-12 19:35:48
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-12 19:38:26
 * @Description: 
 */
import { Tooltip } from "antd";
import { articleToolBarEmitter } from "../ArticleToolBar";
import ArticleUI, { ArticleUIProps } from "../ArticleUI"
import useLexicalEditable from "@lexical/react/useLexicalEditable";

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
    const dom = <ArticleUI url={props.options.url} />;
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