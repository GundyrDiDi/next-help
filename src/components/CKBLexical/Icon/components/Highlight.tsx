
/*
 * @Author: shiguang
 * @Date: 2024-06-04 16:41:13
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-05 10:26:23
 * @Description: 
 */
import { SVGProps } from "react"

interface CommonIconProps extends SVGProps<SVGSVGElement> {
    // pathStroke?: string;
    isActive?: boolean;
}
const Highlight = (props: CommonIconProps) => {
    const { isActive = false, ...svgProps } = props;

    return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" {...svgProps} >
       <path d="M2 14.6666V8.33329H4V5.66663H12V8.33329H14V14.6666H2Z"  strokeWidth="1.33333" strokeLinejoin="round"/>
       <path d="M5.66663 5.66671V2.66671L10.3333 1.33337V5.66671"  strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
}
export default Highlight
