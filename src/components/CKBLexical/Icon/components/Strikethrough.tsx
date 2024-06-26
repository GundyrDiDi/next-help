
/*
 * @Author: shiguang
 * @Date: 2024-06-04 16:41:13
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-05 10:17:34
 * @Description: 
 */
import { SVGProps } from "react"

interface CommonIconProps extends SVGProps<SVGSVGElement> {
    // pathStroke?: string;
    isActive?: boolean;
}
const Strikethrough = (props: CommonIconProps) => {
    const { isActive = false, ...svgProps } = props;

    return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" {...svgProps} >
        <g clipPath="url(#clip0_1466_1327)">
            <path d="M1.66675 8H14.3334" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 8C13.3333 10 11.3333 14.6667 8 14.6667C4.66663 14.6667 4 12 4 12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11.9999 3.99992C11.9999 3.99992 10.9999 1.33325 7.99989 1.33325C4.99989 1.33325 3.81189 3.86642 5.20313 5.99992" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 12C4 12 5.3333 14.6667 8 14.6667C10.6667 14.6667 12.188 12.1335 10.7968 10" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
            <clipPath id="clip0_1466_1327">
                <rect width="16" height="16" fill="white" />
            </clipPath>
        </defs>
    </svg>
}
export default Strikethrough