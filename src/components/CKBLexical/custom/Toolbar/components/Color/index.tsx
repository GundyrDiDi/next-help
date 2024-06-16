/*
 * @Author: shiguang
 * @Date: 2024-05-24 14:02:54
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-14 10:46:02
 * @Description: 
 */

import TooltipWithMenu from "../../../../components/TooltipWithMenu";
import { useState } from "react";
import { $getSelection, $isRangeSelection, LexicalEditor } from "lexical";
import { $getSelectionStyleValueForProperty, $patchStyleText } from "@lexical/selection";
import { Color as ColorObj } from "antd/es/color-picker";
import { curry, pipe } from "ramda";
import ColorChooseButton from "../../../../components/ColorChooseButton";
import FontColor from "../../../../Icon/components/FontColor";
import BackgroundColor from "../../../../Icon/components/BackgroundColor";


interface ColorProps {
    activeEditor: LexicalEditor;
}
const Color = (props: ColorProps) => {
    const { activeEditor } = props
    // const [cacheFontColor, setCacheFontColor] = useState<string>('#000');
    // const [cacheBgColor, setCacheBgColor] = useState<string>('#444');
    // const [cacheLightColor, setCacheLightColor] = useState<string>('#fff');

    const [fontColor, setFontColor] = useState<string>('#000');
    const [bgColor, setBgColor] = useState<string>('#444');


    // useSelectionChange(activeEditor, () => {
    //     const selection = $getSelection();
    //     if (!$isRangeSelection(selection)) {
    //         return
    //     }
    //     setFontColor(
    //         $getSelectionStyleValueForProperty(selection, 'color', '#000'),
    //     );
    // })

    const colorChange = (type: 'bgColor' | 'fontColor' | 'light', hexString: string) => {
        activeEditor.update(
            () => {
                const selection = $getSelection();
                if (selection !== null) {
                    if (type === 'fontColor') {
                        $patchStyleText(selection, { color: hexString });
                    } else {
                        if (type === 'light') {
                            $patchStyleText(selection, { 'background': 'linear-gradient(transparent 60%, rgba(252, 185, 0, 0.7) 0)' });
                            // background: linear-gradient(transparent 60%, rgba(252, 185, 0, 0.7) 0);
                            // $patchStyleText(selection, { 'background-color': hexString });
                        } else {
                            $patchStyleText(selection, { 'background-color': hexString });
                        }

                    }

                }
            },
            { tag: 'historic' }
        );
        if (type === 'fontColor') {
            setFontColor(hexString)
        } else {
            setBgColor(hexString)
        }
    }
    const curryColorChange = curry(colorChange);
    // const fontColorChange = curryColorChange('fontColor');
    // const bgColorChange = curryColorChange('bgColor');
    const lightChange = curryColorChange('light');


    const setColorToDom = (type: 'bgColor' | 'fontColor', color: string) => {
        activeEditor.update(() => {
            const selection = $getSelection();
            if (!selection) return;
            $patchStyleText(selection, { [type === 'bgColor' ? 'background-color' : 'color']: color });
        })
    }

    return (
        <div className="flex" >
            <TooltipWithMenu isShowToolTip title="字体颜色">
                <div className="mr-[10px]" >
                    <ColorChooseButton
                        value={fontColor}
                        onChange={val => {
                            const newVal = val ?? '#000';
                            setFontColor(newVal)
                            setColorToDom('fontColor', newVal)
                        }}
                        icon={
                        <button className="p-[8px] hover:rounded-[4px] hover:bg-[#F0F0F0] cursor-pointer" >
                            <FontColor
                                fontColor={fontColor}
                                onClick={() => setColorToDom('fontColor', fontColor)}
                            />
                        </button>
                            
                    }
                    />
                </div>

                {/* <ColorPicker
                    disabledAlpha value={fontColor}
                    onChange={val => setCacheFontColor(val.toHexString())}
                    panelRender={(_, { components: { Picker, Presets } }) => {
                        return <div className="w-[300px]" >
                            <div className="text-right mb-[4px]" >
                                <Button size="small" type="primary" onClick={() => fontColorChange(cacheFontColor)} >确认</Button>
                            </div>
                            <Presets/>
                            <Picker/>
                        </div>
                    }}
                >
                    <div className={`h-[32px] w-[32px] cursor-pointer hover:bg-[#f0f0f0] flex items-center justify-center rounded-[8px]`} >
                        <FontColorsOutlined />
                    </div>
                </ColorPicker> */}
            </TooltipWithMenu>

            <TooltipWithMenu isShowToolTip title="背景颜色">
                <ColorChooseButton
                    value={bgColor}
                    // onChange={val => setBgColor(val ?? '#000')} 
                    onChange={val => {
                        const newVal = val ?? '#000';
                        setBgColor(newVal)
                        setColorToDom('bgColor', newVal)
                        // debugger
                        // activeEditor.update(() => {
                        //     const selection = $getSelection();
                        //     if(!selection) return;
                        //     $patchStyleText(selection, { 'background-color': newVal });
                        // })
                    }}
                    icon={
                        <button className="p-[8px] hover:rounded-[4px] hover:bg-[#F0F0F0] cursor-pointer" >
                            <BackgroundColor
                                backgroundColor={bgColor}
                                onClick={() => setColorToDom('bgColor', bgColor)}
                            />
                        </button>
                    }
                />
                {/* <ColorPicker
                    disabledAlpha 
                    value={fontColor}
                    onChange={val => setCacheBgColor(val.toHexString())}
                    panelRender={(_, { components: { Picker, Presets } }) => {
                        return <div className="w-[300px]" >
                            <div className="text-right mb-[4px]" >
                                <Button size="small" type="primary" onClick={() => bgColorChange(cacheBgColor)} >确认</Button>
                            </div>
                            <Presets/>
                            <Picker/>
                        </div>
                    }}
                >
                    <div className={`h-[32px] w-[32px] cursor-pointer hover:bg-[#f0f0f0] flex items-center justify-center rounded-[8px]`} >
                        <BgColorsOutlined />
                    </div>
                </ColorPicker> */}
            </TooltipWithMenu>
            {/* <TooltipWithMenu isShowToolTip title="高亮">
                <ColorPicker
                    disabledAlpha
                    value={fontColor}
                    onChange={val => {
                        console.log('val.toRgbString()', val.toRgbString(), val.toRgb())
                        setCacheLightColor(val.toHexString())
                    }}
                    panelRender={(_, { components: { Picker, Presets } }) => {
                        return <div className="w-[300px]" >
                            <div className="text-right mb-[4px]" >
                                <Button size="small" type="primary" onClick={() => lightChange(cacheLightColor)} >确认</Button>
                            </div>
                            <Presets />
                            <Picker />
                        </div>
                    }}
                >
                    <div className={`h-[32px] w-[32px] cursor-pointer hover:bg-[#f0f0f0] flex items-center justify-center rounded-[8px]`} >
                        高亮
                    </div>
                </ColorPicker>
            </TooltipWithMenu> */}
        </div>
    )
}
export default Color;