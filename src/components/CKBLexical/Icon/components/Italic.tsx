/*
 * @Author: shiguang
 * @Date: 2024-06-04 16:41:13
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-05 09:36:12
 * @Description: 
 */
import { SVGProps } from "react"

interface CommonIconProps extends SVGProps<SVGSVGElement> {
    // pathStroke?: string;
    isActive?: boolean;
}
const Italic = (props: CommonIconProps) => {
    // BFBFBF
    const { isActive = false, ...svgProps } = props;
    const pathStroke = isActive ? '#262626' : '#BFBFBF';

    return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" {...svgProps} >
        <rect width="16" height="16" rx="3.2" />
        <path stroke={pathStroke} d="M6.66675 2H12.0001"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path stroke={pathStroke} d="M4 14H9.33333"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path stroke={pathStroke} d="M9.66659 1.98413L6.33325 14" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
}
export default Italic