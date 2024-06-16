/*
 * @Author: shiguang
 * @Date: 2024-06-05 09:38:40
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-13 23:55:40
 * @Description: 
 */
/*
 * @Author: shiguang
 * @Date: 2024-06-04 16:41:13
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-05 09:41:28
 * @Description: 
 */
import { SVGProps } from "react"

interface CommonIconProps extends SVGProps<SVGSVGElement>{
    // pathStroke?: string;
    isActive?: boolean;
}
const Underline = (props: CommonIconProps) => {
    // BFBFBF
    const { isActive = false, ...svgProps } = props;
    const pathStroke = isActive ? '#262626' : '#BFBFBF';
    
    return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" {...svgProps} >
        <rect width="16" height="16" rx="3.2" />
        <path stroke={pathStroke} d="M2.66675 14.6667H13.3334" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path stroke={pathStroke} d="M12.3334 2.03247C12.3334 4.25468 12.3334 5.11125 12.3334 7.33348C12.3334 9.72671 10.3933 11.6668 8.00008 11.6668C5.60685 11.6668 3.66675 9.72671 3.66675 7.33348C3.66675 5.11125 3.66675 4.25468 3.66675 2.03247" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
}
export default Underline