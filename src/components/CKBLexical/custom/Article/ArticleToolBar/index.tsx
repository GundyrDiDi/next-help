/*
 * @Author: shiguang
 * @Date: 2024-06-07 17:23:47
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-20 21:07:57
 * @Description: 
 */
/*
 * @Author: shiguang
 * @Date: 2024-05-23 18:03:08
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-11 10:16:41
 * @Description: 
 */
import { $createParagraphNode, $getNodeByKey, $getSelection, $setSelection, LexicalEditor } from 'lexical';
import { useCallback, useEffect, useState } from 'react';
import TooltipWithMenu from '../../../components/TooltipWithMenu';
// import  { ArticleEditValue } from '../ArticleEditPanel';
import { useHideModalOnSelectionBlur, useSelectionEditPanelContentSetDom } from '../../../components/SelectionEditPanelContainer';
import { $createArticleNode, ArticleNode } from '../ArticleNode';
import ArticleEditPanel from '../ArticleEditPanel';
import Article from '../../../Icon/components/Article';

import mitt from 'mitt';
import Modal from 'antd/es/modal/Modal';
import { Button, Form, Input } from 'antd';
import { REGEXP_URL } from '../../../utils/regexp';

interface HeadingMenuProps {
    activeEditor: LexicalEditor;
}

export const articleToolBarEmitter = mitt<{ editArticle: string }>()

const ArticleToolBar = (props: HeadingMenuProps) => {
    const { activeEditor } = props;
    const [isArticle, setIsArticle] = useState(false);
    /**
     * 编辑的时候
     */
    const [editArticleKey, setEditArticleKey] = useState<string>();
    const setSelectionEditPanelContentDom = useSelectionEditPanelContentSetDom()
    // const [articleValue, setArticleValue] = useState<string>();
    const [form] = Form.useForm();

    // const ArticleEditPanelDom = useCallback((_isArticle: boolean) => {
    //     return _isArticle ? <ArticleEditPanel
    //         key={editArticleKey}
    //         // onChange={(val) => {
    //         //     console.log(val, 'onChange');
    //         //     setArticleValue(val)
    //         // }}
    //         value={articleValue}
    //         onOk={(_value) => {
    //             const hideModal = () => {
    //                 setArticleValue(undefined)
    //                 setIsArticle(false)
    //                 setEditArticleKey(undefined)
    //             }
    //             activeEditor.update(() => {
    //                 const newOptions = {
    //                     url: _value
    //                 }
    //                 if(editArticleKey){
    //                     const node = $getNodeByKey(editArticleKey) as ArticleNode
    //                     node.setOptions(newOptions)
    //                     hideModal();
    //                     return true;
    //                 }
    //                 const selection = $getSelection()!
    //                 if(!selection) return;
    //                 const articleNode = $createArticleNode(newOptions);
    //                 selection.insertNodes([
    //                     articleNode
    //                 ]);
    //                 hideModal();
    //                 return true
    //             })
    //         }}
    //     /> : null
    // }, [activeEditor, articleValue, editArticleKey]);


    // useEffect(() => {
    //     setSelectionEditPanelContentDom(
    //         ArticleEditPanelDom(isArticle)
    //     )
    // }, [ArticleEditPanelDom, setSelectionEditPanelContentDom, isArticle])
    // useHideModalOnSelectionBlur(() => {
    //     setArticleValue(undefined);
    //     setIsArticle(false);
    // })
    useEffect(() => {
        articleToolBarEmitter.on('editArticle', (key) => {
            activeEditor.update(() => {
                setEditArticleKey(key)
                const node = $getNodeByKey(key) as ArticleNode;
                const { url } = node.getOptions()
                form.setFieldsValue({ url })
                // setArticleValue(url)
                setTimeout(() => {
                    setIsArticle(true)
                }, 300)
            })
        })
        return () => {
            articleToolBarEmitter.all.clear();
        }
    }, [activeEditor, form])

    const hideModal = () => {
        setIsArticle(false)
        setEditArticleKey(undefined)
        form.resetFields()
    }

    return (
        <div>
            <Modal
                open={isArticle}
                footer={false}
                title="插入文章"
                destroyOnClose
                onCancel={hideModal}
            >
                <Form form={form} className="pt-[8px]" >
                    <div>
                        <div className="leading-[22px] mb-[4px]">链接</div>
                        <Form.Item name="url" rules={[{ pattern: REGEXP_URL, message: '请输入正确的链接' }]} >
                            <Input placeholder="请输入" />
                        </Form.Item>
                    </div>
                    {
                        <Form.Item noStyle shouldUpdate >
                            {(form) => {
                                const url = form.getFieldValue('url');
                                console.log(url, REGEXP_URL.test(url))
                                return <Button
                                    disabled={!REGEXP_URL.test(url)}
                                    onClick={() => {
                                        const values = form.getFieldsValue();

                                        activeEditor.update(() => {
                                            const newOptions = {
                                                url
                                            }
                                            if (editArticleKey) {
                                                const node = $getNodeByKey(editArticleKey) as ArticleNode
                                                node.setOptions(newOptions)
                                                hideModal();
                                                return true;
                                            }
                                            const selection = $getSelection()!
                                            if (!selection) return;
                                            const pNode = $createParagraphNode()
                                            const articleNode = $createArticleNode(newOptions);
                                            // pNode
                                            pNode.append(articleNode)
                                            // selection.insertNodes([
                                            //     pNode
                                            // ]);
                                            selection.insertNodes([
                                                articleNode
                                            ]);
                                            hideModal();
                                            return true
                                        })
                                        // onOk?.(values.url)
                                    }}
                                >
                                    确定
                                </Button>
                            }}

                        </Form.Item>
                    }
                </Form>
            </Modal>
            <TooltipWithMenu isShowToolTip title="插入文章">
                <article
                    className={`h-[32px] w-[32px] cursor-pointer hover:bg-[#f0f0f0] flex items-center justify-center rounded-[8px] ${isArticle ? 'hover:bg-[#f0f0f0]' : ''}`}
                    onClick={() => {
                        // setSelectionEditPanelContentDom(ArticleEditPanelDom(true))
                        setIsArticle(true)
                    }}
                >
                    <Article />
                </article>
            </TooltipWithMenu>
        </div>
    );
}
export default ArticleToolBar;