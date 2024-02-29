/*
 * @Author: shiguang
 * @Date: 2023-06-01 17:08:05
 * @LastEditors: shiguang
 * @LastEditTime: 2023-06-12 15:51:35
 * @Description: useFormModal
 */
import { Form } from 'antd';
import { Dispatch, SetStateAction, useState } from 'react';
interface UseFormModalOptions {
    close?: () => void;
    open?: () => void;
    beforeClose?: (setIsOpen: Dispatch<SetStateAction<boolean>>) => void;
    beforeOpen?: UseFormModalOptions['beforeClose'];
    afterClose?: UseFormModalOptions['beforeClose'];
    afterOpen?: UseFormModalOptions['beforeClose'];
}

export const useFormModal = <Values extends any = any>(
    options: UseFormModalOptions = {}
) => {
    const { close, open, beforeClose, beforeOpen, afterClose, afterOpen } =
        options;
    const [isOpen, setIsOpen] = useState(false);
    const [form] = Form.useForm<Values>();
    const formModal = {
        close:
            close ??
            (() => {
                beforeClose?.(setIsOpen);
                setIsOpen(false);
                afterClose?.(setIsOpen);
            }),
        open:
            open ??
            (() => {
                beforeOpen?.(setIsOpen);
                setIsOpen(true);
                afterOpen?.(setIsOpen);
            })
    };
    return {
        open: isOpen,
        modal: formModal,
        form
    };
};

export type FormModalInstance<Values extends any = any> = ReturnType<
    typeof useFormModal<Values>
>;

export type FormModalContentProps<
    Values extends any = any,
    T extends Record<string, any> = {}
> = T & {
    formModal: FormModalInstance<Values>;
};

export default useFormModal;
