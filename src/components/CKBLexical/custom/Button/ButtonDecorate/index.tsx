/*
 * @Author: shiguang
 * @Date: 2024-06-07 17:24:01
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-17 06:11:57
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
    const dom = <ButtonUI
        {...{ type, href, color }}

    >
        {children}
    </ButtonUI>
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