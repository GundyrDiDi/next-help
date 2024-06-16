/*
 * @Author: shiguang
 * @Date: 2024-05-23 18:03:08
 * @LastEditors: shiguang
 * @LastEditTime: 2024-05-24 10:50:29
 * @Description: 
 */
import {
    CaretDownOutlined
} from '@ant-design/icons';
import { $getSelectionStyleValueForProperty, $patchStyleText, $setBlocksType } from '@lexical/selection';
import { Dropdown, MenuProps } from 'antd';
import { $getSelection, $isRangeSelection, LexicalEditor } from 'lexical';
import { useState } from 'react';
import { useSelectionChange } from '../../hooks/useSelectionChange';
import { $isTableSelection } from '@lexical/table';

const items: MenuProps['items'] = new Array(40).fill(0).map((_, index) => {
    const fontSize = index + 10
    return {
        key: fontSize.toString() + 'px',
        label: fontSize + 'px',
    }
});

// [
//     {
//         key: '-1',
//         label: 'Normal  正文',
//     },
//     {
//         key: 'h1',
//         label: 'H1 一级标题',
//     },
//     {
//         key: 'h2',
//         label: 'H2 二级标题',
//     },
//     {
//         key: 'h3',
//         label: 'H3 三级标题',
//     },
//     {
//         key: 'h4',
//         label: 'H4 四级标题',
//     },
// ];

const MIN_ALLOWED_FONT_SIZE = 8;
const MAX_ALLOWED_FONT_SIZE = 72;
const DEFAULT_FONT_SIZE = 15;
interface HeadingMenuProps {
    activeEditor: LexicalEditor;
}


const FontSize = (props: HeadingMenuProps) => {
    const { activeEditor } = props;
    const [currenFontSize, setCurrenFontSize] = useState('14');
    const curItem: any = items.find(item => item?.key === currenFontSize)!;
    const fontSizeChange = (newFontSize: string) => {
        activeEditor.update(() => {
            if (activeEditor.isEditable()) {
              const selection = $getSelection();
              if (selection !== null) {
                $patchStyleText(selection, {
                  'font-size': newFontSize,
                });
              }
            }
          });
    };
    useSelectionChange(activeEditor, () => {
        const selection = $getSelection();
        if ($isRangeSelection(selection) || $isTableSelection(selection)) {
            const anchorNode = selection.anchor.getNode();
            const elementKey =  anchorNode.getKey();
            const elementDOM = activeEditor.getElementByKey(elementKey)!;
            const computedFontSize = window.getComputedStyle(elementDOM, null).getPropertyValue('font-size')
            // const fontSize = $getSelectionStyleValueForProperty(selection, 'font-size', DEFAULT_FONT_SIZE as any);
            setCurrenFontSize(computedFontSize);
        }
    })
    return (
        <div>
            <Dropdown
                className="!max-h-[60px] overflow-y-auto"
                menu={{                 
                    className: "!max-h-[200px] overflow-y-auto w-[90px] text-center",   
                    selectedKeys: [currenFontSize],
                    items,
                    onClick: ({ key }) => {
                        fontSizeChange(key)
                        setCurrenFontSize(key as any)
                    },
                }}
                onOpenChange={(val) => {
                    console.log(val)
                }}
            >
                <div className="flex items-center justify-center cursor-pointer rounded-[8px] hover:bg-[#f0f0f0] h-[32px] px-[6px]" >
                    <span className="mr-[4px]" >
                        {curItem?.label}
                    </span>
                    <CaretDownOutlined className="text-[12px]" />
                </div>
            </Dropdown>
        </div>
    );
}
export default FontSize;