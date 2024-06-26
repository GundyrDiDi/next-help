/*
 * @Author: shiguang
 * @Date: 2024-06-04 16:41:13
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-04 17:06:20
 * @Description: 
 */
import { SVGProps } from "react"

interface CommonIconProps extends SVGProps<SVGSVGElement>{
    // pathStroke?: string;
    isActive?: boolean;
}
const Undo = (props: CommonIconProps) => {
    // BFBFBF
    const { isActive = false, ...svgProps } = props;
    const pathStroke = isActive ? '#262626' : '#BFBFBF';
    
    return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" {...svgProps} >
        <rect width="16" height="16" rx="3.2" />
        <path stroke={pathStroke} d="M3.75737 12.2426C4.84313 13.3284 6.34313 14 8 14C11.3137 14 14 11.3137 14 8C14 4.6863 11.3137 2 8 2C6.34313 2 4.84313 2.67157 3.75737 3.75737C3.20469 4.31003 2 5.66667 2 5.66667"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path stroke={pathStroke} d="M2 3V5.66667H4.66667" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        
    </svg>
}
export default Undo