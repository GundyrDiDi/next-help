/*
 * @Author: shiguang
 * @Date: 2024-06-12 17:50:15
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-20 21:23:05
 * @Description: 
 */
'use client'
import { MinusCircleOutlined } from "@ant-design/icons";
import { Button, Form, Modal, Input } from "antd";
import { title } from "process";
import { useEffect, useRef, useState } from "react";
import { ProductUIProps } from "../../custom/Product/ProductUI";
import { REGEXP_URL } from "../../utils/regexp";
import { requestShopInfoByUrl } from "../../custom/Shop/ShopDecorate";
import { requestProductInfoByUrl } from "../../custom/Product/ProductDecorate";

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
        if (!initialValue) return;
        form.setFieldsValue({
            urls: initialValue
        })
    }, [initialValue, form])


    return <Modal
        open={true}
        title={`${config[type].title}链接`} footer={null} onCancel={onClose}
        destroyOnClose
        wrapClassName="editor-modal"
    >
        <Form form={form} className="!pt-[8px]"  >
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
                    let validateFlag = true;
                    return (
                        <>
                            {fields.map((field, index) => (
                                <Form.Item
                                    required={false}
                                    key={field.key}
                                    noStyle
                                >
                                    <div
                                        className="flex items-center mb-[16px]"
                                    >
                                        <Form.Item
                                            {...field}
                                            validateTrigger="onChange"
                                            name={[field.name, 'url']}
                                            validateFirst
                                            rules={[
                                                {
                                                    required: true,
                                                    message: "请输入正确的链接",
                                                    validator(rule, value, callback) {
                                                        if (REGEXP_URL.test(value)) {
                                                            validateFlag = true;
                                                            return callback();
                                                        }
                                                        validateFlag = false;
                                                        return callback('请输入正确的链接');
                                                    },
                                                },
                                                {
                                                    validator: async function (rule, value, callback) {
                                                        let res: any = undefined;
                                                        try {
                                                            if (type === 'product') {
                                                                res = await requestProductInfoByUrl(value)
                                                            } else {
                                                                res = await requestShopInfoByUrl(value)
                                                            }
                                                        } catch (err: any) {
                                                            validateFlag = false;
                                                            return Promise.reject(err?.msg);
                                                        }
                                                        if (res?.code !== '0') {
                                                            validateFlag = false;
                                                            console.log(res?.msg, 666)
                                                            return Promise.reject(res?.msg);
                                                        }
                                                        validateFlag = true;
                                                        return Promise.resolve();
                                                    },
                                                },
                                            ]}
                                            noStyle
                                        >
                                            <Input
                                                placeholder={`请输入${config[type].title}链接`}
                                                className="grow"
                                            // onChange={() => {
                                            //     form.validateFields(['urls'])
                                            // }}
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
                                    <div className={`text-[#0586FE] text-[14px] cursor-pointer inline-block mb-[16px] ${isMaxCount ? 'text-[#bfbfbf]' : ''}`} onClick={isMaxCount ? undefined : () => add()} >
                                        增加{config[type].title}（{fields.length}/{maxCount}）
                                        {isMaxCount ? null : '+'}
                                    </div>
                                    {/* <Form.ErrorList errors={errors} /> */}
                                </Form.Item>
                            </div>
                            <Form.Item noStyle shouldUpdate >
                                {() => {
                                    const _urls = form.getFieldsValue().urls;
                                    // console.log(_urls, 'xxx', errors)
                                    // const isPass = _urls?.every(Boolean) && _urls?.every((item: any) => {
                                    //     return REGEXP_URL.test(item.url)
                                    // })

                                    console.log(validateFlag, 'isPass')
                                    return <Button
                                        disabled={!validateFlag}
                                        htmlType="submit"
                                        onClick={() => {
                                            onOk?.(_urls);
                                        }}
                                    >
                                        确定
                                    </Button>
                                }}
                            </Form.Item>
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