
/*
 * @Author: shiguang
 * @Date: 2024-06-04 16:41:13
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-12 17:21:59
 * @Description: 
 */
import { SVGProps } from "react"

interface CommonIconProps extends SVGProps<SVGSVGElement> {
    // pathStroke?: string;
    isActive?: boolean;
}
const RightArrow = (props: CommonIconProps) => {
    const { isActive = false, ...svgProps } = props;

    return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" {...svgProps} >
       <path d="M7.91602 5.5L12.916 10.5L7.91602 15.5" stroke="black" strokeOpacity="0.45" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
}
export default RightArrow
