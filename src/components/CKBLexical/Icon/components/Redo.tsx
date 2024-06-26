/*
 * @Author: shiguang
 * @Date: 2024-06-04 16:41:13
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-04 17:04:31
 * @Description: 
 */
import { SVGProps } from "react"

interface CommonIconProps extends SVGProps<SVGSVGElement>{
    // pathStroke?: string;
    isActive?: boolean;
}
const Redo = (props: CommonIconProps) => {
    // BFBFBF
    const { isActive = false, ...svgProps } = props;
    const pathStroke = isActive ? '#262626' : '#BFBFBF';
    
    return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" {...svgProps} >
        <rect width="16" height="16" rx="3.2" />
        <path stroke={pathStroke} d="M12.2426 12.2426C11.1569 13.3284 9.65687 14 8 14C4.6863 14 2 11.3137 2 8C2 4.6863 4.6863 2 8 2C9.65687 2 11.1569 2.67157 12.2426 3.75737C12.7953 4.31003 14 5.66667 14 5.66667" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path stroke={pathStroke} d="M14 2.66663V5.66663H11" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
}
export default Redo