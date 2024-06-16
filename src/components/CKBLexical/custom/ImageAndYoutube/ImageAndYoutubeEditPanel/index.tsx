/*
 * @Author: shiguang
 * @Date: 2024-06-11 16:30:58
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-12 10:38:45
 * @Description: 
 */
import { Button, Form, Input, Tabs } from 'antd';
// import { ButtonUIProps } from '../ButtonUI'
import { useEffect } from 'react';
import ImageUpload from '../../../components/ImageUpload';

// export interface ButtonEditValue extends Pick<ButtonUIProps, 'color' | 'href' | 'type' | 'children'> {
// }

export type ButtonEditValue = any

export interface ButtonEditPanelProps {
    value?: ButtonEditValue;
    onChange?: (value: ButtonEditValue) => void;
    onOk?: ButtonEditPanelProps['onChange'];
    onImageChange?: (url: string | undefined) => void;
    onYoutubeOk?: (url: string | undefined) => void;
}

const colorOptionsList = [
    ['#FA541C', 'red'],
    ['#0586FE', 'blue'],
    ['#FAAD14', 'yellow'],
]




const ButtonEditPanel = (props: ButtonEditPanelProps) => {
    const { onOk, value, onChange, onImageChange, onYoutubeOk } = props;
    const [form] = Form.useForm()
    useEffect(() => {
        if (!value) return;
        form.setFieldsValue(value)
    }, [value, form])
    const disabled = false;

    return <div className="w-[480px] rounded-[4px] p-[16px] bg-white border border-[#f0f0f0] shadow-[#000]/[.06]"  >
        <Form form={form} initialValues={{ imageOrYoutube: 'image' }} >
            <div>
                <Form.Item name="imageOrYoutube" valuePropName="activeKey" noStyle  >
                    <Tabs
                        items={[
                            { label: '图片', key: 'image' },
                            { label: '视频', key: 'youtube' },
                        ]}
                    />
                </Form.Item>
            </div>
            <div>
                <Form.Item shouldUpdate noStyle >
                    {
                        ({ getFieldValue }) => {
                            console.log(getFieldValue('imageOrYoutube'), 333)
                            if (getFieldValue('imageOrYoutube') !== 'image') return null
                            return <Form.Item name="imageUrl" noStyle >
                                <ImageUpload
                                    onChange={onImageChange}
                                >
                                    {(url) => {
                                        if (!url) return (
                                            <div className="h-[138px] w-[448px] flex items-center cursor-pointer justify-center" >
                                                <div className='text-center' >单击或拖动文件到此区域进行上传</div>
                                            </div>
                                        )
                                        return (
                                            <div
                                                className={`h-[138px] !w-[448px] flex items-center cursor-pointer justify-center bg-contain bg-no-repeat`}
                                                style={{
                                                    backgroundImage: `url(${url})`, backgroundPosition: 'center'
                                                }}
                                            >
                                            </div>
                                        )
                                    }}
                                </ImageUpload>
                            </Form.Item>
                        }
                    }
                </Form.Item>
            </div>
            <Form.Item shouldUpdate noStyle >
                {({ getFieldValue }) => {
                    if (getFieldValue('imageOrYoutube') !== 'youtube') return null
                    return <div>
                        <div className="leading-[22px]">链接</div>
                        <Form.Item name="href" >
                            <Input placeholder="请输入" />
                        </Form.Item>
                    </div>
                }}
            </Form.Item>
            <Button
                disabled={disabled}
                onClick={() => {
                    const values = form.getFieldsValue();
                    if (values.imageOrYoutube === 'youtube'){
                        onYoutubeOk?.(values.href)
                    }
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