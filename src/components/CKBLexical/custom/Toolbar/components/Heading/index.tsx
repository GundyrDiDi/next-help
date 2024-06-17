/*
 * @Author: shiguang
 * @Date: 2024-05-23 18:03:08
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-17 18:33:15
 * @Description: 不断的点击修改 leading 会有问题
 */
import {
    DownOutlined,
    CaretDownOutlined
} from '@ant-design/icons';
import { $createHeadingNode, $isHeadingNode, HeadingTagType } from '@lexical/rich-text';
import { $setBlocksType } from '@lexical/selection';
import {
    $findMatchingParent,
    mergeRegister,
} from '@lexical/utils';
import { Dropdown, MenuProps } from 'antd';
import { $createParagraphNode, $getSelection, $isRangeSelection, $isRootOrShadowRoot, LexicalEditor } from 'lexical';
import { useEffect, useState } from 'react';
import { useSelectionChange } from '../../hooks/useSelectionChange';
// MenuProps['items']
const items = [
    {
        key: '-1',
        labelText: '正文',
        label: <span className="text-[#000] text-[14px] font-[500]" >正文</span>,
    },

    {
        key: 'h2',
        label: <><span className="text-[#000] text-[24px] font-[700]" >H2 二级标题</span></>,
        labelText: 'H2 二级标题',
    },
    {
        key: 'h3',
        label: <><span className="text-[#000] text-[20px] font-[700]" >H3 三级标题</span></>,
        labelText: 'H3 三级标题',
    },
    {
        key: 'h4',
        label: <> <span className="text-[#000] text-[16px] font-[700]" >H4 四级标题</span></>,
        labelText: 'H4 四级标题',
    },
    {
        key: 'h5',
        label: <> <span className="text-[#000] text-[14px] font-[700]" >H5 五级标题</span></>,
        labelText: 'H5 五级标题',
    },
];
interface HeadingMenuProps {
    activeEditor: LexicalEditor;
}


const Heading = (props: HeadingMenuProps) => {
    const { activeEditor } = props;
    const [currentLeading, setCurrentLeading] = useState('-1');
    const curItem: any = items.find(item => item?.key === currentLeading)!;
    const formatHeading = (headingSize: HeadingTagType | '-1') => {
        activeEditor.update(() => {
            const selection = $getSelection();
            if (headingSize === '-1') {
                if ($isRangeSelection(selection)) {
                    $setBlocksType(selection, () => $createParagraphNode());
                }
            } else {
                $setBlocksType(selection, () => $createHeadingNode(headingSize));
            }
        });
    };
    useSelectionChange(activeEditor, () => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
            const anchorNode = selection.anchor.getNode();
            let element =
                anchorNode.getKey() === 'root'
                    ? anchorNode
                    : $findMatchingParent(anchorNode, (e) => {
                        const parent = e.getParent();
                        return parent !== null && $isRootOrShadowRoot(parent);
                    });

            if (element === null) {
                element = anchorNode.getTopLevelElementOrThrow();
            }
            const elementKey = element.getKey();
            const elementDOM = activeEditor.getElementByKey(elementKey);
            if (!elementDOM) return;
            if ($isHeadingNode(element)) {
                setCurrentLeading(element.getTag())
            } else {
                setCurrentLeading('-1')
            }
        }
    })
    return (
        <div>
            <Dropdown
                menu={{
                    selectedKeys: [currentLeading],
                    items,
                    onClick: ({ key }) => {
                        console.log(key, 666)
                        formatHeading(key as HeadingTagType)
                        setCurrentLeading(key as any)
                    },
                }}
                onOpenChange={(val) => {
                    console.log(val)
                }}
            >
                <div className="flex items-center justify-center cursor-pointer rounded-[8px] hover:bg-[#f0f0f0] h-[32px] px-[6px]" >
                    <span className="mr-[4px]" >
                        {curItem?.labelText?.split(' ')?.[0]}
                    </span>
                    <CaretDownOutlined className="text-[12px]" />
                </div>
            </Dropdown>
        </div>
    );
}
export default Heading;