/*
 * @Author: shiguang
 * @Date: 2024-06-11 16:30:58
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-14 00:29:36
 * @Description: 
 */
import { Button, Form, Input, Tabs } from 'antd';
import { useEffect } from 'react';


export interface ArticleEditPanelProps {
    value?: string;
    onChange?: (value: string) => void;
    onOk?: ArticleEditPanelProps['onChange'];
    onImageChange?: (url: string | undefined) => void;
    onYoutubeOk?: (url: string | undefined) => void;
}

const ArticleEditPanel = (props: ArticleEditPanelProps) => {
    const { onOk, value, onChange, onImageChange, onYoutubeOk } = props;
    const [form] = Form.useForm()
    useEffect(() => {
        if (!value) return;
        form.setFieldsValue({ url: value })
    }, [value, form])
    const disabled = false;


    return <div className="w-[480px] rounded-[4px] p-[16px] bg-white border border-[#f0f0f0] shadow-[#000]/[.06]"  >
        <Form form={form} >
            <div>
                <div className="leading-[22px] mb-[4px]">链接</div>
                <Form.Item name="url" >
                    <Input placeholder="请输入" />
                </Form.Item>
            </div>
            <Button
                disabled={disabled}
                onClick={() => {
                    const values = form.getFieldsValue();
                    onOk?.(values.url)
                }}
            >
                确定
            </Button>
        </Form>
    </div>
}

export default ArticleEditPanel;