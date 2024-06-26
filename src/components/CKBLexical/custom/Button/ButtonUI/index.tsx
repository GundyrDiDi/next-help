/*
 * @Author: shiguang
 * @Date: 2024-06-07 17:29:24
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-20 14:00:21
 * @Description: 
 */

import React, { HTMLAttributeAnchorTarget } from "react";

// 橙色 红色 蓝色
export interface ButtonUIProps {
    color?: 'red' | 'blue' | 'yellow';
    type?: 'primary' | 'default';
    isLink?: boolean;
    children?: React.ReactNode;
    className?: string | undefined;
    href?: string | undefined;
    target?: HTMLAttributeAnchorTarget;
    onClick?: () => void;
}

const colorMap = new Map([
    ['yellow-primary', {
        color: '#FAAD14',
        hoverBg: '#FFD666',
        outBorderBg: '#FAAD14',
        className: 'text-white active:outline-[#FAAD14] bg-[#FAAD14] hover:bg-[#FFD666]',
    }],
    ['yellow-default', {
        color: '#FAAD14',
        outBorderBg: '#FAAD14',
        hoverBg: '#FFD666',
        className: 'text-[#FAAD14] border border-[#FAAD14] active:outline-[#FAAD14]',
    }],
    ['red-primary', {
        color: '#FA541C',
        hoverBg: '#FF7A45',
        outBorderBg: '#FA541C',
        className: 'text-white active:outline-[#FA541C] bg-[#FA541C] hover:bg-[#FF7A45]',
    }],
    ['red-default', {
        color: '#FA541C',
        hoverBg: '#FF7A45',
        outBorderBg: '#FA541C',
        className: 'text-[#FA541C] border border-[#FA541C] active:outline-[#FA541C]',
    }],
    ['blue-primary', {
        color: '#0586FE',
        hoverBg: '#2EA1FF',
        outBorderBg: '#0586FE',
        className: 'text-white active:outline-[#0586FE] bg-[#0586FE] hover:bg-[#2EA1FF]',
    }],
    ['blue-default', {
        color: '#0586FE',
        hoverBg: '#2EA1FF',
        outBorderBg: '#0586FE',
        className: 'text-[#0586FE] border border-[#0586FE] active:outline-[#0586FE] hover:outline-[#0586FE]',
    }],
])

const ButtonUI = (props: ButtonUIProps) => {
    const {
        type = "default", color = 'blue', children, className = '',
        target, href, onClick
    } = props;
    const curStyle = colorMap.get(`${color}-${type}`)?.className;
    console.log(curStyle, 666);

    let buttonDom: React.ReactNode = null;

    if (href) {
        buttonDom = <a
            id="zzz"
            target="_blank"
            href={href}
            onClick={onClick}
            className={`active:outline-[1px] active:outline  text-[16px] leading-[24px] font-[700] px-[16px] py-[8px] rounded-[23px] ${curStyle} ${className}`}
        >
            {children}
        </a>
    } else {
        buttonDom = <button
            id="zzz"
            onClick={onClick}
            className={`active:outline-[1px] active:outline  text-[16px] leading-[24px] font-[700] px-[16px] py-[8px] rounded-[23px] ${curStyle} ${className}`}
        >
            {children}
        </button>
    }

    return buttonDom
}

export default ButtonUI;