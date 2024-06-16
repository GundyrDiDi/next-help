import { CaretDownOutlined } from "@ant-design/icons";
import { Popover } from "antd";
import React, { useState } from "react";
import ColorCard from "../ColorCard";

/*
 * @Author: shiguang
 * @Date: 2024-06-05 15:15:14
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-07 16:35:29
 * @Description: 
 */
interface ColorChooseButtonProps {
    value?: string;
    onChange?: (color?: string) => any;
    icon?: React.ReactNode;
}

const ColorChooseButton = (props: ColorChooseButtonProps) => {
    const { value, onChange, icon } = props;
    const [internalColor, setInternalColor] = useState<string>()
    const [open, setOpen] = useState(false)
    const isOuter = onChange !== undefined;

    const color = isOuter ? value : internalColor;

    const _colorChange = isOuter ? onChange : (color?: string) => setInternalColor(color);
    const colorChange = (color?: string) => {
        _colorChange(color);
        setOpen(false);
        setTimeout(() => {
            document.body.click();
        }, 400)
    }


    return <div className={`flex items-center justify-center ${open ? ' rounded-[4px] bg-[#F5F5F5]' : ''}`} >
        {icon}
        {/* <div>
            字体颜色
        </div> */}
        <Popover
            open={open}
            arrow={false}
            trigger="click"
            onOpenChange={(_open) => {
                setOpen(_open)
            }}
            content={<ColorCard value={color} onChange={colorChange} />}
        >
            <button className="ml-[2px] w-[16px] h-[32px] cursor-pointer rounded-[4px] flex justify-center items-center hover:bg-[#F5F5F5] " >
                <CaretDownOutlined
                    className="text-[12px]"
                />
            </button>
        </Popover>
    </div>
}
export default ColorChooseButton;


{/* <TooltipWithMenu isShowToolTip title="字体颜色">
                <ColorPicker
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
                </ColorPicker>
            </TooltipWithMenu> */}