/*
 * @Author: shiguang
 * @Date: 2024-05-27 15:22:12
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-14 10:48:20
 * @Description: 
 */

/*
 * @Author: shiguang
 * @Date: 2024-05-23 18:03:08
 * @LastEditors: shiguang
 * @LastEditTime: 2024-05-24 09:39:59
 * @Description: 不断的点击修改 leading 会有问题
 */
import {
    DownOutlined,
    CaretDownOutlined,
    AlignLeftOutlined,
    AlignCenterOutlined,
    AlignRightOutlined
} from '@ant-design/icons';
import { $createHeadingNode, $isHeadingNode, HeadingTagType } from '@lexical/rich-text';
import { $setBlocksType } from '@lexical/selection';
import {
    $findMatchingParent,
    mergeRegister,
} from '@lexical/utils';
import { Dropdown, MenuProps } from 'antd';
import { $createParagraphNode, $getSelection, $isElementNode, $isRangeSelection, $isRootOrShadowRoot, ElementFormatType, FORMAT_ELEMENT_COMMAND, LexicalEditor } from 'lexical';
import { useState } from 'react';
import { useSelectionChange } from '../../hooks/useSelectionChange';
import { getSelectedNode } from '../../../../utils/getSelectedNode';
const conf: Record<string, any> = {
    left: { 
        title: '左对齐',
        icon: <AlignLeftOutlined  />,
    },
    right: { 
        title: '居中对齐',
        icon: <AlignCenterOutlined  />,
    },
    center: { 
        title: '右对齐',
        icon: <AlignRightOutlined  />,
    },
}
const getTitleByKey = (key: string) => {
    return conf[key];
}
const items: MenuProps['items'] = [
    {
        key: 'left',
        label: <div className="flex items-center" >
            <AlignLeftOutlined  />
            <span className="pl-[8px]" >
                左对齐
            </span>
        </div>
    },
    {
        key: 'center',
        label: <div className="flex items-center" >
            <AlignCenterOutlined />
            <span className="pl-[8px]" >
                居中对齐
            </span>
        </div>
    },
    {
        key: 'right',
        label: <div className="flex items-center" >
            <AlignRightOutlined />
            <span className="pl-[8px]" >
                右对齐
            </span>
        </div>
    },

];
interface TextAlignMenuProps {
    activeEditor: LexicalEditor;
}


const TextAlign = (props: TextAlignMenuProps) => {
    const { activeEditor } = props;
    const [textAlign, setTextAlign] = useState('left');
    const curItem: any = items.find(item => item?.key === textAlign)!;
    
    useSelectionChange(activeEditor, () => {
        const selection = $getSelection();
        if (!$isRangeSelection(selection)) {
            return
        }
        const node = getSelectedNode(selection);
        const parent = node.getParent();
        let _textAlign = $isElementNode(parent) ? parent.getFormatType() || 'left' : 'left'
        _textAlign = _textAlign === 'start' ? 'left' : _textAlign;
        _textAlign = _textAlign === 'end' ? 'right' : _textAlign;
        setTextAlign(_textAlign);
    })
    
    return (
        <div>
            <Dropdown
                menu={{
                    selectedKeys: [textAlign],
                    items,
                    onClick: ({ key }) => {
                        setTextAlign(key)
                        activeEditor.dispatchCommand(FORMAT_ELEMENT_COMMAND, key as ElementFormatType);
                    },
                }}
                onOpenChange={(val) => {
                    console.log(val)
                }}
            >
                <div className="flex items-center justify-center cursor-pointer rounded-[8px] hover:bg-[#f0f0f0] h-[32px] px-[6px]" >
                    {getTitleByKey(curItem?.key)?.icon}
                    <div className="flex items-center justify-center w-[16px] ml-[2px]" >
                        <CaretDownOutlined className="text-[12px]" />
                    </div>
                </div>
            </Dropdown>
        </div>
    );
}
export default TextAlign;
