/*
 * @Author: shiguang
 * @Date: 2024-06-12 17:50:15
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-16 23:05:44
 * @Description: 
 */
'use client'
import { MinusCircleOutlined } from "@ant-design/icons";
import { Button, Form, Modal, Input } from "antd";
import { title } from "process";
import { useEffect, useState } from "react";
import { ProductUIProps } from "../../custom/Product/ProductUI";

interface MultiUrlModalProps {
    onOk?: (urls?: ProductUIProps['urlList']) => void;
    onClose?: () => void;
    type: 'product' | 'shop';
    maxCount?: number;
    initialValue?: ProductUIProps['urlList'];

}

const config = {
    product: {
        title: '商品'
    },
    shop: {
        title: '店铺'
    }
}
const MultiUrlModal = (props: MultiUrlModalProps) => {
    const { type, onOk, maxCount = 99, onClose, initialValue } = props;
    const [form] = Form.useForm()
    useEffect(() => {
        if(!initialValue) return;
        form.setFieldsValue({
            urls: initialValue
        })
    }, [initialValue, form])


    return <Modal open={true} title={`${config[type].title}链接`} footer={null} onCancel={onClose} wrapClassName="editor-modal" >
        <Form form={form}  >
            <Form.List
                name="urls"
                rules={[
                    {
                        validator: async (_, names) => {
                            if (!names.length) {
                                return Promise.reject(new Error('请输入链接'));
                            }

                            const isExist = names.every(Boolean);
                            console.log(names, 'nnnnnn')
                            if (!isExist) return Promise.reject(new Error('请输入链接'));
                            return Promise.resolve();
                        },
                    },
                ]}
            >
                {(fields, { add, remove }, { errors }) => {
                    const isMaxCount = fields.length >= maxCount;
                    console.log(errors, 9999)
                    return (
                        <>
                            {fields.map((field, index) => (
                                <Form.Item
                                    required={false}
                                    key={field.key}
                                >

                                    <div
                                        className="flex items-center"
                                    >

                                        <Form.Item
                                            {...field}
                                            name={[field.name, 'url']}
                                            rules={[
                                                {
                                                    required: true,
                                                    whitespace: true,
                                                    message: "请输入正确的链接",
                                                },
                                            ]}
                                            noStyle
                                        >
                                            <Input
                                                placeholder={`请输入${config[type].title}链接`}
                                                className="grow"
                                                onChange={() => {
                                                    form.validateFields(['urls'])
                                                }}
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            {...field}
                                            noStyle
                                            name={[field.name, 'code']}
                                        >
                                            <Input
                                                className="!hidden"
                                            />
                                        </Form.Item>
                                        <div className="shrink-0 w-[24px] h-[24px] ml-[8px]" >
                                            {fields.length > 1 ? (
                                                <MinusCircleOutlined
                                                    className="dynamic-delete-button"
                                                    onClick={() => remove(field.name)}
                                                />
                                            ) : null}
                                        </div>
                                    </div>

                                </Form.Item>
                            ))}
                            <div>

                                <Form.Item noStyle >
                                    <div className="text-[#0586FE] text-[14px] cursor-pointer inline-block mb-[16px]" onClick={isMaxCount ? undefined : () => add()} >
                                        增加{config[type].title}（{fields.length}/{maxCount}）
                                        {isMaxCount ? null : '+'}
                                    </div>
                                    {/* <Form.ErrorList errors={errors} /> */}
                                </Form.Item>
                            </div>

                            <Button
                                disabled={errors.length > 0}
                                htmlType="submit"
                                onClick={() => {
                                    const _urls = form.getFieldsValue().urls;
                                    onOk?.(_urls);
                                }}
                            >
                                确定
                            </Button>
                        </>
                    )
                }}
            </Form.List>
            {/* <Form.Item  >
                
            </Form.Item> */}
        </Form>
    </Modal>

}
export default MultiUrlModal;