/*
 * @Author: shiguang
 * @Date: 2024-06-07 17:24:01
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-11 16:04:47
 * @Description: 
 */
import useLexicalEditable from "@lexical/react/useLexicalEditable";
import { ButtonNodeOptions } from "../ButtonNode";
import ButtonUI from "../ButtonUI";
import { buttonToolBarEmitter } from "../ButtonToolBar";

interface ButtonDecorateProps {
    nodeKey: string;
    options: ButtonNodeOptions;
}

const ButtonDecorate = (props: ButtonDecorateProps) => {
    const { options, nodeKey } = props
    const { type, href, color, children } = options;

    return <ButtonUI
        {...{ type, href, color }}
        onClick={() => {
            buttonToolBarEmitter.emit('editButton', nodeKey)
        }}
    >
        {children}
    </ButtonUI>
}

export default ButtonDecorate;