/*
 * @Author: shiguang
 * @Date: 2024-06-07 17:24:01
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-19 13:59:23
 * @Description: 
 */
import useLexicalEditable from "@lexical/react/useLexicalEditable";
import { ButtonNodeOptions } from "../ButtonNode";
import ButtonUI from "../ButtonUI";
import { buttonToolBarEmitter } from "../ButtonToolBar";
import { Tooltip } from "antd";

interface ButtonDecorateProps {
    nodeKey: string;
    options: ButtonNodeOptions;
}

const ButtonDecorate = (props: ButtonDecorateProps) => {
    const { options, nodeKey } = props
    const { type, href, color, children } = options;
    const isEditable = useLexicalEditable()
    const dom = <ButtonUI
        {...{ type, href, color }}
        className="inline-block"

    >
        {children}
    </ButtonUI>
    if (!isEditable) return dom;
    return <Tooltip
        arrow={false}
        title={
            <span onClick={() => buttonToolBarEmitter.emit('editButton', nodeKey)} className="cursor-pointer" >
                编辑
            </span>
        } >

        <div>{dom}</div>
    </Tooltip>
}

export default ButtonDecorate;