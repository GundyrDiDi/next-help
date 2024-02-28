/*
 * @Author: shiguang
 * @Date: 2023-07-06 18:00:29
 * @LastEditors: shiguang
 * @LastEditTime: 2023-07-06 18:13:56
 * @Description: Description
 */
import React from 'react';
import Icon, { HomeOutlined } from '@ant-design/icons';
import type {
    CustomIconComponentProps,
    IconComponentProps
} from '@ant-design/icons/lib/components/Icon';
import { Space } from 'antd';
const Close = () => (
    <svg
        className="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="currentColor"
    >
        <path d="M512 0c282.7776 0 512 229.2224 512 512s-229.2224 512-512 512S0 794.7776 0 512 229.2224 0 512 0z m230.912 243.0464L514.2528 459.264 285.5424 243.0464l-46.5408 49.152L464.9472 505.856l-225.9456 213.6064 46.5408 49.152 228.6592-216.2176 228.7616 216.2688 46.4896-49.2032-225.9968-213.6576 225.9968-213.5552-46.4896-49.2032z" />
    </svg>
);
interface IconProps
    extends Partial<CustomIconComponentProps>,
        Pick<IconComponentProps, 'onClick'> {}
const IconClose = (props: IconProps) => <Icon component={Close} {...props} />;
export default IconClose;
