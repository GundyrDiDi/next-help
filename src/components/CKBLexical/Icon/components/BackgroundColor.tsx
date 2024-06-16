/*
 * @Author: shiguang
 * @Date: 2024-06-04 16:41:13
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-05 16:16:49
 * @Description: 
 */
import { SVGProps } from "react"

interface CommonIconProps extends SVGProps<SVGSVGElement> {
    // pathStroke?: string;
    isActive?: boolean;
    backgroundColor?: string;
}
const BackgroundColor = (props: CommonIconProps) => {
    // BFBFBF
    const { isActive = false, backgroundColor, ...svgProps } = props;

    return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" {...svgProps} >
        <path fillRule="evenodd" clipRule="evenodd" d="M12.3333 12.3333C13.0697 12.3333 13.6667 11.7364 13.6667 11C13.6667 10.5091 13.2222 9.8424 12.3333 9C11.4444 9.8424 11 10.5091 11 11C11 11.7364 11.597 12.3333 12.3333 12.3333Z" fill="#262626" />
        <path d="M6.95117 1.83472L8.12967 3.01323" stroke="#262626" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7.89393 2.77759L2.7085 7.96305L6.47973 11.7343L11.6652 6.54882L7.89393 2.77759Z" stroke="#262626" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M4 6.69116L9.65367 8.54996" stroke="#262626" strokeWidth="1.5" strokeLinecap="round" />
        <path stroke={backgroundColor} d="M1.33337 14.3333H14.6667" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
}
export default BackgroundColor