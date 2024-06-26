
/*
 * @Author: shiguang
 * @Date: 2024-06-04 16:41:13
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-12 19:48:46
 * @Description: 
 */
import { SVGProps } from "react"

interface CommonIconProps extends SVGProps<SVGSVGElement> {
    // pathStroke?: string;
    isActive?: boolean;
}
const Link = (props: CommonIconProps) => {
    const { isActive = false, ...svgProps } = props;

    return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" {...svgProps} >
        <path stroke="#262626" d="M8.63085 5.34357L6.03812 2.75084C5.08349 1.79622 3.56765 1.76434 2.65235 2.67964C1.73706 3.59494 1.76894 5.11077 2.72355 6.0654L5.31629 8.65814" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path  stroke="#262626" d="M10.6387 7.35693L13.2314 9.94967C14.186 10.9043 14.3097 12.3745 13.3026 13.3354C12.2955 14.2964 10.8714 14.2188 9.91683 13.2642L7.3241 10.6715" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path stroke="#262626" d="M9.99997 10L5.78308 5.72888"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
}
export default Link
