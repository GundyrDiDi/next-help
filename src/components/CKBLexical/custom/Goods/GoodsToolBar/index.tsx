/*
 * @Author: shiguang
 * @Date: 2024-05-28 16:09:23
 * @LastEditors: shiguang
 * @LastEditTime: 2024-05-29 10:55:18
 * @Description: InsertGoodsToolBar
 */
import { Input, Modal } from "antd";
import { $createParagraphNode, $getSelection, $isRangeSelection, $isRootNode, LexicalEditor, RangeSelection } from "lexical";
import { useEffect, useState } from "react";
import { getSelectedNode } from "../../../utils/getSelectedNode";
import { $createGoodsNode } from "../GoodsNode";
import { useSelectionChange } from "../../Toolbar/hooks/useSelectionChange";

interface GoodsToolBarProps {
    activeEditor: LexicalEditor;
}
const GoodsToolBar = (props: GoodsToolBarProps) => {
    const { activeEditor } = props;
    const [goodsUrl, setGoodsUrl] = useState<string>('TB-575662370361')
    const [isOpen, setIsOpen] = useState<boolean>()
    useEffect(()=>{},[])
    useSelectionChange(activeEditor, () => {
        
    })

    return (
        <div>
            <Modal
                title="插入商品"
                open={isOpen}
                onOk={() => {
                    if(!goodsUrl) return;
                    activeEditor.update(() => {
                        const selection = $getSelection()
                        if (!selection) return;
                        const goodsNode = $createGoodsNode({ url: goodsUrl, text: '' })
                        selection.insertNodes([goodsNode])
                    })
                    setIsOpen(false)
                }}
            >
                <Input
                    placeholder="请输入商品code"
                    value={goodsUrl}
                    onChange={(e) => {
                        setGoodsUrl(e.target.value)
                    }}
                />
            </Modal>
            <div
                className=" cursor-pointer"
                onClick={() => {
                    setIsOpen(true)
                }}
            >
                插入商品
            </div>
        </div>
    );
}
export default GoodsToolBar;