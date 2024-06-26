import { Button, Form, Input, Tabs } from 'antd';
import { ButtonUIProps } from '../ButtonUI'
import { useEffect } from 'react';

export interface ButtonEditValue extends Pick<ButtonUIProps, 'color' | 'href' | 'type' | 'children'> {
}

export interface ButtonEditPanelProps {
    value?: ButtonEditValue;
    onChange?: (value: ButtonEditValue) => void;
    onOk?: ButtonEditPanelProps['onChange'];
}

const colorOptionsList = [
    ['#FA541C', 'red'],
    ['#0586FE', 'blue'],
    ['#FAAD14', 'yellow'],
]

interface ColorOptionsProps {
    value?: string;
    onChange?: (color: string) => void;
}
const choosedDom = (color: 'white' | 'black') => {
    const stroke = color;
    return <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M10.75 2.75L4.21875 9.25L1.25 6.29545" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
}

export const ColorOptions = (props: ColorOptionsProps) => {
    const { onChange, value } = props
    return <div className="flex" >
        {colorOptionsList.map(item => {
            const [color, key] = item;
            return <div
                style={{ backgroundColor: color }}
                className="cursor-pointer w-[16px] h-[16px] mr-[8px] rounded-[2px] mb-[8px] flex items-center justify-center relative group"
                key={key}
                onClick={() => {
                    onChange?.(key)
                }}
            >
                <div className="left-[-2px] top-[-2px] absolute w-[20px] h-[20px] rounded-[2px] hidden group-hover:block border-[#ccc] border " />
                {key === value && choosedDom('white')}
            </div>
        })}
    </div>
}


const ButtonEditPanel = (props: ButtonEditPanelProps) => {
    const { onOk, value, onChange } = props;
    const [form] = Form.useForm()
    useEffect(() => {
        if (!value) return;
        form.setFieldsValue(value)
    }, [value, form])
    const disabled = false;

    return <div className="w-[480px] rounded-[4px] p-[16px] bg-white border border-[#f0f0f0] shadow-[#000]/[.06]"  >
        <Form form={form} >
            <div>
                <Form.Item name="type" valuePropName="activeKey"  >
                    <Tabs
                        items={[
                            { label: '线性按钮', key: 'default' },
                            { label: '面性按钮', key: 'primary' },
                        ]}
                    />
                </Form.Item>
            </div>
            <div>
                <div className="leading-[22px]">文本</div>
                <Form.Item name="children" >
                    <Input placeholder="请输入" />
                </Form.Item>
            </div>
            <div>
                <div className="leading-[22px]">链接</div>
                <Form.Item name="href" >
                    <Input placeholder="请输入" />
                </Form.Item>
            </div>
            <div>
                <div className="leading-[22px]" >颜色</div>
                <Form.Item name="color" >
                    <ColorOptions />
                </Form.Item>
            </div>
            <Button
                disabled={disabled}
                onClick={() => {
                    const values = form.getFieldsValue();
                    onChange?.(values)
                    onOk?.(values)
                }}
            >
                确定
            </Button>
        </Form>
    </div>
}

export default ButtonEditPanel;