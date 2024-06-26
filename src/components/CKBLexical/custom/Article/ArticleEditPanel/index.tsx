/*
 * @Author: shiguang
 * @Date: 2024-06-11 16:30:58
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-18 20:34:40
 * @Description: 
 */
import { Button, Form, Input, Tabs } from 'antd';
import { useEffect } from 'react';
import { REGEXP_URL } from '../../../utils/regexp';


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

    return <div className="w-[480px] rounded-[4px] p-[16px] bg-white border border-[#f0f0f0] shadow-[#000]/[.06]"  >
        <Form form={form} >
            <div>
                <div className="leading-[22px] mb-[4px]">链接</div>
                <Form.Item name="url" rules={[{ pattern: REGEXP_URL, message: '请输入正确的链接' }]} >
                    <Input placeholder="请输入" />
                </Form.Item>
            </div>
            {
                <Form.Item noStyle shouldUpdate >
                    {(form) => {
                        const url = form.getFieldValue('url');
                        return <Button
                            disabled={!REGEXP_URL.test(url)}
                            onClick={() => {
                                const values = form.getFieldsValue();
                                onOk?.(values.url)
                            }}
                        >
                            确定
                        </Button>
                    }}

                </Form.Item>
            }
        </Form>
    </div>
}

export default ArticleEditPanel;