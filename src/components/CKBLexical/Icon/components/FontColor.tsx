/*
 * @Author: shiguang
 * @Date: 2024-06-04 16:41:13
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-05 16:09:14
 * @Description: 
 */
import { SVGProps } from "react"

interface CommonIconProps extends SVGProps<SVGSVGElement>{
    // pathStroke?: string;
    isActive?: boolean;
    fontColor?: string;
}
const FontColor = (props: CommonIconProps) => {
    // BFBFBF
    const { isActive = false, fontColor, ...svgProps } = props;
    const pathStroke = isActive ? '#262626' : '#BFBFBF';
    
    return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" {...svgProps} >
        {/* <path stroke={pathStroke}  fillRule="evenodd" clipRule="evenodd" d="M8.00003 8.00001C9.52936 8.00001 10.7691 6.75635 10.7691 5.22224C10.7691 3.68811 9.52936 2.44446 8.00003 2.44446H4.38892V8.00001H8.00003Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path stroke={pathStroke}  fillRule="evenodd" clipRule="evenodd" d="M9.11981 13.5556C10.6491 13.5556 11.8889 12.3119 11.8889 10.7778C11.8889 9.24367 10.6491 8 9.11981 8H4.38892V13.5556H9.11981Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> */}

        <path d="M4.33337 9.66675L5.55561 7.00008M5.55561 7.00008L6.16671 5.66675L8.00004 1.66675L9.83337 5.66675L10.4445 7.00008M5.55561 7.00008H10.4445M11.6667 9.66675L10.4445 7.00008" stroke="#262626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path stroke={fontColor} d="M14 12.3333H2"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
}
export default FontColor