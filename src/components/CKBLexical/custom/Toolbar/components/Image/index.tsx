/*
 * @Author: shiguang
 * @Date: 2024-05-24 15:40:24
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-14 10:47:37
 * @Description: 
 */
import { LexicalEditor } from "lexical";
import TooltipWithMenu from "../../../../components/TooltipWithMenu";
import { FileImageOutlined } from "@ant-design/icons";
import { useSelectionChange } from "../../hooks/useSelectionChange";
import { InsertImageDialog } from "../../../Image/ImagePlugin";
import { useState } from "react";
import { Modal } from "antd";

interface ImageProps {
    activeEditor: LexicalEditor;
}

const Image = (props: ImageProps) => {
    const { activeEditor } = props;
    const [visible, setVisible] = useState(false)

    useSelectionChange(activeEditor, () => {

    })
    const onClose = () => {
        setVisible(false);
    }
    return <div>
        <Modal title="插入图片" destroyOnClose open={visible} onCancel={onClose} >
            <InsertImageDialog
                activeEditor={activeEditor}
                onClose={onClose}
            />
        </Modal>
        <TooltipWithMenu isShowToolTip title="图片">
            <div 
                className={`h-[32px] w-[32px] cursor-pointer hover:bg-[#f0f0f0] flex items-center justify-center rounded-[8px]`} 
                onClick={() => {
                    setVisible(true)
                }}
            >
                <FileImageOutlined/>
            </div>
        </TooltipWithMenu>
    </div>
}

export default Image;