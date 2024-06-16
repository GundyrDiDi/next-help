/*
 * @Author: shiguang
 * @Date: 2024-06-07 17:23:47
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-14 10:44:14
 * @Description: 
 */
/*
 * @Author: shiguang
 * @Date: 2024-05-23 18:03:08
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-11 10:16:41
 * @Description: 
 */
import {  $getNodeByKey, $getSelection, LexicalEditor } from 'lexical';
import { useCallback, useEffect, useState } from 'react';
import TooltipWithMenu from '../../../components/TooltipWithMenu';
// import  { ArticleEditValue } from '../ArticleEditPanel';
import { useHideModalOnSelectionBlur, useSelectionEditPanelContentSetDom } from '../../../components/SelectionEditPanelContainer';
import { $createArticleNode, ArticleNode } from '../ArticleNode';
import ArticleEditPanel from '../ArticleEditPanel';
import Article from '../../../Icon/components/Article';

import mitt from 'mitt';

interface HeadingMenuProps {
    activeEditor: LexicalEditor;
}

export const articleToolBarEmitter = mitt<{editArticle: string}>()

const ArticleToolBar = (props: HeadingMenuProps) => {
    const { activeEditor } = props;
    const [isArticle, setIsArticle] = useState(false);
    /**
     * 编辑的时候
     */
    const [editArticleKey, setEditArticleKey] = useState<string>();
    const setSelectionEditPanelContentDom = useSelectionEditPanelContentSetDom()
    const [articleValue, setArticleValue] = useState<string>();

    const ArticleEditPanelDom = useCallback((_isArticle: boolean) => {
        return _isArticle ? <ArticleEditPanel
            key={editArticleKey}
            // onChange={(val) => {
            //     console.log(val, 'onChange');
            //     setArticleValue(val)
            // }}
            value={articleValue}
            onOk={(_value) => {
                const hideModal = () => {
                    setArticleValue(undefined)
                    setIsArticle(false)
                    setEditArticleKey(undefined)
                }
                activeEditor.update(() => {
                    const newOptions = {
                        url: _value
                    }
                    if(editArticleKey){
                        const node = $getNodeByKey(editArticleKey) as ArticleNode
                        node.setOptions(newOptions)
                        hideModal();
                        return true;
                    }
                    const selection = $getSelection()!
                    if(!selection) return;
                    const articleNode = $createArticleNode(newOptions);
                    selection.insertNodes([
                        articleNode
                    ]);
                    hideModal();
                    return true
                })
            }}
        /> : null
    }, [activeEditor, articleValue, editArticleKey]);


    useEffect(() => {
        setSelectionEditPanelContentDom(
            ArticleEditPanelDom(isArticle)
        )
    }, [ArticleEditPanelDom, setSelectionEditPanelContentDom, isArticle])
    useHideModalOnSelectionBlur(() => {
        setArticleValue(undefined);
        setIsArticle(false);
    })
    useEffect(() => {
        articleToolBarEmitter.on('editArticle', (key) => {
            activeEditor.update(() => {
                setEditArticleKey(key)
                const node = $getNodeByKey(key) as ArticleNode;
                const { url } = node.getOptions()
                debugger
                setArticleValue(url)
                setTimeout(() => {
                    setIsArticle(true)
                }, 300)
            })
        })
        return () => {
            articleToolBarEmitter.all.clear();
        }
    }, [activeEditor])

    return (
        <div>
            <TooltipWithMenu isShowToolTip title="插入文章">
                <article 
                    className={`h-[32px] w-[32px] cursor-pointer hover:bg-[#f0f0f0] flex items-center justify-center rounded-[8px] ${isArticle ? 'hover:bg-[#f0f0f0]' : ''}`} 
                    onClick={() => {
                        setSelectionEditPanelContentDom(ArticleEditPanelDom(true))
                        setIsArticle(true)
                    }}
                >
                    <Article/>
                </article>
            </TooltipWithMenu>
        </div>
    );
}
export default ArticleToolBar;