/*
 * @Author: shiguang
 * @Date: 2024-05-27 16:52:52
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-14 10:47:17
 * @Description: 
 */
import { Dropdown, MenuProps } from 'antd';
import {  $getSelection, $isRangeSelection, LexicalEditor } from 'lexical';
import { useState } from 'react';
import { useSelectionChange } from '../../hooks/useSelectionChange';
import { getSelectedNode } from '../../../../utils/getSelectedNode';
import { $getSelectionStyleValueForProperty, $patchStyleText } from '@lexical/selection';

const items: MenuProps['items'] = [
    {
        key: 'Arial',
        label: <div className="flex items-center" >
            Arial
        </div>
    },
    {
        key: 'Courier New',
        label: <div className="flex items-center" >
            Courier New
        </div>
    },
    {
        key: 'Georgia',
        label: <div className="flex items-center" >
            Georgia
        </div>
    },
    {
        key: 'Times New Roman',
        label: <div className="flex items-center" >
            Times New Roman
        </div>
    },
    {
        key: 'Trebuchet MS',
        label: <div className="flex items-center" >
            Trebuchet MS
        </div>
    },
    {
        key: 'Verdana',
        label: <div className="flex items-center" >
            Verdana
        </div>
    },

];
interface FontFamilyMenuProps {
    activeEditor: LexicalEditor;
}


const FontFamily = (props: FontFamilyMenuProps) => {
    const { activeEditor } = props;
    const [fontFamily, setFontFamily] = useState('Arial');
    const curItem: any = items.find(item => item?.key === fontFamily)!;
    
    useSelectionChange(activeEditor, () => {
        const selection = $getSelection();
        if (!$isRangeSelection(selection)) {
            return
        }
        const node = getSelectedNode(selection);
        setFontFamily(
            $getSelectionStyleValueForProperty(selection, 'font-family', 'Arial'),
        )
    })
    return (
        <div>
            <Dropdown
                menu={{
                    selectedKeys: [fontFamily],
                    items,
                    onClick: ({ key }) => {
                        const style = 'font-family';
                        setFontFamily(key)
                        activeEditor.update(() => {
                            const selection = $getSelection();
                            if (selection !== null) {
                              $patchStyleText(selection, {
                                [style]: key,
                              });
                            }
                          });
                        // activeEditor.dispatchCommand(FORMAT_ELEMENT_COMMAND, key as ElementFormatType);
                    },
                }}
                onOpenChange={(val) => {
                    console.log(val)
                }}
            >
                <div className="flex items-center justify-center cursor-pointer rounded-[8px] hover:bg-[#f0f0f0] h-[32px] px-[6px]" >
                    {curItem.label}
                </div>
            </Dropdown>
        </div>
    );
}
export default FontFamily;
